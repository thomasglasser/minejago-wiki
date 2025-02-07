<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import Ingredient from '$lib/components/modonomicon/RecipeDisplay/Ingredient.svelte';

	export let text: string;
	export let title: string;
	export let item: App.Ingredient;

</script>

{#if title}
	<h4 class="mb-3">
		<FormattedLabel label={title} />
	</h4>
{/if}
<Ingredient ingredient={item} />
<p class="text-left max-w-fit textblock">
	<FormattedLabel label={text} />
</p>
