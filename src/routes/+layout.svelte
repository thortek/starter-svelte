<script lang='ts'>
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
   import '../app.postcss'
   import { Modal, getModalStore } from '@skeletonlabs/skeleton';
   import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
   import { initializeStores } from '@skeletonlabs/skeleton';
   import ThemeMenu from '$lib/components/ThemeMenu.svelte';
   import { page } from '$app/stores';

   initializeStores();

   let loggedIn: boolean = false;

   if (!$page.data.session?.user) {
      loggedIn = false;
   } else {
      loggedIn = true;
   }
   
</script>

<Modal />

<AppShell>
   <svelte:fragment slot="header">
      {#if loggedIn}
      <AppBar>
         <svelte:fragment slot="lead">
            <strong class="text-xl">Thor Anderson</strong>
         </svelte:fragment>
         <svelte:fragment slot="trail">
            <ThemeMenu />
         </svelte:fragment>
      </AppBar>
      {/if}
   </svelte:fragment>
   <slot />
</AppShell>
