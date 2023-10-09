<script lang="ts">
import { theme } from '$lib/stores/theme';

</script>

<div class="flex">

<select class="select" bind:value={$theme}>
	<option value="wintry">wintry</option>
	<option value="skeleton">skeleton</option>
	<option value="crimson">crimson</option>
	<option value="seafoam">seafoam</option>
</select>
</div>