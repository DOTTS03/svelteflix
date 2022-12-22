<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	let quickSearchVisible = false;
	function showQuickSearch(): void {
		quickSearchVisible = true;
	}
	function hideQuickSearch(): void {
		quickSearchVisible = false;
	}
	function handleEscape(e: Event) {
		if (e && e.target && e.target instanceof HTMLFormElement) {
			const keyboard = e as KeyboardEvent;
			if (keyboard.key === 'Escape') {
				hideQuickSearch();
			}
		}
	}
	function handleSearch(e: Event) {
		if (e && e.target && e.target instanceof HTMLFormElement) {
			const form = e.target as HTMLFormElement;
			e.preventDefault();
			const query = form.search.value;
			if (query.length > 0) {
				goto(`/search/${query}`);
				quickSearchVisible = false;
			}
		}
	}
</script>

<div>
	<button class="btn-showquicksearch" on:click={showQuickSearch} on:keydown={handleEscape}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
			/></svg
		>
		<span>Quick Search</span>
	</button>

	{#if quickSearchVisible}
		<div
			transition:fade={{ duration: 200 }}
			class="quick-search-wrap"
			on:click={hideQuickSearch}
			on:keydown={(e) => {}}
		>
			<div
				class="quick-search-content"
				on:click={(e) => e.stopPropagation()}
				on:keydown={handleEscape}
			>
				<form on:submit={handleSearch}>
					<div class="search-box">
					
						<input type="text" autofocus name="search" placeholder="Search something..."/>

						<button class="btn-mobile-search" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
							/></svg
						>
						</button>
						<button on:click={hideQuickSearch} type="button" class="btn-escape">ESC</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
</div>

<style>
	.quick-search-wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		backdrop-filter: blur(2px);
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 100;
		/* align-items: center; */
	}
	.quick-search-content {
		margin-top: 25vh;
		display: flex;
		height: max-content;
	}
	input {
		font-size: 1.05rem;
		padding: 0 0.5rem;
		background: none;
		border: none;
		outline: none;
		width: 90%;
		max-width: 30rem;
		color: var(--text-2);
	}
	.search-box {
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		background-color: var(--bg-dark-2);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.btn-escape {
		background-color: var(--bg-dark-3);
		color: var(--text-3);
		border: none;
		font-size: 0.65rem;
		padding: 0.4rem;
		border-radius: 0.35rem;
		font-weight: bold;
		cursor: pointer;
	}
	.btn-mobile-search {
		background: none;
		color: var(--text-3);
		border: none;
    display: flex;
    align-items: center;
		font-weight: bold;
		cursor: pointer;
    margin-right: 0.4rem;
	}
  .btn-mobile-search > svg {
    color: var(--text-3);
    /* font-size:2rem; */
    width: 1.3rem;
    height: 1.3rem;
  }
	.btn-showquicksearch {
		background-color: rgba(26, 66, 109, 0.4);
		color: rgb(104, 167, 212);
		border: none;
		font-size: 0.9rem;
		padding: 0.7rem 0.8rem;
		border-radius: 0.7rem;
		font-weight: bold;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	@media (max-width: 600px) {
		.quick-search-content {
			width: 80%;
		}
		.btn-escape {
			display: none;
		}
		input {
			font-size: 1.3rem;
		}
		.search-box svg {
			width: inherit;
			height: inherit;
		}
	}
</style>
