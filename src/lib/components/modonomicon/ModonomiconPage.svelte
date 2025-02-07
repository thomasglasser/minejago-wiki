<script lang="ts">
	import TextPage from '$lib/components/modonomicon/TextPage.svelte';
	import CraftingPage from '$lib/components/modonomicon/CraftingPage.svelte';
	import ImagePage from '$lib/components/modonomicon/ImagePage.svelte';
	import SpotlightPage from '$lib/components/modonomicon/SpotlightPage.svelte';

	export let modonomiconPage: App.ModonomiconPage;

	const getDisplayedComponent = (type: string) => {
		switch (type) {
			case 'modonomicon:text':
			case 'text':
				return TextPage;
			case 'modonomicon:crafting_recipe':
			case 'crafting_recipe':
				return CraftingPage;
			case 'modonomicon:image':
			case 'image':
				return ImagePage;
			case 'modonomicon:spotlight':
			case 'spotlight':
				return SpotlightPage;
			default:
				return undefined;
		}
	};

	$: displayedComponent = getDisplayedComponent(modonomiconPage?.type);
</script>

<div class="mb-2">
	<svelte:component this={displayedComponent} {...modonomiconPage} />
</div>
