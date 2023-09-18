<script lang='ts'>
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
   import '../app.postcss'
   import { Modal, getModalStore } from '@skeletonlabs/skeleton';
   import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
   import { initializeStores } from '@skeletonlabs/skeleton';

   initializeStores();
</script>

<Modal />

<AppShell>
   <svelte:fragment slot="header">
      <AppBar>
         <svelte:fragment slot="lead">
            <strong class="text-xl">Thor Anderson</strong>
         </svelte:fragment>
         <svelte:fragment slot="trail">
            <a href="#" class="text-xl">Home</a>
            <a href="#" class="text-xl">About</a>
         </svelte:fragment>
      </AppBar>
   </svelte:fragment>
   <slot />
</AppShell>
