<script lang="ts">
	import { texturesStore } from '$lib/stores/fileStore';
	import { getBlockOrItemLabel } from '$lib/languages';
	import { getItemSrc } from '$lib/textures';

	export let item: string;

	$: src = item ? getItemSrc(item, $texturesStore) : 'missingitem';
	$: displayText = item ? getBlockOrItemLabel(item) : 'missingitem';
</script>

<div class="self-center flex flex-col items-center justify-center craftingGridItem">
	<img alt={`picture of the ingredient ${item}`} {src} class="craftingGridPicture" />
	<span class="text-center break-words w-full">{displayText}</span>
</div>
