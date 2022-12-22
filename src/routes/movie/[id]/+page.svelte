<script lang="ts">
  import { blur } from 'svelte/transition';
	import type dataType from './types';
  export let data;

  const { mov, cast }:dataType = data;
  const castFilter = cast.cast.slice(0, 12);
  // console.log();
  
</script>

{#await mov then data}
  <div
    class="wrapper"
    transition:blur
    style={`background-image:url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}
  >
    <div class="content">
      <button class="btn-back" on:click={() => history.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
          /></svg
        >
        <span>Back</span>
      </button>
      <div class="info">
        <span class="title">{data.title}</span>
        <div class="details">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path fill="none" d="M0 0h24v24H0z" /><path
                d="M18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301 14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
              /></svg
            >
            <span>{data.original_language.toUpperCase()}</span>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path fill="none" d="M0 0h24v24H0z" /><path
                d="M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z"
              /></svg
            >
            <span>{data.vote_average.toFixed(1)}</span>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path fill="none" d="M0 0h24v24H0z" /><path
                d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"
              /></svg
            >
            <span>{data.release_date}</span>
          </div>
        </div>
        <span class="description">
          {data.overview}
        </span>
      </div>
    </div>
  </div>
{/await}
{#await castFilter then data}
  <div class="actor-list-wrap">
    <h2>Cast</h2>
    <div class="actor-list-scroll">
      <div class="actor-list">
        {#each data as actor}
          {#if actor.profile_path}
            <div class="actor-card">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
                alt=""
              />
              <div class="actor-name">
                <span>{actor.name}</span>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
{/await}

<style>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    min-height: 70vh;
    max-height: 75vh;
    /* background-color: rgb(14, 14, 14); */
    background-size: cover;
  }
  .bg {
    width: 100%;
    height: inherit;
    object-fit: cover;
    object-position: top;
  }
  /* .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  } */
  .content {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75) 18%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    padding-left: 3rem;
    display: flex;
    padding-bottom: 2rem;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: space-around;
  }
  .info {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2rem;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-1);
  }
  .description {
    color: var(--text-2);
    line-height: 1.6;
    font-size: 1rem;
    max-width: 32rem;
  }
  .details {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .details div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  /*ACTOR*/
  .actor-list-wrap {
    margin-top: 2rem;
    margin-left: 2rem;
  }
  .actor-list-scroll {
    /* display: flex; */
    /* max-width: 100%; */
    width: 100%;
    max-width: 55rem;
    height: auto;
    /* width: max-content; */
    overflow-x: scroll;
  }
  .actor-list {
    display: flex;
    /* max-width: 100%; */
    width: max-content;
    height: max-content;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .actor-list-scroll::-webkit-scrollbar {
    background: var(--bg-dark-2);
    height: 0.7rem;
  }
  .actor-list-scroll::-webkit-scrollbar-thumb {
    background: var(--bg-dark-3);
    border-radius: 10rem;
  }

  .actor-card {
    position: relative;
    min-width: 9rem;
    max-width: 9rem;
    height: 11rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--bg-dark-2);
  }
  .actor-card img {
    width: 100%;
    height: 100%;
    max-height: 11rem;
    object-fit: cover;
    object-position: top;
  }
  .actor-card img:hover ~ .actor-name {
    opacity: 1;
    transform: translateY(0);
  }
  .actor-name {
    transform: translateY(100%);
    transition: 400ms linear;
    padding: 0.5rem 0;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .btn-back {
    /* position: absolute; */
    /* top: 13%; */
    /* left: -3%; */
    background-color: rgb(38, 38, 38);
    color: var(--text-3);
    border: none;
    font-size: 1.1rem;
    padding: 0.5rem 0.4rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    width: max-content;
    padding-right: 1rem;
    z-index: 1;
  }
  .btn-back svg {
    height: 1.3rem;
    width: 1.3rem;
  }

  @media (max-width: 600px) {
    .wrapper {
      max-height: max-content;
      min-height: auto;
    }
    .content {
      height: 100%;
      padding-right: 1rem;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 1rem;

      /* background-color: red; */
    }
    .info {
      width: 100%;
      margin-top: 0;
    }
    .content {
      background: rgba(0, 0, 0, 0.75);
    }
    /* .bg {
      object-position: center;
    } */
    .title {
      font-size: 2rem;
    }
    .description {
      font-size: 1rem;
    }
  }
</style>
