<script>

    export let data
    $: console.log(data)
</script>

<main class="m-8 bg-slate-100">
    <h2>{data.lastName}</h2>
</main>