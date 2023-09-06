<script lang='ts'>
    let count = 0
    $: doubled = count * 2
    let numbers = [1, 2, 3, 4, 5]

    $: if (count >= 10) {
        alert(`count is dangerously high!`)
        count = 9
    }

    $: console.log(`the count is ${count}`)

    function handleClick() {
        count += 1
    }

    function addNumber() {
        numbers = [...numbers, numbers.length + 1]
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)

</script>

<div class="w-3/4 bg-slate-600 m-4 p-4">
    
<button class="btn btn-lg variant-filled-primary" on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
<button class="btn btn-lg variant-filled-primary" on:click={addNumber}>
    Push count
</button>
<p>{numbers.join(' + ')} = {sum}</p>
</div>