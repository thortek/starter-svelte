<script lang="ts">
    // Import necessary components
    import Introduction from './introduction/+page.svelte';
    import Reactivity from './reactivity/+page.svelte';
    import Props from './props/+page.svelte';
    import Logic from './logic/+page.svelte';
  
    // Define the active route
    let activeRoute = 'Introduction';
  </script>
  
  <main class="flex justify-center mt-8">
    <div class="w-3/4">
      <h1 class="text-2xl font-bold mb-8">Key Svelte Features (with example code!)</h1>
  
      <nav class="flex mb-4">
        <button
          class="py-2 px-4 rounded-lg mr-4 bg-indigo-500 text-white"
          class:opacity-50={activeRoute !== 'Introduction'}
          on:click={() => (activeRoute = 'Introduction')}
        >
          Introduction
        </button>
        <button
          class="py-2 px-4 rounded-lg mr-4 bg-indigo-500 text-white"
          class:opacity-50={activeRoute !== 'Reactivity'}
          on:click={() => (activeRoute = 'Reactivity')}
        >
          Reactivity
        </button>
        <button
          class="py-2 px-4 rounded-lg mr-4 bg-indigo-500 text-white"
          class:opacity-50={activeRoute !== 'Props'}
          on:click={() => (activeRoute = 'Props')}
        >
          Props
        </button>
        <button
          class="py-2 px-4 rounded-lg mr-4 bg-indigo-500 text-white"
          class:opacity-50={activeRoute !== 'Logic'}
          on:click={() => (activeRoute = 'Logic')}
        >
          Logic
        </button>
      </nav>
  
      {#if activeRoute === 'Introduction'}
        <Introduction />
      {/if}
      {#if activeRoute === 'Reactivity'}
        <Reactivity />
      {/if}
      {#if activeRoute === 'Props'}
        <Props />
      {/if}
      {#if activeRoute === 'Logic'}
        <Logic />
      {/if}
    </div>
  </main>