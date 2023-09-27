<script lang="ts">
	import { onMount } from 'svelte';

	let pokemonImageURL: string;
	let pokeName: string;

	onMount(async () => {
		console.log('onMount');
		const randomPokemonID = Math.floor(Math.random() * 150) + 1;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`);
		const pokemon = await response.json();
		pokeName = pokemon.name;
		pokemonImageURL = pokemon.sprites?.other?.['official-artwork']?.front_default;
	});
</script>

<div class="flex flex-col items-center justify-center">
	{#if pokemonImageURL}
		<h1 class="bg-blue-100 w-96 text-center text-4xl p-8 text-red-900">{pokeName.toUpperCase()}</h1>
		<img src={pokemonImageURL} alt="pokemon" />
	{:else}
		<p>Loading...</p>
	{/if}
</div>
