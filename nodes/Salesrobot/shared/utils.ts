import type { IDataObject } from 'n8n-workflow';

/**
 * Removes undefined and null values from an object
 */
export function removeEmptyProps(obj: IDataObject): IDataObject {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			acc[key] = value;
		}
		return acc;
	}, {} as IDataObject);
}

/**
 * Formats pagination parameters
 */
export function getPaginationParams(page?: number, limit?: number): IDataObject {
	const params: IDataObject = {};
	if (page !== undefined) {
		params.page = page;
	}
	if (limit !== undefined) {
		params.limit = limit;
	}
	return params;
}
