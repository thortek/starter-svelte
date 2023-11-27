<script lang="ts">
	export let data;

	$: console.log(data.body);
</script>

<header>
	<h1 class="text-4xl font-bold">Avatars</h1>
</header>
<main class="flex flex-wrap justify-center gap-2">
    {#each data.body as { firstName, lastName, avatar }}
	<a href={`/avatars/${lastName}?${data.body}`} class="btn variant-filled-primary">
        <img src={avatar} alt="avatar" class="rounded-full w-8 h-8"/>
        <h2 class="text-2xl font-bold">{firstName}</h2>
        <h2 class="text-2xl font-bold">{lastName}</h2>
    </a>
    {/each}
</main>
