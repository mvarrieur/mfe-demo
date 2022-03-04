<script>
  import starOutline from './images/star-outline.svg';
  import star from './images/star.svg';
  export let pokemon = { sprites: {} };
  export let favorited = false;

  $: sprites = Object.keys((pokemon.sprites || {}))
    .filter(k => typeof(pokemon.sprites[k]) === 'string') // This object has nested objects inside we dont want
    .filter(k => pokemon.sprites[k] && pokemon.sprites[k].includes('http')) // some values are null, make sure there is a URL
    .reduce((acc, k) => {
      acc.unshift(pokemon.sprites[k]);

      return acc;
    }, []);
</script>

<div class="flex flex-col items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br p-8">
  <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
    {#if pokemon.name}
      <div class="relative">
        <h1 class="text-2xl text-center capitalize font-bold">{pokemon.name} <span class="text-slate-500">#{pokemon.id}</span></h1>
        <button class="absolute right-0 top-0 w-8 h-8 fill-gray-500" class:fill-yellow-500={favorited}>
          {#if favorited}
            {@html star}
          {:else}
            {@html starOutline}
          {/if}
          
        </button>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} class="w-full h-auto" />
        {#each sprites as sprite}
          <img class="inline" src={sprite} alt={`${pokemon.name} sprite`} />
        {/each}
      </div>
      
    {:else}
      <h1 class="text-2xl w-full text-center m-4 font-bold">Search for a pokemon!</h1>
    {/if}
  </div>
</div>

