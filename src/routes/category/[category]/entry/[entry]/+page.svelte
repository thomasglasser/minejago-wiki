<script lang="ts">
	import { advancementStore, modonomiconStore } from '$lib/stores/fileStore';
	import ModonomiconPage from '$lib/components/modonomicon/ModonomiconPage.svelte';
	import Label from '$lib/components/Label.svelte';
	import { labelStore } from '$lib/stores/languageStore';
	import { currentExpandedCategory, currentPageSource } from '$lib/stores/uiState';
	import AddonInformation from '$lib/components/AddonInformation.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';

	/** @type {import('./$types').PageData} */
	export let data: App.PageData;

	$: containingCategory = data?.category ? $modonomiconStore[data.category] : undefined;
	$: displayedEntry = containingCategory?.entries && data?.entry ? containingCategory.entries[data.entry] : undefined;
	$: entryName = $labelStore(displayedEntry?.name || '');
	$: $currentExpandedCategory = data?.category ? data.category : $currentExpandedCategory;
	$: $currentPageSource = displayedEntry ? displayedEntry?.source : $currentPageSource;
	$: advancementTitle = displayedEntry?.advancement
		? $advancementStore
			? $advancementStore[displayedEntry.advancement]?.display?.title?.translate ||
			  'unknown Advancement'
			: 'unknown Advancement'
		: undefined;
</script>

<svelte:head><title>{entryName}</title></svelte:head>

<div class="flex flex-col items-center min-h-full py-10 px-4 space-y-12 max-w-6xl mx-auto">
	<!-- Entry Header -->
	<header class="w-full border-b border-surface-300 dark:border-surface-700 pb-8 mb-4">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6">
			<h1 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-secondary-500 via-primary-500 to-tertiary-500 bg-clip-text text-transparent flex items-center gap-3 drop-shadow-sm">
				<Label label={displayedEntry?.name} />
			</h1>
			{#if displayedEntry?.source && displayedEntry.source !== 'mineraculous'}
				<div class="flex items-center gap-2 bg-surface-100 dark:bg-surface-800 px-4 py-2 rounded-full shadow-inner border border-surface-200 dark:border-surface-700">
					<span class="text-sm font-medium text-surface-500 dark:text-surface-400">From Addon:</span>
					<div class="ml-1">
						<AddonInformation addonName={displayedEntry.source} position="bottom" />
					</div>
				</div>
			{/if}
		</div>
	</header>

	<!-- Content Area -->
	<section class="w-full">
		{#key data?.entry}
			{#if advancementTitle}
				<Accordion class="w-full">
					<AccordionItem class="glass-panel rounded-2xl mb-8">
						<svelte:fragment slot="summary">
							<div class="flex items-center gap-2 font-medium">
								<span class="text-warning-600 dark:text-warning-400">Spoiler Warning:</span> 
								<span>Content locked behind advancement</span>
								<strong class="text-primary-600 dark:text-primary-400 px-2 py-1 bg-primary-500/10 rounded-md">
									<FormattedLabel label={advancementTitle} />
								</strong>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div class="w-full flex justify-center pt-4 border-t border-surface-300/50 dark:border-surface-600/50">
								<div class="w-full max-w-4xl space-y-12">
									{#each displayedEntry?.pages || [] as page}
										<div class="glass-panel rounded-2xl p-6 md:p-10 relative">
											<ModonomiconPage modonomiconPage={page} />
										</div>
									{/each}
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			{:else}
				<div class="w-full flex justify-center">
					<div class="w-full max-w-4xl space-y-12">
						{#each displayedEntry?.pages || [] as page}
							<div class="glass-panel rounded-2xl p-6 md:p-10 relative transition-all duration-300 hover:shadow-2xl hover:border-primary-500/20">
								<ModonomiconPage modonomiconPage={page} />
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/key}
	</section>
</div>
