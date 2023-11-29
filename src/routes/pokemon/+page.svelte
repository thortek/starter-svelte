<script lang="ts">
	import { onMount } from 'svelte';
    import { pokeStore } from '$lib/stores/pokeStore'

	interface Pokemon {
		name: string;
		url: string;
	}

	onMount(async () => {
		if ($pokeStore.length > 0) return; // if pokeStore already has data, don't fetch again.
        
		const randomPokemonID = Math.floor(Math.random() * 900) + 1;
		console.log(randomPokemonID);
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${randomPokemonID}`);
		const data = await res.json();
		pokeStore.set(data.results as Pokemon[]);

	});
</script>

<header>
	<h1 class="text-4xl font-bold">Pokemon</h1>
</header>
<main class="flex flex-wrap justify-center gap-2">
	{#if $pokeStore.length === 0}
		<h2>Loading...</h2>
	{:else}
		{#each $pokeStore as { name, url }}
			<a href={`/pokemon/${name}`} class="btn variant-filled-primary">
				<h2 class="text-2xl font-bold">{name}</h2>
			</a>
		{/each}
	{/if}
</main>
