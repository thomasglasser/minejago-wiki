<script lang="ts">
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import AddonSelectionModal from '$lib/components/addonMenu/AddonSelectionModal.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const triggerAddonModal = () => {
		const modalComponent: ModalComponent = {
			ref: AddonSelectionModal,
			slot: '<p>Selection</p>'
		};
		const modalSettings: ModalSettings = {
			type: 'component',
			component: modalComponent,
			title: 'Addon Selection'
		};
		modalStore.trigger(modalSettings);
	};
</script>

<button type="button" class="btn variant-filled-surface w-full font-medium shadow-sm hover:variant-filled-primary transition-colors text-tertiary-500" on:click={triggerAddonModal}>
	Addon Selection
</button>
