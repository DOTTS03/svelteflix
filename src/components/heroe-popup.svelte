<script>
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  export let data, closePopup;
</script>

<div
  transition:fade={{ duration: 300 }}
  class="popup-card"
  on:click={closePopup}
  on:keydown={() => {}}
>
  <!-- transition:blur={{opacity:0.5, duration:200}} -->
  <div
    transition:fade={{ duration: 250 }}
    class="popup-content"
    on:click={(e) => e.stopPropagation()}
    on:keydown={() => {}}
  >
    <div class="picture">
      <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
    </div>
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
          <span>{data.vote_average}</span>
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
      <p class="overview">{data.overview}</p>

      <div class="cta">
        <button class="btn-viewmore" on:click={() => goto(`/movie/${data.id}`)}>
          View More
        </button>
      </div>
    </div>
    <button class="btn-close" on:click={closePopup}>Close</button>
  </div>
</div>

<style>
  .popup-card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0%;
    right: 0%;
    /* transform: translate(-50%, -50%); */
    background-color: rgba(0, 0, 0, 0.6);
  }
  .popup-content {
    position: relative;
    border-radius: 1rem;
    background-color: var(--bg-dark-2);
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 47rem;
    overflow: hidden;
  }
  .picture img {
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
  .info {
    padding: 2rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }
  .overview {
    color: var(--text-2);
    font-size: 1rem;
    line-height: 1.7;
    width: 100%;
    max-height: 9rem;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;
  }
  .title {
    font-weight: bold;
    font-size: 1.65rem;
    color: var(--text-1);
  }
  .details {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    color: var(--text-3);
    font-size: 0.8rem;
  }
  .details div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .cta {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
  .btn-viewmore {
    margin-top: 2rem;
    background-color: rgba(26, 66, 109, 0.4);
    color: rgb(104, 167, 212);
    border: none;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.7rem;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-close {
    position: absolute;
    top: 2%;
    right: 1%;
    background-color: rgba(109, 26, 26, 0.4);
    color: rgb(212, 104, 104);
    border: none;
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .popup-content {
      display: flex;
      flex-direction: column;
      width: 85%;
      gap: 1rem;
    }
    .info {
      padding: 1.5rem;
      padding-top: 2rem;
      padding-bottom: 1.5rem;
      gap: 1.5rem;
    }
    .picture {
      display: none;
    }
    .cta {
      padding: 0;
    }
    .btn-viewmore,
    .btn-close {
      font-size: 1rem;
    }
    .btn-viewmore {
      margin-top: 0.6rem;
    }
    .btn-close {
      top: 3%;
      right: 3%;
      padding: 0.7rem;
      border-radius: 1rem;
    }
  }
</style>
