<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import Item from '$lib/components/modonomicon/RecipeDisplay/Item.svelte';
	export let text: string;
	export let title: string;
	export let item: App.Item;
</script>
{#if title}
	<h4 class="mb-3">
		<FormattedLabel label={title} />
	</h4>
{/if}
<Item item={item.item} />
<p class="text-left max-w-fit textblock">
	<FormattedLabel label={text} />
</p>
