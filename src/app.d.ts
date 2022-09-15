// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		category?: string;
		entry?: string;
	}

	// interface Platform {}
	interface GithubObject {
		name: string;
		path: string;
		sha: string;
		size: number;
		url: string;
		html_url: string;
		git_url: string;
		download_url?: string;
		type: 'file' | 'dir';
	}

	interface LanguageDictionary {
		[x: string]: { [x: string]: string };
	}

	interface PatchouliPage {
		type:
			| 'patchouli:text'
			| 'patchouli:crafting'
			| 'ars_nouveau:apparatus_recipe'
			| 'ars_nouveau:imbuement_recipe'
			| string;
		recipe?: string;
		text?: string;
		entries?: Array<string>;
		title?: string;

		[x: string]: string;
	}

	interface PatchouliCategory {
		name: string;
		id: string;
		description: string;
		icon: string;
		sortnum: number;
		entries: {
			[x: string]: PatchouliEntry;
		};
	}

	interface PatchouliEntry {
		category: string;
		icon: string;
		name: string;
		pages: Array<PatchouliPage>;
	}

	interface Item {
		item: string;
	}

	interface Tag {
		tag: string;
	}

	type Ingredient = Tag & Item & {}

	interface Recipe {
		type:
			| 'minecraft:crafting_shaped'
			| 'minecraft:crafting_shapeless'
			| 'ars_nouveau:enchanting_apparatus'
			| 'ars_nouveau:imbuement'
			| 'ars_nouveau:enchantment'
			| 'ars_nouveau:glyph'
			| 'Unknown Recipe';
	}

	interface ShapedRecipe extends Recipe {
		type: 'minecraft:crafting_shaped';
		key: {
			[x: string]: Ingredient;
		};
		pattern: Array<string>;
		result: Item;
	}

	interface ShapelessRecipe extends Recipe {
		type: 'minecraft:crafting_shapeless' | 'ars_nouveau:book_upgrade';
		ingredients: Array<Ingredient>;
		result: Item;
	}

	interface EnchantingApparatusRecipe extends Recipe {
		type: 'ars_nouveau:enchanting_apparatus';
		keepNbtOfReagent: boolean;
		reagent: Array<Ingredient>;
		output: Item;
		pedestalItems: Array<Ingredient>;
		sourceCost: number;
	}

	interface EnchantmentRecipe extends Recipe {
		type: 'ars_nouveau:enchantment';
		enchantment: string;
		level: number;
		pedestalItems: Array<Ingredient>;
		sourceCost: number;
	}

	interface GlyphRecipe extends Recipe {
		type: 'ars_nouveau:glyph';
		count: number;
		exp: number;
		inputItems: Array<Ingredient>;
		output: Item;
	}

	interface ImbuementRecipe extends Recipe {
		type: 'ars_nouveau:imbuement';
		count: number;
		input: {
			item: Ingredient;
		}
		output: Item;
		pedestalItems: Array<Ingredient>;
		source: number;
	}

	interface PatchouliStore {
		[x: string]: PatchouliCategory;
	}

	interface RecipeDictionary {
		[x: string]: Recipe;
	}

	export interface TextureDictionary {
		[x: string]: string;
	}

	export interface MinecraftLanguageDictionary {
		[x: string]: string;
	}
}
