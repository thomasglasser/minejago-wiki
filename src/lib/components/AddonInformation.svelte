<script lang="ts">
	export let addonName: string;
	export let position: any = 'bottom';

	import { modInformations } from '$lib/utils/modInformations';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	const uniqueId = `addonPopup-${Math.random().toString(36).substr(2, 9)}`;
	let addonPopupSettings: PopupSettings = {
		event: 'hover',
		target: uniqueId,
		placement: position
	};
</script>

{#if modInformations[addonName] && addonName !== 'mineraculous'}
	<img
		use:popup={addonPopupSettings}
		src={modInformations[addonName].icon}
		alt={`${addonName} logo`}
		class="w-8 h-8 object-contain drop-shadow-sm hover:scale-110 transition-transform duration-200 rounded-md"
	/>

	<div class="card p-4 variant-filled-tertiary z-50 text-sm" data-popup={uniqueId}>
		{`Added by ${modInformations[addonName].name}`}
		<div class="arrow variant-filled-tertiary"></div>
	</div>
{/if}

<style>
</style>
