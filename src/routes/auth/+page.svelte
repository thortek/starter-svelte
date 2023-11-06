<script>
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'

    console.log($page.data.session?.user)
  </script>

  
  
  {#if $page.data.session?.user}
    <p>Signed in as {$page.data.session.user.email}</p>
    <button class="btn variant-outline-primary" on:click={signOut}>Sign out</button>
  {:else}
    <p>Not signed in.</p>
    <button class="btn variant-outline-primary" on:click={() => signIn('github')}>Sign in</button>
  {/if}