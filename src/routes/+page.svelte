<script lang="ts">
	import { modInformations } from '$lib/utils/modInformations';
	import Hero from '$lib/components/Hero.svelte';
	import AddonCard from '$lib/components/AddonCard.svelte';
</script>

<div class="flex flex-col items-center justify-start min-h-full py-10 px-4 space-y-12 max-w-6xl mx-auto">
	<Hero />

	<section class="w-full flex flex-col items-center space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-3xl font-bold">Available Addons</h2>
			<p class="text-surface-500 dark:text-surface-400">Expand your wiki experience by selecting compatible addons below.</p>
		</div>

		<div class="flex flex-wrap justify-center gap-6 w-full">
			{#each Object.entries(modInformations) as [id, info]}
				{#if id !== 'mineraculous'}
					<AddonCard {info} />
				{/if}
			{/each}
		</div>
		
		<div class="bg-warning-500/10 border border-warning-500/20 text-warning-700 dark:text-warning-400 p-4 rounded-xl max-w-3xl text-center text-sm font-medium">
			Note: Direct links to addon pages or refreshing addon pages may occasionally fail to load if the server hasn't finished loading the addon data.
		</div>
	</section>
</div>
