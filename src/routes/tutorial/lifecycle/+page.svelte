<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';

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

	let text = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(this: any, event: { key: string; preventDefault: () => void; }) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
	
</script>

<div class="flex flex-col items-center justify-center">
	{#if pokemonImageURL}
		<h1 class="bg-blue-100 w-96 text-center text-4xl p-8 text-red-900">{pokeName.toUpperCase()}</h1>
		<img src={pokemonImageURL} alt="pokemon" />
	{:else}
		<p>Loading...</p>
	{/if}
	<textarea class="textarea text-center mx-auto mt-8 w-96 h-32"
	value={text}
	on:keydown={handleKeydown}
/>
</div>



