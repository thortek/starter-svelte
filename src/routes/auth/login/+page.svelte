<script lang="ts">
	import { localUser } from '$lib/stores/localUser';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const credentials = {
		email: '',
		password: ''
	};

    $: console.log($localUser)

	const handleSubmit = async () => {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Welcome!',
			body: `Thanks for signing up, ${$localUser.email}!`,
		};
		modalStore.trigger(modal);
	};
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="card text-center w-1/3">
		<form
			on:submit|preventDefault={handleSubmit}
			class="form flex flex-col space-y-10 p-4 bg-slate-600 rounded-lg"
		>
			<h1 class="text-3xl font-bold">Login</h1>

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
			/>

			<button type="submit" class="btn variant-filled-primary">Login</button>
		</form>
	</div>
</div>
