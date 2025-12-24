import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCampaignList = {
	operation: ['list'],
	resource: ['campaign'],
};

export const campaignListDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCampaignList,
		},
		description: 'The UUID of the LinkedIn account to list campaigns for',
		routing: {
			send: {
				type: 'query',
				property: 'linkedinAccountUuid',
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
			show: showOnlyForCampaignList,
		},
		options: [
			{
				displayName: 'Campaign Status',
				name: 'campaignStatus',
				type: 'multiOptions',
				options: [
					{
						name: 'Active (Started)',
						value: 'STARTED',
					},
					{
						name: 'Completed',
						value: 'COMPLETED',
					},
					{
						name: 'Created',
						value: 'CREATED',
					},
					{
						name: 'Modifying',
						value: 'MODIFYING',
					},
					{
						name: 'Paused',
						value: 'PAUSED',
					},
				],
				default: [],
				description: 'Filter campaigns by status (comma-separated in API)',
				routing: {
					send: {
						type: 'query',
						property: 'campaignStatus',
						value: '={{$value.join(",")}}',
					},
				},
			},
			{
				displayName: 'Is Alive',
				name: 'isAlive',
				type: 'boolean',
				default: true,
				description: 'Whether to show only alive campaigns',
				routing: {
					send: {
						type: 'query',
						property: 'isAlive',
					},
				},
			},
			{
				displayName: 'Is Archived',
				name: 'isArchived',
				type: 'boolean',
				default: false,
				description: 'Whether to show archived campaigns (default: false shows non-archived)',
				routing: {
					send: {
						type: 'query',
						property: 'isArchived',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 0,
				description: 'Page number for pagination (0-indexed, default: 0)',
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
				displayName: 'Search Term',
				name: 'searchTerm',
				type: 'string',
				default: '',
				description: 'Search in campaign name and originalUrl (case-insensitive)',
				routing: {
					send: {
						type: 'query',
						property: 'searchTerm',
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 10,
				description: 'Number of items per page (default: 10)',
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
				description:
					'Sorting field and direction (format: "field,direction" e.g., "ID,desc" or "name,asc")',
				placeholder: 'ID,desc',
				routing: {
					send: {
						type: 'query',
						property: 'sort',
					},
				},
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'multiOptions',
				options: [
					{
						name: 'CSV Import',
						value: 'IMPORTED_FROM_CSV',
					},
					{
						name: 'Group Search',
						value: 'IMPORTED_FROM_GROUP_SEARCH',
					},
					{
						name: 'Hashtag Search',
						value: 'IMPORTED_FROM_HASHTAG_SEARCH',
					},
					{
						name: 'LinkedIn Event',
						value: 'IMPORTED_FROM_LINKEDIN_EVENT',
					},
					{
						name: 'LinkedIn Search',
						value: 'IMPORTED_FROM_LINKEDIN_SEARCH',
					},
					{
						name: 'Lookalike Search',
						value: 'IMPORTED_FROM_LOOKALIKE_SEARCH',
					},
					{
						name: 'Post Comments',
						value: 'IMPORTED_FROM_POST_COMMENTS',
					},
					{
						name: 'Prospect Pool',
						value: 'IMPORTED_FROM_PROSPECT_POOL',
					},
					{
						name: 'Recruiter Lite',
						value: 'IMPORTED_FROM_RECRUITER_LITE',
					},
					{
						name: 'Recruiter Search',
						value: 'IMPORTED_FROM_RECRUITER_SEARCH',
					},
					{
						name: 'Sales Navigator Search',
						value: 'IMPORTED_FROM_SALESNAV_SEARCH',
					},
					{
						name: 'Saved Contact',
						value: 'IMPORTED_FROM_SAVED_CONTACT',
					},
				],
				default: [],
				description: 'Filter campaigns by source (comma-separated in API)',
				routing: {
					send: {
						type: 'query',
						property: 'source',
						value: '={{$value.join(",")}}',
					},
				},
			},
		],
	},
];
