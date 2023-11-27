<script>

    export let data
    $: console.log(data)
</script>

<main class="m-8 bg-slate-100 text-black">
    <h2>{data.lastName}</h2>
    <h2>{data.title}</h2>
    <h2>{data.phone}</h2>
    <h2>{data.email}</h2>
</main>