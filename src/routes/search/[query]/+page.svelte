<script lang="ts">
	// import { escape } from 'svelte/internal';
	import QuickSearch from '../../../components/quick-search.svelte';
	import type { SearchTypes, Result } from '../../../types/fetch-types';
	import { goto } from '$app/navigation';
	interface Data {
		data: Result[];
		query: string;
	}
	export let data: Data;
</script>

{#if !data}
<p>loading...</p>
{:else}
<main>
    <QuickSearch/>
		<!-- {#await data then data} -->
		<div class="results-info">
			<span class="text-3">results for:</span>
			<!-- <span class="text-1">{data.query}</span> -->
		</div>
		<div class="grid-card">
			{#each data.data as result}
				{#if result.poster_path || result.backdrop_path}
					<div class="card-mov" on:click={() => goto(`/movie/${result.id}`)} on:keydown={() => {}}>
						<img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
					</div>
				{/if}
			{/each}
		</div>
		<!-- {/await} -->
	</main>
{/if}

<style>
	main {
		max-width: 70rem;
		margin: auto;
		margin-top: 4rem;
    /* margin */
	}
  .results-info{
    margin-top: 2rem;
  }
	.grid-card {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 2rem;
	}
	.card-mov {
		cursor: pointer;
		width: 7rem;
		height: 9rem;
		/* margin-bottom: 9rem; */
		overflow: hidden;
		border-radius: 0.5rem;
		background-color: var(--bg-dark-2);
	}
	.card-mov img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
	span {
		font-size: 1.2rem;
	}
</style>
