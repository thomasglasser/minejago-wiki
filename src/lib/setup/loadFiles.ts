import type { JSZipObject } from 'jszip';
import { getFileName } from '$lib/utils/fileName';

export const getTextureFiles = async (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>,
	modId: string
) => {
	const filteredFiles = zippedFiles.filter((zippedFile) => matcher(zippedFile.name));
	
	const promises = filteredFiles.map(async (file) => {
		const value = await file.async('base64');
		return { [`${modId}:${getFileName(file.name)}`]: value };
	});
	
	const resultingArray = await Promise.all(promises);
	
	return resultingArray.reduce((previousValue, currentValue) => {
		return { ...previousValue, ...currentValue };
	}, {});
};

export const getMatchingJSONFiles = async (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>,
	originId: string = '',
	additionalTransformation?: (objectToTransform: object) => object
) => {
	const filteredFiles = zippedFiles.filter((zippedFile) => matcher(zippedFile.name));
	
	const promises = filteredFiles.map(async (file) => {
		const value = await file.async('string');
		const json = JSON.parse(value);
		const key = originId ? `${originId}:${getFileName(file.name)}` : getFileName(file.name);
		return {
			[key]: additionalTransformation ? additionalTransformation(json) : json
		};
	});
	
	let resultingArray = await Promise.all(promises);
	
	if (additionalTransformation) {
		resultingArray = resultingArray.map(additionalTransformation);
	}
	
	return resultingArray.reduce((previousValue, currentValue) => {
		return { ...previousValue, ...currentValue };
	}, {});
};
