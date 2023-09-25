<script lang="ts">

    const credentials = {
        email: '',
        password: ''
    }

    const handleSubmit = async () => {
        // contact our auth api to login the user
       //console.log(credentials)
    }

</script>

<div class="container h-full mx-auto flex justify-center">
    <div class="card text-center w-1/3">
    <form on:submit|preventDefault={handleSubmit}  class="form flex flex-col space-y-10 p-4 bg-slate-600 rounded-lg">
        <h1 class="text-3xl font-bold">Login</h1>

        <input bind:value={credentials.email} required autocomplete="email" type="email" placeholder="Email" />
        <input class="text-black" bind:value={credentials.password} required autocomplete="current-password" type="password" placeholder="Password" />

        <button type="submit" class="btn variant-filled-primary">Signup</button>
    </form>
</div>
</div>