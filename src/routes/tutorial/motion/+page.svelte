<script lang="ts">
	import { tweened, spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { faker } from '@faker-js/faker'

	let visible = true;
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const shuffle = () => {
		numbers = numbers.sort(() => 0.5 - Math.random());
	};

	let imgSrc = '/clipart-heart.png'

	const heartWidth = spring(100, {
		stiffness: 0.1,
		damping: 0.4
	});

/* const zoomIn = setInterval(() => {
		heartWidth.set(200)
	}, 300)

	const zoomOut = setInterval(() => {
		heartWidth.set(100)
	}, 600) */

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);

	let size = spring(10);

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<div class="flex flex-col gap-16 m-4">
	<div>
		<ProgressBar
			class="m-2"
			value={$progress}
			max={100}
			height="h-8"
			meter="bg-red-500"
			track="bg-blue-500"
			rounded="rounded-e"
		/>

		<button class="btn variant-filled" on:click={() => ($progress = 0)}> 0% </button>

		<button class="btn variant-filled" on:click={() => ($progress = 25)}> 25% </button>

		<button class="btn variant-filled" on:click={() => ($progress = 50)}> 50% </button>

		<button class="btn variant-filled" on:click={() => ($progress = 75)}> 75% </button>

		<button class="btn variant-filled" on:click={() => ($progress = 100)}> 100% </button>
	</div>
	<div class="flex p-2">
		<div class="w-48 select-none">
			<label>
				<h3>stiffness ({coords.stiffness})</h3>
				<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
			</label>

			<label>
				<h3>damping ({coords.damping})</h3>
				<input bind:value={coords.damping} type="range" min="0.01" max="1" step="0.01" />
			</label>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg
			class="w-full h-128 border"
			on:mousemove={(e) => {
				const { left, top } = e.currentTarget.getBoundingClientRect();
				coords.set({
					x: e.clientX - left,
					y: e.clientY - top
				});
				//coords.set({ x: e.clientX, y: e.clientY });
			}}
			on:mousedown={() => size.set(30)}
			on:mouseup={() => size.set(10)}
		>
			<circle fill="#22FF33" cx={$coords.x} cy={$coords.y} r={$size} />
		</svg>
	</div>
	<div>
		<label>
			<input type="checkbox" bind:checked={visible} />
			visible
		</label>
		<div class="flex gap-4">
			{#if visible}
				<img
					src="https://placekitten.com/300/300"
					alt="kitten"
					transition:fly={{ x: -300, duration: 2000 }}
				/>
				<img src="https://placekitten.com/300/300" alt="kitten" transition:fade />

				<img src="https://placekitten.com/300/300" alt="kitten" in:fly={{ y:200, duration: 2000}} out:fade />
			{/if}
		</div>
	</div>
	<div>
		<button class="btn variant-filled" on:click={shuffle}>Shuffle</button>
		<ul>
		{#each numbers as number (number)}
			<li class="bg-green-600 w-48 rounded-lg text-center my-1"
			animate:flip={{ duration: 400 }}>
				{number}
			</li>
		{/each}
		</ul>
	</div>
	<div class="w-32 h-32">
	<img src={imgSrc} alt="heart" width={$heartWidth} />
</div>
</div>

<!-- <style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {
		position: absolute;
		top: 8em;
		right: 4em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style> -->
