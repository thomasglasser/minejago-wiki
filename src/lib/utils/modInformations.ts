export const modInformations: { [x: string]: App.ModInformation } = {
	mineraculous: {
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
		repositoryId: 'thomasglasser/Mineraculous',
        download: "https://modrinth.com/project/mineraculous",
		name: 'Mineraculous',
	}
};

export const addonList = [
];

export const modlist = ['mineraculous'].concat(addonList);
