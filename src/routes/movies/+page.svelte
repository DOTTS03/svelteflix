<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchHeroesTop } from '../../services/fetch';
	import FilterBox from '../../components/filter-box.svelte';
	import HeroeCard from '../../components/heroe-card.svelte';
	let page = 1;
	let movs: Array<any> = [];
	let filter = {
		genre: 0
	};

	interface Action {
		type: string;
		payload?: any;
	}
	async function load(page: number, action: Action) {
		if (page > 3) {
			page = 0;
			return;
		}
		let DATA = await fetchHeroesTop(page).then((data) => data.results);
		let dupl = [...movs, DATA].flat();

		// Elimina los objetos duplicados del array aplanado y asigna el resultado a la variable movs
		let newMovs = [...new Set(dupl.map((object) => JSON.stringify(object)))].map((object) =>
			JSON.parse(object)
		);
		if (action.type === 'loadMore' && action.payload > 0)
			movs = newMovs.filter(
				(mov) => mov.genre_ids.length > 0 && mov.genre_ids.includes(action.payload)
			);
		if (action.type === 'load') movs = newMovs;
		if (action.type === 'filter')
			movs = newMovs.filter(
				(mov) => mov.genre_ids.length > 0 && mov.genre_ids.includes(action.payload)
			);
	}
	function handleClick() {
		// if (page < 3) {
		// }
		if (page >= 2) {
			page = 1;
		} else {
			page += 1;
			// console.log(filter);
			load(page, { type: 'loadMore', payload: filter.genre });
		}
	}
	onMount(() => {
		load(page, { type: 'load' });
	});

	function handleSubmit(e: Event) {
		if (e && e.target && e.target instanceof HTMLFormElement) {
			const form = e.target as HTMLFormElement;
			const genre = form.gnre.value;
			page = 1;
			load(1, {
				type: 'filter',
				payload: Number(genre)
			});
			filter = { ...filter, genre: Number(genre) };
		}
	}
</script>

<!-- <h1>movies list</h1> -->

<div class="wrapper">
	<form on:submit={handleSubmit}>
		<span class="text-2 text-600">Sort By</span>
		<FilterBox />
		<button type="submit" class="btn-blue btn-search"><span>Search</span></button>
	</form>
	<div class="filter-wrapper">
		<div class="filter-scroll">
			<div class="results-filter">
				{#each movs as movie}
					<HeroeCard data={movie} />
				{/each}
			</div>
			{#if page > 2 || movs.length < 1}
				<span>No results...</span>
			{:else if page < 2 && movs.length > 0}
				<button class="btn-loadmore" on:click={handleClick}> Load More </button>
			{/if}
		</div>
	</div>
</div>

<style>
	.btn-search {
		width: 80%;
	}
	form {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding-left: 3rem;
		margin-right: 1.5rem;
		gap: 1.5rem;
		height: 100%;
	}
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
		margin-top: 3rem;
	}
	.filter-wrapper {
		margin-top: 2rem;
		margin-left: 2rem;
		height: 70vh;
		overflow: hidden;
	}
	.filter-scroll {
		/* display: flex; */
		/* max-width: 100%; */
		width: 100%;
		max-width: 55rem;
		height: 100%;
		/* width: max-content; */
		overflow-x: scroll;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
	.filter-scroll::-webkit-scrollbar {
		background: var(--bg-dark-2);
		width: 0.7rem;
	}
	.filter-scroll::-webkit-scrollbar-thumb {
		background: var(--bg-dark-3);
		border-radius: 10rem;
	}
	.results-filter {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		/* min-width: 30rem; */
		width: 100%;
		max-width: 48rem;
		margin-top: 2rem;
	}
	.btn-loadmore {
		background-color: var(--bg-dark-2);
		color: var(--text-3);
		border: none;
		padding: 0.5rem 0.6rem;
		border-radius: 0.35rem;
		font-weight: bold;
		cursor: pointer;
	}
</style>
