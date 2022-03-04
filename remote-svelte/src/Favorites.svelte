<script>
  import { fade } from 'svelte/transition';
  export let favorites = {};
</script>

<div class="flex flex-col items-center justify-center min-h-screen from-red-100 via-red-300 to-red-500 bg-gradient-to-br p-8">
  <h1 class="font-bold text-xl mb-2">Favorites</h1>
  <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
      <ul>
        {#each Object.values(favorites) as favorite}
          <li transition:fade class="capitalize">{favorite.name} <span class="text-slate-500 text-xs">(#{favorite.id})</span></li>
        {/each}
      </ul>
  </div>
</div>