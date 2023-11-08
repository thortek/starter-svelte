<script lang="ts">
    import { goto, onNavigate } from "$app/navigation";
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	if (browser) {
		if (!$page.data.session?.user) {
			goto('/')
		}
	}

    onNavigate((navigation) => {
       if (!document.startViewTransition) return;

       return new Promise((resolve) => {
           document.startViewTransition(async () => {
            resolve();
            await navigation.complete;
           });
       });
    })

</script>

<header>
	<ul class="flex gap-4 justify-center font-bold">
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/bindings">Bindings</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/events">Events</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/lifecycle">LifeCycle</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/motion">Motion</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/props">Props</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer">
			<a href="/tutorial/reactivity">Reactivity</a>
		</li>
		<li class="btn variant-ghost-primary cursor-pointer"><a href="/tutorial/logic">Logic</a></li>
	</ul>
</header>
<slot />

<!-- <style>
    :root::view-transition-old(root), 
    :root::view-transition-new(root) {
    animation-duration: 1s;
}
</style> -->
