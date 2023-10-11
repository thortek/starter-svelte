<script lang="ts">
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { ProgressBar } from '@skeletonlabs/skeleton';

const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
});

</script>

<ProgressBar class="m-2" value={$progress} max={100} height="h-8" meter="bg-red-500" track="bg-blue-500" rounded="rounded-e"  />

<button class="btn variant-filled" on:click={() => $progress = 0}>
	0%
</button>

<button class="btn variant-filled" on:click={() => $progress = 25}>
	25%
</button>

<button class="btn variant-filled" on:click={() => $progress = 50}>
	50%
</button>

<button class="btn variant-filled" on:click={() => $progress = 75}>
	75%
</button>

<button class="btn variant-filled" on:click={() => $progress = 100}>
	100%
</button>