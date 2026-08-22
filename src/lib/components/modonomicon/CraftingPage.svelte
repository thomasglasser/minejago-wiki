<script lang="ts">
	import { getRecipe } from '$lib/recipes';
	import ShapedRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapedRecipe.svelte';
	import ShapelessRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapelessRecipe.svelte';
	import RecipeWarning from '$lib/components/modonomicon/RecipeDisplay/RecipeWarning.svelte';
	import { recipesStore } from '$lib/stores/fileStore';
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';

	export let recipe: string;
	export let recipe2: string;
	export let title: string;

	$: recipeData = getRecipe(recipe, $recipesStore) as any;
	$: recipeData2 = getRecipe(recipe2, $recipesStore) as any;
	$: displayedComponent =
		recipeData.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe;
	$: displayedComponent2 =
		recipeData2?.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe;
</script>

{#if title}
	<h4 class="text-xl md:text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
		<FormattedLabel label={title} />
	</h4>
{/if}
{#if recipeData.type !== 'Unknown Recipe'}
	{#if recipeData.type === 'minecraft:crafting_shaped'}
		<ShapedRecipe {recipeData} />
	{:else}
		<ShapelessRecipe {recipeData} />
	{/if}
{/if}
{#if recipe2 && recipeData2.type !== 'Unknown Recipe'}
	{#if recipeData2.type === 'minecraft:crafting_shaped'}
		<ShapedRecipe recipeData={recipeData2} />
	{:else}
		<ShapelessRecipe recipeData={recipeData2} />
	{/if}
{/if}
<RecipeWarning />
