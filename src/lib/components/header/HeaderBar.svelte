<script lang="ts">
	import { AppBar, getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
	import { scrollSelectionIntoView } from '$lib/components/navigation/scrollHelper';
	import SmartSearch from '$lib/components/search/SmartSearch.svelte';
	import LanguageSelection from '$lib/components/LanguageSelection.svelte';
	import AddonMenu from '$lib/components/addonMenu/AddonMenu.svelte';

	const drawerStore = getDrawerStore();

	// Drawer Handler
	function drawerOpen(): void {
		drawerStore.open();
		scrollSelectionIntoView();
	}
</script>

<AppBar class="glass-header sticky top-0 z-30 p-3 sm:p-4 transition-all duration-300">
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<button
			type="button"
			class="lg:hidden mr-1 sm:mr-2 p-1.5 sm:p-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-surface-200/50 dark:hover:bg-surface-700/50 transition-colors"
			on:click={drawerOpen}
			aria-label="Open Navigation Menu"
		>
			<MenuIcon style="width: 20px; height: 20px; fill: rgb(var(--color-primary-500))" />
		</button>
	</svelte:fragment>
	<div class="flex items-center gap-2 sm:gap-3 overflow-hidden">
		<a
			class="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold uppercase bg-gradient-to-r from-secondary-500 via-primary-500 to-tertiary-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 no-underline truncate"
			href="/"
			id="mineraculous_wiki"
			title="Return to main page"
		>
			Mineraculous Wiki
		</a>
		<span
			id="version"
			class="badge variant-soft-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
			title="Mod Version 1.0.0-beta14"
		>
			1.0.0-beta14
		</span>
	</div>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<AddonMenu />
		</div>
		<div class="hidden lg:block">
			<LanguageSelection />
		</div>
		<div class="hidden lg:block">
			<SmartSearch />
		</div>
		<LightSwitch origin="tr" />
	</svelte:fragment>
</AppBar>
