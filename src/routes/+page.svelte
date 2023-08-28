<script lang='ts'>
	let name = 'Thor'
	let src = 'https://media.giphy.com/media/JVaGIHrnC4Xi9DBPwr/giphy.gif'
	import Nested from '$lib/components/Nested.svelte'
</script>

<h1>Welcome to my page {name.toUpperCase()}! </h1>
<!-- 
<img {src} alt='animated {name} gif' /> -->
<p class="text-yellow-400 font-mono text-4xl ">Here is my sample Paragraph!</p>
<p>Another paragraph</p>
<Nested />
```

<!-- 		color: goldenrod;
		font-family: 'Courier New', Courier, monospace;
		font-size: 2rem; -->

```