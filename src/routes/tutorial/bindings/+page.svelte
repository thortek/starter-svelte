<script lang="ts">
	let name = 'World';
    let a = 1;
	let b = 2;
    let yes = false;
    
    let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

    let selected: any;

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>
<!-- I'd like to have a form component that contains an input and an <h1>
    component.  The elements in the form should be centered vertically
    and horizontally in their parent component.  The input's value should be bound to the text of the h1 -->
<div class="flex flex-col m-4">
<input type="text" bind:value={name} class="text-center text-black p-4" />

<h1 class="text-center text-black">Hello {name}!</h1>

<label>
	<input class="text-black pl-4" type="number" bind:value={a} min="0" max="10" />
	<input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
	<input class="text-blue-800 pl-4" type="number" bind:value={b} min="0" max="10" />
	<input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>
		Thank you. We will bombard your inbox and sell
		your personal details.
	</p>
{:else}
	<p>
		You must opt in to continue. If you're not
		paying, you're the product.
	</p>
{/if}

<button class="btn btn-lg variant-filled-primary w-32" disabled={!yes}>Subscribe</button>
</div>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select
    class="text-black pl-4"
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input class="text-black" bind:value={answer} />

	<button class="btn btn-lg variant-filled-primary" disabled={!answer} type="submit">
		Submit
	</button>
</form>

<p>
	selected question {selected
		? selected.id
		: '[waiting...]'}
</p>