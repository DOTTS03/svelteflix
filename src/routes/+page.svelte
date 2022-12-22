<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import fetchHeroesTop from '../services/fetch/fetch-heroes-top';
	import HeroeCard from '../components/heroe-card.svelte';
	import QuickSearch from '../components/quick-search.svelte';
	let page = 1;
	let movs: Array<any> = [];

	async function load(page: number) {
		let data = await fetchHeroesTop(page).then((data) => data.results);
		// let dupl = [...movs, data].flat();

		// Elimina los objetos duplicados del array aplanado y asigna el resultado a la variable movs
		// movs = [...new Set(dupl.map((object) => JSON.stringify(object)))].map((object) =>
		// 	JSON.parse(object)
		// );
		movs = data;
	}
	function handleClick() {
		page += 1;
		// load(page)
		goto('/movies');
	}
	onMount(() => {
		load(page);
	});
</script>

<main>
	<QuickSearch />
  <h1>Top Movies</h1>

	{#if movs.length > 1}
		<div class="grid-card">
			{#each movs as data}
				<HeroeCard {data} />
			{/each}
		</div>
		<button class="btn-loadmore" on:click={handleClick}> View More </button>
	{:else}
		<img src="/loader.svg" class="loader" alt="" />
	{/if}
</main>

<style>
	main {
		max-width: 90rem;
		margin: auto;
		margin-top: 6rem;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		margin-bottom: 5rem;
		padding-left: 2rem;
	}
	.grid-card {
		display: flex;
		flex-wrap: wrap;
		/* max-width: 80rem; */
		margin: auto;
		gap: 1.5rem;
	}
  .loader {
    margin-top:2rem;
    margin-left: 2rem;
    width: 3rem;
    height: 3rem;
  }
	@media (max-width: 600px) {
		main {
			align-items: center;
		}
	}

	.btn-loadmore {
		margin: auto;
		margin-top: 2rem;
		background-color: rgba(26, 66, 109, 0.4);
		color: rgb(104, 167, 212);
		border: none;
		font-size: 1rem;
		padding: 0.7rem 1.2rem;
		border-radius: 0.7rem;
		font-weight: bold;
		cursor: pointer;
	}
</style>
