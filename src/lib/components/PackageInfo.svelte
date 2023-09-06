<script lang=ts>

export let name: string;
export let version: string;
export let speed: string;
export let website: string;

$: href = `https://www.npmjs.com/package/${name}`;

</script>

<p>
    The <code>{name}</code> package is {speed} fast and is currently at version <code>{version}</code>. 
    Download it from <a href={href}>{website}</a>. 
</p>