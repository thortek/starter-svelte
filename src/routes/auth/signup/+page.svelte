<script lang="ts">

import { localUser } from '$lib/stores/localUser'
import { goto } from '$app/navigation'

const credentials = {
    firstName: '',
    lastName: '',
    email: ''
}

let password: string

const handleSubmit = async () => {
    console.log('Thanks for submitting!')
    
    $localUser = credentials
    console.log($localUser)
    goto('/auth/login')
}

</script>

<div class="container h-full mx-auto flex justify-center">
    <div class="card bg-slate-100 text-center w-1/3">
    <form on:submit|preventDefault={handleSubmit}  class="form flex flex-col items-center space-y-10 p-4">
        <h1 class="text-3xl font-bold">Sign up</h1>
        <input class="input" bind:value={credentials.firstName} required autocomplete="given-name" type="text" placeholder="First name" />
        <input class="input" bind:value={credentials.lastName} required autocomplete="family-name" type="text" placeholder="Last name" />
        <input class="input" bind:value={credentials.email} required autocomplete="email" type="email" placeholder="Email" />
        <input class="input" bind:value={password} required autocomplete="new-password" type="password" placeholder="Password" />
        <input class="input" required type="password" placeholder="Confirm Password" />
        <button type="submit" class="btn variant-filled-primary">Signup</button>
    </form>
</div>
</div>