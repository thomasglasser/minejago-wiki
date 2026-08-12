<script lang="ts">
	import { addonList, modInformations } from '$lib/utils/modInformations.js';
	import { selectedAddonStore } from '$lib/stores/addonStore.js';
	import { ListBox, ListBoxItem, getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	const modalStore = getModalStore();

	function onFormSubmit(): void {
		modalStore.close();
	}

	// Base Classes
	const cBase: string = 'card p-4 w-modal shadow-xl space-y-4';
</script>

<div class="modal-example-form {cBase} bg-surface-100/90 dark:bg-surface-800/90 backdrop-blur-xl border border-surface-200/50 dark:border-surface-700/50">
	<h3 class="text-2xl font-bold text-center pb-2 border-b border-surface-300 dark:border-surface-600">Select Addons</h3>
	<ListBox multiple class="grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto p-1">
		{#each addonList as addon}
			<ListBoxItem value={addon} bind:group={$selectedAddonStore} name="addons" class="rounded-xl border border-surface-300/50 dark:border-surface-600/50 hover:bg-primary-500/10 transition-colors">
				<svelte:fragment slot="lead">
					{#if modInformations[addon].icon}
						<img
							alt={`The ${modInformations[addon].name} Logo`}
							src={modInformations[addon].icon}
							class="w-8 h-8 object-contain drop-shadow-sm"
						/>
					{:else}
						<div class="w-8 h-8 rounded-full bg-surface-300 dark:bg-surface-600 flex items-center justify-center font-bold text-xs">
							?
						</div>
					{/if}
				</svelte:fragment>
				<span class="font-medium">{modInformations[addon].name}</span>
			</ListBoxItem>
		{/each}
	</ListBox>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter} flex justify-end space-x-2 pt-4 border-t border-surface-300 dark:border-surface-600">
        <button class="btn {parent.buttonNeutral} hover:variant-soft" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive} font-bold shadow-md hover:scale-105 transition-transform" on:click={onFormSubmit}>Apply Selection</button>
    </footer>
</div>

<style>
	img {
		height: 32px;
		width: 32px;
	}
</style>
