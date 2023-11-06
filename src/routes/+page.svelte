<script lang="ts">
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
	import { onMount } from 'svelte';

    onMount(() => {
        console.log($page.data.session?.user)
        if (!$page.data.session?.user) {
            goto('/auth/login')
        } else {
            goto('/tutorial')
        }
    })

</script>


<h1 class="bg-blue-400">Home route</h1>