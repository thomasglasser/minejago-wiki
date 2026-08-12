<script context="module" lang="ts">
	const isItem = (ingredient: any): ingredient is App.Item => {
		return ingredient.item !== undefined;
	};
</script>

<script lang="ts">
	import Tag from '$lib/components/modonomicon/RecipeDisplay/Tag.svelte';
	import Item from '$lib/components/modonomicon/RecipeDisplay/Item.svelte';

	export let ingredient: App.Ingredient;

	$: displayAsItem = isItem(ingredient);
	$: item = (ingredient as any).item;
	$: tag = (ingredient as any).tag;
</script>

{#if displayAsItem}
	<Item {item} />
{:else}
	<Tag {tag} />
{/if}
