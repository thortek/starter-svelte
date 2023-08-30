<script lang='ts'>
    let count = 0
    $: doubled = count * 2

    $: if (count >= 5) {
        alert(`count is dangerously high!`)
        count = 4
    }

    $: console.log(`the count is ${count}`)

    function handleClick() {
        count += 1
    }

</script>

<div class="w-3/4 bg-slate-600 m-4 p-4">
    
<button class="btn btn-lg variant-filled-primary" on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
</div>
```