<script>
  export let pokemon = { sprites: {} };
</script>

<div>
  <ul>
    <li>Name: {pokemon.name}</li>
    {#each Object.entries(pokemon.sprites || {}) as sprite}
      {#if sprite[1].includes("http")}
        <img src={sprite[1]} alt={sprite[0]} />
      {/if}
    {/each}
  </ul>
</div>
