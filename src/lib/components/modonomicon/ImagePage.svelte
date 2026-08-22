<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import { getItemSrc } from '$lib/textures';
	import { getFileName } from '$lib/utils/fileName';
	import { texturesStore } from '$lib/stores/fileStore';

	export let text: string;
	export let title: string;
	export let images: Array<string>;

	$: mappedImages = images
		? images.map((image) => getItemSrc(`${image.split(':')?.at(0)}:${getFileName(image)}`, $texturesStore))
		: [];
</script>

{#if title}
	<h4 class="text-xl md:text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
		<FormattedLabel label={title} />
	</h4>
{/if}
<div class="textblock text-base md:text-lg text-surface-700 dark:text-surface-200">
	<FormattedLabel label={text} />
</div>
<div class="flex flex-wrap gap-4 justify-center my-4">
	{#each mappedImages as image, key}
		<img src={image} alt={images[key]} class="max-w-full rounded-xl object-contain shadow-md" />
	{/each}
</div>
