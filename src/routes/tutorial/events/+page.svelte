<script lang="ts">
	//import Messenger from '$lib/components/Messenger.svelte';
	import Outer from '$lib/components/Outer.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Example Foo Alert',
			body: 'This is an example modal. You can use it to display alerts, confirmations, or other messages.',
		};
		modalStore.trigger(modal);
	}

	let m = { x: 0, y: 0 };

	/* 	function handleMove(event: { clientX: number; clientY: number; }) {
		m.x = event.clientX;
		m.y = event.clientY;
	} */
</script>

<div class="container h-11/12 flex flex-col gap-4 m-4">
	<div
		class="bg-slate-200 left-0 top-0 w-96 h-96 p-4"
		on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
	>
		<p>The pointer is at {m.x} x {m.y}</p>
	</div>

	<button class="btn variant-filled-primary" on:click={() => alert('clicked')}> Click me </button>
</div>

<Outer on:click/>
