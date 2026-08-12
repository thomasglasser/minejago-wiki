<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import { recipesStore } from '$lib/stores/fileStore';
	import ShapedRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapedRecipe.svelte';
	import ShapelessRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapelessRecipe.svelte';
	import { getRecipe } from '$lib/recipes';
	import RecipeWarning from '$lib/components/modonomicon/RecipeDisplay/RecipeWarning.svelte';

	export let recipe: string;
	$: recipeData = getRecipe(recipe, $recipesStore) as any;
</script>

{#if recipeData?.type === 'minecraft:crafting_shaped'}
	<ShapedRecipe {recipeData} />
{:else}
	<ShapelessRecipe {recipeData} />
{/if}
<RecipeWarning />
