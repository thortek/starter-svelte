<script lang="ts">
	//import { localUser } from '$lib/stores/localUser';
	import { signIn } from '@auth/sveltekit/client'
	import { goto } from '$app/navigation'

	const handleSubmit = async () => {
		//console.log($localUser)
		signIn('github')
		goto('/tutorial')
	};
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="card text-center w-1/3">
		<form
			on:submit|preventDefault={handleSubmit}
			class="form flex flex-col space-y-10 p-4 bg-slate-600 rounded-lg"
		>
			<h1 class="text-3xl font-bold">Login</h1>
<!-- 
			<input
				class="input"
				bind:value={credentials.email}
				required
				autocomplete="email"
				type="email"
				placeholder="Email"
			/>
			<input
				class="input"
				bind:value={credentials.password}
				required
				autocomplete="current-password"
				type="password"
				placeholder="Password"
			/> -->

			<button type="submit" class="btn variant-filled-primary"><i class="fa fa-github"></i>Login with Github</button>
		</form>
	</div>
</div>
