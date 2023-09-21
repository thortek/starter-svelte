<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('foo', {
			text: 'Hello! My name is Inigo Montoya. You killed my father. Prepare to die.'
		});
	}
</script>

<button class="btn variant-filled" on:click={sayHello}>
	Click to dispatch 'foo' event
</button>
