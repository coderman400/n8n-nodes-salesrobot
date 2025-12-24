import type { INodeProperties } from 'n8n-workflow';

export const campaignIdField: INodeProperties = {
	displayName: 'Campaign ID',
	name: 'campaignId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the campaign',
};

export const limitField: INodeProperties = {
	displayName: 'Limit',
	name: 'limit',
	type: 'number',
	default: 50,
	description: 'Max number of results to return',
	typeOptions: {
		minValue: 1,
		maxValue: 100,
	},
};

export const pageField: INodeProperties = {
	displayName: 'Page',
	name: 'page',
	type: 'number',
	default: 1,
	description: 'Page number for pagination',
	typeOptions: {
		minValue: 1,
	},
};
