<script lang="ts">

	let genres = [
		{
			id: 28,
			name: 'Action'
		},
		{
			id: 12,
			name: 'Adventure'
		},
		{
			id: 16,
			name: 'Animation'
		},
		{
			id: 35,
			name: 'Comedy'
		},
		{
			id: 80,
			name: 'Crime'
		},
		{
			id: 99,
			name: 'Documentary'
		},
		{
			id: 18,
			name: 'Drama'
		},
		{
			id: 10751,
			name: 'Family'
		},
		{
			id: 14,
			name: 'Fantasy'
		},
		{
			id: 36,
			name: 'History'
		},
		{
			id: 27,
			name: 'Horror'
		},
		{
			id: 10402,
			name: 'Music'
		},
		{
			id: 9648,
			name: 'Mystery'
		},
		{
			id: 10749,
			name: 'Romance'
		},
		{
			id: 878,
			name: 'Science Fiction'
		},
		{
			id: 10770,
			name: 'TV Movie'
		},
		{
			id: 53,
			name: 'Thriller'
		},
		{
			id: 10752,
			name: 'War'
		},
		{
			id: 37,
			name: 'Western'
		}
	];

</script>

<div class="filters">
	<div class="genreList">
		{#each genres as genre}
			<div>
				<input class="genreCTA" id={`genre${genre.id}`} type="radio" name="gnre" value={genre.id} />
				<label for={`genre${genre.id}`}>{genre.name}</label>
			</div>
		{/each}
	</div>
</div>

<style>
	.filters {
		margin: auto;
		display: flex;
		flex-direction: column;
		max-width: 15rem;
		min-width: 15rem;
		align-items: center;
	}
	.genreCTA {
		display: none;
	}
	.genreCTA:checked ~ label {
		opacity: 1;
		background-color: rgba(109, 26, 83, 0.4);
    color: rgb(211, 112, 193);
	}

	.genreCTA ~ label {
		background-color: var(--bg-dark-2);
		color: var(--text-3);
		font-weight: 600;
		opacity: 0.6;
		padding: 0.37rem 0.72em;
		border-radius: 2rem;
		cursor: pointer;
		transition: opacity 300ms linear;
		font-size: 0.9rem;
	}
	.genreList {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
		align-items: center;
		gap: 1.1rem;
		column-gap: 0.9rem;
		max-width: 42rem;
		height: max-content;
	}

	/* .btn-showfullgenrelist ~.genreList {
		background-color: red;
	} */
</style>
