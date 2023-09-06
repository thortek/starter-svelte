<script lang=ts>
import Nested from '$lib/components/Nested.svelte'
import PackageInfo from '$lib/components/PackageInfo.svelte';

const pkg = {
    name: 'svelte',
    speed: 'blazing',
    version: '4.0.0',
    website: 'https://svelte.dev'
}

</script>

<h1>Props</h1>

<p>Props are a way to pass data from a parent component to a child component. In this example, we pass a message from the parent component to the child component.</p>

<Nested message="<strong>Hello!</strong>" />

<Nested />

<PackageInfo {...pkg} />