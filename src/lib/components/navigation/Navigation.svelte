<script lang="ts" context="module">
	import { getItemSrc } from '$lib/textures.js';
	import { getTexture } from '$lib/textures';
	import { getFileName } from '$lib/utils/fileName';

	const checkNavIcon = (iconSrc: any, textureStore: App.TextureDictionary) => {
		if (typeof iconSrc === 'string') {
			return getItemSrc(iconSrc, textureStore);
		}
		if (iconSrc?.item !== undefined)
			return getItemSrc(iconSrc.item, textureStore);
		return getTexture(`${iconSrc?.texture?.split(':')?.at(0)}:${getFileName(iconSrc?.texture)}`, textureStore);
	};
</script>

<script lang="ts">
	import { currentExpandedCategory, storeCurrentUrl } from '$lib/stores/uiState.js';
	import { modonomiconStore } from '$lib/stores/fileStore';
	import { Accordion, AccordionItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { afterNavigate } from '$app/navigation';
	import { scrollSelectionIntoView } from '$lib/components/navigation/scrollHelper';
	import Label from '$lib/components/Label.svelte';
	import { texturesStore } from '$lib/stores/fileStore.js';
	import AddonInformation from '$lib/components/AddonInformation.svelte';

	const drawerStore = getDrawerStore();

	export let embedded: boolean = false;

	// ListItem Click Handler
	function onListItemClick(): void {
		if (!embedded) return;
		drawerStore.close();
	}

	$: sortedCategories = Object.values($modonomiconStore)
		.filter((category) => !!category.entries)
		.sort((categoryA, categoryB) => (categoryA.sort_number ?? 0) - (categoryB.sort_number ?? 0));
	afterNavigate(() => {
		scrollSelectionIntoView();
	});
</script>

<div class="mb-8 {$$props.class || ''} px-2">
	<Accordion class="space-y-2">
		{#each sortedCategories as category, i}
			<AccordionItem 
				open={$currentExpandedCategory === category.id} 
				class="rounded-xl transition-all duration-300 {$currentExpandedCategory === category.id ? 'glass-panel shadow-md' : 'hover:bg-surface-200/50 dark:hover:bg-surface-700/50'}"
			>
				<svelte:fragment slot="lead">
					{@const iconSrc = checkNavIcon(category.icon, $texturesStore)}
					{#if iconSrc}
						<img alt={`Icon for category ${category.name}`} src={iconSrc} class="navIcon drop-shadow-sm" />
					{:else}
						<div class="navIcon"></div>
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="summary">
					<div class="text-primary-600 dark:text-primary-400 font-extrabold tracking-wide uppercase flex items-center">
						<a href={`/category/${category.id}`} class="no-underline">
							<Label label={category.name} />
						</a>
						<AddonInformation addonName={category?.source} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<nav class="list-nav py-2 border-t border-surface-300/30 dark:border-surface-600/30">
						<ul class="space-y-1">
							{#each Object.entries(category.entries).sort(([, a], [, b]) => (a.sort_number ?? 0) - (b.sort_number ?? 0)) as [id, entry]}
								{@const href = `/category/${entry.category}/entry/${id}`}
								<li class="flex items-center">
									<a
										{href}
										on:click={onListItemClick}
										class="transition-all duration-200 rounded-r-lg border-l-4 { $storeCurrentUrl === href ? 'navSelected border-primary-500 font-bold bg-primary-500/10' : 'border-transparent hover:bg-surface-300/30 dark:hover:bg-surface-600/30 hover:border-primary-500/50' }"
									>
										<span class="flex-auto">
											<Label label={entry.name} />
										</span>
									</a>
									<AddonInformation addonName={entry?.source} />
								</li>
							{/each}
						</ul>
					</nav>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>

<style>
	.navIcon {
		width: 50px;
		height: 50px;
		image-rendering: pixelated;
	}
</style>
