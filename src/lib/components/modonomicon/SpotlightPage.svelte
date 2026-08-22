<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import Ingredient from '$lib/components/modonomicon/RecipeDisplay/Ingredient.svelte';

	export let text: string;
	export let title: string;
	export let item: App.Ingredient;

</script>

{#if title}
	<h4 class="text-xl md:text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
		<FormattedLabel label={title} />
	</h4>
{/if}
<div class="my-4 flex justify-center">
	<Ingredient ingredient={item} />
</div>
<div class="textblock text-base md:text-lg text-surface-700 dark:text-surface-200">
	<FormattedLabel label={text} />
</div>
