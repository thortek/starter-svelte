<script lang="ts">
	import Outer from '$lib/components/Outer.svelte';
	import BigBlueButton from '$lib/components/BigBlueButton.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	function handleMessage(event: any) {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Example Foo Alert',
			body: event.detail.text,
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
		class="bg-slate-700 left-0 top-0 w-96 h-96 p-4"
		on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
	>
		<p>The pointer is at {m.x} x {m.y}</p>
	</div>

	<button class="btn variant-filled-primary" on:click|once={() => alert('clicked')}> Click me once... and only once! </button>
</div>

<div class="grid gap-4">
<Outer on:foo={handleMessage}/>
<p>This example dispatch's the 'foo' event which is forwarded through another component to be handled here.</p>
<BigBlueButton on:click={handleMessage}/>
<p>This big blue button demonstrates how to forward a DOM 'click' event to also be handled here.</p>
</div>
