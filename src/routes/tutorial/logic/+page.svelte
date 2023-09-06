<script lang=ts>
    let count = 0;

    function increment() {
        count += 1;
    }

</script>

<button class="btn btn-lrg variant-filled-primary" on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
    <p>{count} is greater than 10</p>
{:else if count < 5}
<p>{count} is less than 5</p>
{:else}
    <p>{count} is somewhere between 0 and 10</p>
{/if}