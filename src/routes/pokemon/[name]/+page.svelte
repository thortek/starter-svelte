<script lang="ts">

export let data;
$: console.log(data)

</script>

<main class="flex flex-wrap flex-col justify-center gap-2">
    <h2 class="text-center">{data.pokemon.name}</h2>
    <img src={data.pokemon.image} alt="pokemon" class="w-96"/>
    <p>Height: {data.pokemon.height}</p>
    <p>Weight: {data.pokemon.weight}</p>

    {#each data.pokemon.abilities as  ability }
    <h4 class="text-center">Ability: {ability}</h4>
    {/each}

    {#each data.pokemon.moves as  move }
    <h4 class="text-center">Move: {move}</h4>
    {/each}

    {#each data.pokemon.types as  type }
    <h4 class="text-center">Type: {type}</h4>
    {/each}

    <!-- {#each data.pokemon.stats as  stat }
    <h4 class="text-center">Stat: {stat.stat.name}</h4>
    {/each} -->
</main>