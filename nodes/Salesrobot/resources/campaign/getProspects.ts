import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetProspects = {
	operation: ['getProspects'],
	resource: ['campaign'],
};

export const campaignGetProspectsDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetProspects,
		},
		description: 'The UUID of the LinkedIn account',
		routing: {
			send: {
				type: 'query',
				property: 'linkedinAccountUuid',
			},
		},
	},
	{
		displayName: 'Campaign UUID',
		name: 'campaignUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetProspects,
		},
		description: 'The UUID of the campaign to get prospects from',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForGetProspects,
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 0,
				description: 'Page number for pagination (0-indexed)',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'query',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 20,
				description: 'Number of prospects per page',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				routing: {
					send: {
						type: 'query',
						property: 'size',
					},
				},
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'id,desc',
				description: 'Sorting field and direction (format: "field,direction" e.g., "ID,desc")',
				placeholder: 'ID,desc',
				routing: {
					send: {
						type: 'query',
						property: 'sort',
					},
				},
			},
		],
	},
];
