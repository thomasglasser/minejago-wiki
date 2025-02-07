<script lang="ts">
	import { getRecipe } from '$lib/recipes';
	import { recipesStore } from '$lib/stores/fileStore';

	const getRecipeDisplay = (type: string) => {
		switch (type) {
			default:
				return undefined;
		}
	};

	export let recipe: string;
	$: recipeData = getRecipe(recipe, $recipesStore);
	$: displayedComponent = getRecipeDisplay(recipeData.type);
</script>

<svelte:component this={displayedComponent} {recipeData} />
