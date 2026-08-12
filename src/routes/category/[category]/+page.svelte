<script lang="ts">
	import { modonomiconStore } from '$lib/stores/fileStore';
	import Label from '$lib/components/Label.svelte';
	import { labelStore } from '$lib/stores/languageStore';
	import { currentExpandedCategory, currentPageSource } from '$lib/stores/uiState';
	import AddonInformation from '$lib/components/AddonInformation.svelte';

	/** @type {import('./$types').PageData} */
	export let data: App.PageData;

	$: displayedCategory = data?.category ? $modonomiconStore[data.category] : undefined;
	$: categoryName = $labelStore(displayedCategory?.name || '');
	$: $currentExpandedCategory = data?.category ? data.category : $currentExpandedCategory;
	$: $currentPageSource = displayedCategory ? displayedCategory?.source : $currentPageSource;
</script>

<svelte:head><title>{categoryName}</title></svelte:head>

<div class="flex flex-col items-center min-h-full py-10 px-4 space-y-12 max-w-5xl mx-auto">
	<!-- Category Hero Banner -->
	<header class="w-full text-center space-y-6 flex flex-col items-center">
		<h1 class="text-5xl md:text-7xl font-black tracking-tighter text-primary-600 dark:text-primary-400 pb-2 flex items-center justify-center gap-4">
			<Label label={displayedCategory?.name} />
			<div class="scale-150 origin-left mt-2">
				<AddonInformation addonName={displayedCategory?.source || ''} position="bottom" />
			</div>
		</h1>
		<div class="h-1 w-24 bg-primary-500/50 rounded-full"></div>
	</header>

	<!-- Description Panel -->
	<section class="w-full">
		<div class="glass-panel rounded-3xl p-8 md:p-12 text-lg md:text-xl text-surface-600 dark:text-surface-300 leading-relaxed font-light shadow-2xl relative overflow-hidden">
			<!-- Subtle background decoration -->
			<div class="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
			<div class="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary-500/10 rounded-full blur-3xl"></div>
			
			<div class="relative z-10 prose dark:prose-invert prose-lg max-w-none text-center">
				<Label label={displayedCategory?.description} />
			</div>
		</div>
	</section>
</div>
