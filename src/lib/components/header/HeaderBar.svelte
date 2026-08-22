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

<AppBar class="glass-header sticky top-0 z-30 p-4 transition-all duration-300">
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<button
			type="button"
			class="lg:hidden mr-2 p-1.5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-surface-200/50 dark:hover:bg-surface-700/50 transition-colors"
			on:click={drawerOpen}
			aria-label="Open Navigation Menu"
		>
			<MenuIcon style="width: 20px; height: 20px; fill: rgb(var(--color-primary-500))" />
		</button>
		<LightSwitch origin="tr" />
	</svelte:fragment>
	<div class="flex flex-row">
		<a
			class="hidden sm:block text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4 bg-gradient-to-r from-secondary-500 via-primary-500 to-tertiary-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
			href="/"
			id="mineraculous_wiki"
			title="Return to main page">Mineraculous Wiki</a
		>
	</div>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<p
				class="text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4"
				id="version"
				title="Return to main page">Mod Version: 1.0.0-beta14
			</p>
		</div>
		<div class="hidden lg:block">
			<AddonMenu />
		</div>
		<div class="hidden lg:block">
			<LanguageSelection />
		</div>
		<div class="hidden lg:block">
			<SmartSearch />
		</div>
	</svelte:fragment>
</AppBar>
