<script lang="ts">
    import { page } from '$app/stores'
    import { signIn } from '@auth/sveltekit/client'

    let loggedIn = $page.data.session?.user

</script>

<main class="w-screen h-screen bg-[url('/mtn-background.jpg')] bg-cover">
    <div class="flex flex-col items-center justify-center h-full gap-4">
        <h1 class="text-6xl font-bold text-white">Welcome to <span class="text-[#00ff4077]"><a href="/tutorial">My Tutorial</a></span>
        </h1>
        {#if !loggedIn}
        <h2 class="text-4xl font-bold text-white">Please login to continue</h2>
        <button class="btn w-72 h-14 text-white text-xl rounded shadow-xl" on:click={() => signIn('github')}>
            <span>
                <img class="w-12" src="/github.svg" alt="github logo"/>
            </span>
            <span>Login with GitHub</span></button>
        {/if}
    </div>

</main>