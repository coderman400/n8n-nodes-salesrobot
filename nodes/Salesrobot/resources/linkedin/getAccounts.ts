import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAccounts = {
	operation: ['getAccounts'],
	resource: ['linkedin'],
};

export const linkedinGetAccountsDescription: INodeProperties[] = [
	{
		displayName: 'Customer UUID',
		name: 'customerUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetAccounts,
		},
		description: 'The customer UUID (sent as header parameter)',
		routing: {
			request: {
				headers: {
					customeruuid: '={{$parameter.customerUuid}}',
				},
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
			show: showOnlyForGetAccounts,
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for pagination',
				typeOptions: {
					minValue: 1,
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
				default: 10,
				description: 'Number of results per page',
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
				displayName: 'Search Term',
				name: 'searchTerm',
				type: 'string',
				default: '',
				description: 'Search term to filter LinkedIn accounts',
				routing: {
					send: {
						type: 'query',
						property: 'searchTerm',
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

