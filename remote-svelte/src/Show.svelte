<script>
  import { fade } from "svelte/transition";
  import starOutline from "./images/star-outline.svg";
  import star from "./images/star.svg";
  export let pokemon = { sprites: {} };
  export let favorited = false;
  export let handleFavoriteClick = () => {};

  $: sprites = Object.keys(pokemon.sprites || {})
    .filter((k) => typeof pokemon.sprites[k] === "string") // This object has nested objects inside we dont want
    .filter((k) => pokemon.sprites[k] && pokemon.sprites[k].includes("http")) // some values are null, make sure there is a URL
    .reduce((acc, k) => {
      acc.unshift({ src: pokemon.sprites[k], title: k });

      return acc;
    }, []);
</script>

<div
  class="flex flex-col items-center justify-center min-h-screen from-red-100 via-red-300 to-red-500 bg-gradient-to-br p-8"
>
  {#if pokemon.name}
    <h1 class="text-2xl text-center capitalize font-bold mb-2">
      {pokemon.name} <span class="text-slate-500">#{pokemon.id}</span>
    </h1>
  {/if}
  <div
    class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl transition-colors"
    class:bg-yellow-50={favorited}
  >
    {#if pokemon.name}
      <div transition:fade class="relative">
        <!-- <button
          class="absolute right-0 top-0 w-8 h-8 fill-gray-500 transition-colors duration-300 hover:fill-gray-800"
          class:fill-yellow-500={favorited}
          class:hover:fill-yellow-700={favorited}
          on:click={handleFavoriteClick(pokemon)}
        >
          {#if favorited}
            {@html star}
          {:else}
            {@html starOutline}
          {/if}
        </button> -->
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          class="w-full h-auto"
        />
        {#each sprites as sprite}
          <img
            class="inline"
            src={sprite.src}
            alt={`${pokemon.name} sprite`}
            title={sprite.title}
          />
        {/each}
      </div>
    {:else}
      <h1 class="text-2xl w-full text-center m-4 font-bold">
        Search for a pokemon!
      </h1>
    {/if}
  </div>
</div>
