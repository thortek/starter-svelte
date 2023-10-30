<script>
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'
  </script>
  
  {#if $page.data.session?.user}
    <p>Signed in as {$page.data.session.user.email}</p>
    <button on:click={signOut}>Sign out</button>
    <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
  {:else}
    <p>Not signed in.</p>
    <button on:click={() => signIn('github')}>Sign in</button>
  {/if}