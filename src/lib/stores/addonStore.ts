import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';

export const selectedAddonStore: Writable<Array<string>> = localStorageStore('selectedAddons', []);
export const loadedAddonStore: Writable<Array<string>> = writable([]);
