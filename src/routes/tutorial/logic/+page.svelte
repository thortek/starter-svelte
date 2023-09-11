<script lang="ts">
    import { faker } from '@faker-js/faker'
    import { getRandomNumber } from '$lib/utils/delayFunction'
    import { ProgressRadial } from '@skeletonlabs/skeleton';

	let count = 0;

    let promise = getRandomNumber();

	function increment() {
		count += 1;
	}

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];

    const twentyFiveAvatars = [...Array(25)].map(() => {
        const lastName = faker.person.lastName()
        return {
            lastName,
            avatar: `https://avatars.dicebear.com/api/adventurer/${lastName}.svg`,
        }
    })

    function handleClick() {
		promise = getRandomNumber();
	}

</script>

<button class="btn btn-lrg variant-filled-primary" on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
	<p>{count} is less than 5</p>
{:else}
	<p>{count} is somewhere between 0 and 10</p>
{/if}

<div class="m-8 p-8 bg-white">
	<h1 class="py-4" style="color: {selected}" >Pick a colour</h1>

	<div class="grid grid-cols-7 gap-2 max-w-md">
		{#each colors as color, i}
			<button class="btn rounded-full hover:-translate-y-2 hover:scale-110 aria-selected:shadow-xl"
				aria-current={selected === color}
				aria-label={color}
				style="background: {color}"
				on:click={() => (selected = color)}>{i + 1}</button
			>
		{/each}
	</div>
</div>

<div class="bg-slate-200 m-8 flex flex-wrap justify-center">
    {#each twentyFiveAvatars as { lastName, avatar }}
    <div class="flex flex-col items-center m-4">
        <img src={avatar} alt={lastName} class="rounded-full w-24 h-24"/>
        <p class="text-slate-800 font-bold">{lastName}</p>
    </div>
    {/each}
</div>

<button on:click={handleClick} class="btn variant-filled">
	generate random number
</button>

{#await promise}
	<ProgressRadial/>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
