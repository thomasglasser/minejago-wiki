export const modInformations: { [x: string]: App.ModInformation } = {
	minejago: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/');
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang/');
		},
		repositoryId: 'thomasglasser/Minejago',
        download: "https://modrinth.com/project/minejago",
		name: 'Minejago'
	},
	immersion: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/');
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/immersion_wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/immersion_wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang/');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Immersion Pack',
		icon: '/immersion.png'
	},
	potion_pot: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/');
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/potion_pot_wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/potion_pot_wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang/');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Potion Pot Pack',
		icon: '/potion_pot.png'
	}
};

export const addonList = [
    'immersion',
    'potion_pot'
];

export const modlist = ['minejago'].concat(addonList);
