<script lang="ts">
	export let message: string = 'Hello from the parent component';
</script>

<div class=" bg-slate-600 m-4 text-center py-10">
	<p class="text-white">{@html message}</p>
</div>
