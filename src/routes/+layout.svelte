<script>
	import QuickSearch from '../components/quick-search.svelte';
	// console.log("previous",previousPage);
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li>
			<QuickSearch />
		</li>
	</ul>
</nav>
<slot />

<style>
	:global(body) {
		margin: 0;
		--bg-dark-1: #111111;
		--bg-dark-2: #191919;
		--bg-dark-3: #2e2e2e;
		--text-1: #f1f1f1;
		--text-2: #e8e8e8;
		--text-3: #d1d1d1;
		background-color: var(--bg-dark-1);
		color: var(--text-1);
		font-family: 'Inter', sans-serif;
	}
	:global(.btn-blue) {
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
		text-align: center;
		justify-content: center;
	}
	:global(.text-600) {
		font-weight: 600;
		font-size: 1.2rem;
	}
	:global(.text-1) {
		color: var(--text-1);
	}
	:global(.text-2) {
		color: var(--text-2);
	}
	:global(.text-3) {
		color: var(--text-3);
	}
	:global(svg) {
		fill: currentColor;
		height: 1.05rem;
		width: 1.05rem;
	}
	:global(div > *) {
		margin: 0;
	}
	:global(a) {
		text-decoration: none;
		color: var(--text-1);
	}
	:global(ul) {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	:global(li) {
		margin: 0;
		padding: 0;
	}
	:global(*) {
		box-sizing: border-box;
		padding: 0;
	}
	nav {
		padding: 1rem 0;
		display: flex;
		justify-content: center;
		position: sticky;
		width: 100%;
		top: 0;
		right: 0;
		z-index: 2;
		background-color: rgba(26, 26, 26, 0.2);
		backdrop-filter: blur(20px);
	}
	nav ul {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
