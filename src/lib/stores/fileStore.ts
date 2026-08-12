import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const texturesStore: Writable<App.TextureDictionary> = writable({});
export const modonomiconStore: Writable<App.ModonomiconStore> = writable({});
export const recipesStore: Writable<App.RecipeDictionary> = writable({});
export const advancementStore: Writable<App.AdvancementStore> = writable({});
export const storesLoaded: Writable<boolean> = writable(false);
