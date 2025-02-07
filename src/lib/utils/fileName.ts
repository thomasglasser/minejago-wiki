export const getFileName = (zipName: string): string => {
	if (zipName.includes('textures') && !zipName.includes('item') && !zipName.includes('block'))
		return zipName.substring(zipName.indexOf('/') + 1).split('.')[0] || 'unknown';
	return zipName.split('/')?.pop()?.split('.')[0] || 'unknown';
}
