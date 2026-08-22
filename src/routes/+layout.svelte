<script lang="ts">
    import '../app.postcss';
    import '../theme.postcss';
    import {AppShell, Drawer, Modal, Toast, getDrawerStore, getToastStore, initializeStores} from '@skeletonlabs/skeleton';
    import {page} from '$app/stores';
    import {afterNavigate} from '$app/navigation';
    import {currentPageSource, storeCurrentUrl} from '$lib/stores/uiState';
    import Navigation from '$lib/components/navigation/Navigation.svelte';
    import HeaderBar from '$lib/components/header/HeaderBar.svelte';
    import {selectedAddonStore} from "$lib/stores/addonStore";
    import {browser} from '$app/environment'
    import {get} from "svelte/store";
    import {subscribeToAddonStore} from "$lib/setup/loadAddonFiles";
    import {onMount} from "svelte";
	import LanguageSelection from '$lib/components/LanguageSelection.svelte';
	import SmartSearch from '$lib/components/search/SmartSearch.svelte';
	import AddonMenu from '$lib/components/addonMenu/AddonMenu.svelte';
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
    initializeStores();
    
    const toastStore = getToastStore();
    const drawerStore = getDrawerStore();
    
    onMount(() => {
        if (browser) {
            return subscribeToAddonStore()
        }
    });

    // Lifecycle Events
    afterNavigate(() => {
        // Store current page route URL
        if (get(storeCurrentUrl) !== $page.url.pathname) {
            storeCurrentUrl.set($page.url.pathname);
        }
        // Scroll to top
        const elemPage = document.querySelector('#page');
        if (elemPage !== null) {
            elemPage.scrollTop = 0;
        }
        // Close drawer on navigation
        drawerStore.close();
    });
    selectedAddonStore.subscribe((newSelectedAddonStoreValue) => {
        // Redirect to main page to avoid current page being an addon page that is going to be unloaded
        setTimeout(() => {
            if (browser && window.location.pathname !== "/" && $currentPageSource !== '' && $currentPageSource !== 'mineraculous' && !newSelectedAddonStoreValue.includes($currentPageSource)) {
                console.log($currentPageSource);
                console.log(get(currentPageSource));
                window.location.replace("/");
                toastStore.trigger({
                    message: 'Loading/Unloading addons, redirecting to main page',
                    // Optional:
                    autohide: true,
                    timeout: 3500,
                })
            }
        })
    })
</script>

<svelte:head>
    <meta content="Mineraculous Wiki | An automatically generated Wiki for Mineraculous" name="title" />
    <meta
      content={`This is a wiki page generated automatically from the Modonomicon Data in the Mineraculous github repository. Therefore, it's pretty janky`}
      name="description"
    />
    <meta content={$page.url.toString()} property="og:url" />
    <meta
      content="Mineraculous Wiki | An automatically generated Wiki for Mineraculous"
      property="og:title"
    />
    <meta
      content={`This is a wiki page generated automatically from the Modonomicon Data in the Mineraculous github repository. Therefore, it's pretty janky`}
      property="og:description"
    />
    <title>Mineraculous Wiki</title>
</svelte:head>

<Drawer zIndex="z-[100]">
    <div class="p-4 border-b border-surface-300/30 dark:border-surface-700/30 flex items-center justify-between">
        <a href="/" class="text-base font-black uppercase bg-gradient-to-r from-secondary-500 via-primary-500 to-tertiary-500 bg-clip-text text-transparent no-underline">
            Mineraculous Wiki
        </a>
        <span class="badge variant-soft-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            1.0.0-beta14
        </span>
    </div>
    <div class="p-2">
        <LanguageSelection />
    </div>
    {#if browser}
        <div class="p-2">
            <SmartSearch mobile={true} />
        </div>
        <div class="p-2">
            <AddonMenu />
        </div>
    {/if}
    <Navigation embedded={true} />
</Drawer>
<Toast position="tr" />
<Modal />

<AppShell>
    <svelte:fragment slot="header">
        <HeaderBar />
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <Navigation class="hidden lg:block w-[300px]" />
    </svelte:fragment>
    <div class="m-4">
        <slot />
    </div>
</AppShell>
