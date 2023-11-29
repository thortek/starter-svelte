export async function load({ params, fetch }) {
	const pokeName = params.name;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
	const pokemon = await res.json();
	console.log(pokemon);

	return {
		pokemon: {
			name: pokemon.name,
			id: pokemon.id,
			height: pokemon.height,
			weight: pokemon.weight,
			image: pokemon.sprites?.other?.['official-artwork']?.front_default,
			types: pokemon.types.map((type: any) => type.type.name),
			abilities: pokemon.abilities.map((ability: any) => ability.ability.name),
			moves: pokemon.moves.map((move: any) => move.move.name),
			// stats: pokemon.stats.map((stat: any) => {
			// 	return {
			// 		name: stat.stat.name,
			// 		value: stat.base_stat
			// 	};
			// })
		}
	};
}
