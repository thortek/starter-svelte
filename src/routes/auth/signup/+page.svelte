<script lang="ts">

const credentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const handleSubmit = async () => {
    console.log('Thanks for submitting!')
    console.log(credentials)
}

</script>

<div class="container h-full mx-auto flex justify-center">
    <div class="card bg-slate-100 text-center w-1/3">
    <form on:submit|preventDefault={handleSubmit}  class="form flex flex-col items-center space-y-10 p-4">
        <h1 class="text-3xl font-bold">Sign up</h1>
        <input bind:value={credentials.firstName} required autocomplete="given-name" type="text" placeholder="First name" />
        <input bind:value={credentials.lastName} required autocomplete="family-name" type="text" placeholder="Last name" />
        <input bind:value={credentials.email} required autocomplete="email" type="email" placeholder="Email" />
        <input class="text-black" bind:value={credentials.password} required autocomplete="new-password" type="password" placeholder="Password" />
        <input class="text-black" required type="password" placeholder="Confirm Password" />
        <button type="submit" class="btn variant-filled-primary">Signup</button>
    </form>
</div>
</div>