<script lang="ts">
  import { fade } from 'svelte/transition';
  import HeroePopup from './heroe-popup.svelte';
  export let data:any;
  let showModal = false;

  function closePopup(e:Event) {
    showModal = false;
  }
  function nothing() {
    return;
  }
</script>

{#if showModal}
  <HeroePopup {data} {closePopup} />
{/if}

<div>
  <div
    transition:fade={{ duration: 700 }}
    class="image-card"
    on:click={(event) => {
      showModal = true;
    }}
    on:keydown={() => {}}
  >
    <img
      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      alt={data.title}
    />
  </div>
</div>

<style>
  .image-card {
    cursor: pointer;
    width: 8rem;
    height: 10.5rem;
    /* margin-bottom: 9rem; */
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: var(--bg-dark-2);
  }
  .image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
