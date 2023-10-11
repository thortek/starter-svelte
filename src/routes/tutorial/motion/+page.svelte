<script lang="ts">
	import { tweened, spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ProgressBar } from '@skeletonlabs/skeleton';


	let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,
        damping: 0.4
    });

    let size = spring(10)


	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<div class="flex flex-col items-center justify-center gap-48">
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
	<div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg class="absolute w-full h-full left-0 top-0"
			on:mousemove={(e) => {
				coords.set({ x: e.clientX, y: e.clientY });
			}}
			on:mousedown={() => size.set(30)}
			on:mouseup={() => size.set(10)}
		>
			<circle fill="#22FF33" cx={$coords.x} cy={$coords.y} r={$size} />
		</svg>

		<div class="absolute top-32 right-16 w-48 select-none">
			<label>
				<h3>stiffness ({coords.stiffness})</h3>
				<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
			</label>

			<label>
				<h3>damping ({coords.damping})</h3>
				<input bind:value={coords.damping} type="range" min="0.01" max="1" step="0.01" />
			</label>
		</div>
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
