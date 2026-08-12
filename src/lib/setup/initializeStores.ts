import { prepareModonomicon } from '$lib/setup/prepareModonomicon';
import { modonomiconStore, recipesStore, storesLoaded, texturesStore } from '$lib/stores/fileStore';
import { languagesStore, minecraftLanguageStore } from '$lib/stores/languageStore';
import { getMatchingJSONFiles, getTextureFiles } from '$lib/setup/loadFiles';
import { browser } from '$app/environment';
import { initializeSearch } from '$lib/setup/initializeSearch';
import { modInformations } from '$lib/utils/modInformations';
import { prepareZip } from '$lib/setup/prepareZip';

const initalizeMinecraftLanguageStore = async (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	const response = await fetch('/minecraft/lang/en_us.json');
	const languageFile = await response.json();
	minecraftLanguageStore.set(languageFile);
};

const initalizeDynamicallyLoadedStores = async (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	const response = await fetch('/mineraculous.zip');
	const zip = await prepareZip(response);

	const [
		loadedTextures,
		loadedModonomiconCategories,
		loadedModonomiconEntries,
		loadedLanguages,
		loadedRecipes
	] = await Promise.all([
		getTextureFiles(modInformations.mineraculous.texturePredicate, zip, 'mineraculous'),
		getMatchingJSONFiles(modInformations.mineraculous.modonomiconCategoryPredicate, zip),
		getMatchingJSONFiles(modInformations.mineraculous.modonomiconEntryPredicate, zip),
		getMatchingJSONFiles(modInformations.mineraculous.languagePredicate, zip),
		getMatchingJSONFiles(modInformations.mineraculous.recipePredicate, zip)
	]);

	texturesStore.set(loadedTextures);
	modonomiconStore.set(
		prepareModonomicon(loadedModonomiconCategories, loadedModonomiconEntries, 'mineraculous')
	);
	languagesStore.set(loadedLanguages);
	recipesStore.set(loadedRecipes);
	storesLoaded.set(true);
	
	setTimeout(() => {
		storesLoaded.set(false);
	}, 86400000 /* stores should be refreshed after 1 day if the server is on for so long */);
	
	if (browser) {
		initializeSearch(loadedModonomiconCategories, loadedModonomiconEntries);
	}
};

export const initializeStores = async (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	await Promise.all([
		initalizeMinecraftLanguageStore(fetch),
		initalizeDynamicallyLoadedStores(fetch)
	]);
};
