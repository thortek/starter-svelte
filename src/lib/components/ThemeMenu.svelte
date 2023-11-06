<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	const modalStore = getModalStore();

	const handleSignOut = async () => {
		const modal: ModalSettings = {
			type: 'confirm',
			// Data
			title: 'Signing out',
			body: `Are you sure you want to sign out?`,
			response: (r: boolean) => {
				if (r) {
					signOut();
					goto('/');
				}
			},
		};
		modalStore.trigger(modal);
	};

</script>

<div class="flex gap-1">
	<select class="select" bind:value={$theme}>
		<option value="wintry">wintry</option>
		<option value="skeleton">skeleton</option>
		<option value="crimson">crimson</option>
		<option value="seafoam">seafoam</option>
	</select>
	{#if $page.data.session?.user}
		<Avatar src={$page.data.session?.user?.image ?? ''} on:click={handleSignOut} width="w-16" rounded="rounded-full" border="border-4 border-surface-300-600-token hover:!border-primary-500"
		cursor="cursor-pointer" />
	{:else}
		<Avatar initials="?" width="w-16" rounded="rounded-full" />
	{/if}
</div>
