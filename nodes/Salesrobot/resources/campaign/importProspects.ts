import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImportProspects = {
	operation: ['importProspects'],
	resource: ['campaign'],
};

export const campaignImportProspectsDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForImportProspects,
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
			show: showOnlyForImportProspects,
		},
		description: 'The UUID of the campaign to import prospects into',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Selected Account Type',
		name: 'selectedAccountType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForImportProspects,
		},
		options: [
			{
				name: 'LinkedIn Account',
				value: 'LINKEDIN_ACCOUNT',
			},
			{
				name: 'Nylas Account',
				value: 'NYLAS_ACCOUNT',
			},
		],
		default: 'LINKEDIN_ACCOUNT',
		description: 'The type of account to use for import',
		routing: {
			send: {
				type: 'body',
				property: 'selectedAccountType',
			},
		},
	},
	{
		displayName: 'Search URL',
		name: 'searchUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForImportProspects,
		},
		description: 'LinkedIn Sales Navigator search URL',
		placeholder: 'https://www.linkedin.com/search/results/people/?keywords=...',
		routing: {
			send: {
				type: 'body',
				property: 'searchUrl',
			},
		},
	},
	{
		displayName: 'Search Type',
		name: 'searchType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForImportProspects,
		},
		options: [
			{
				name: 'Comment',
				value: 'comment',
			},
			{
				name: 'Event',
				value: 'event',
			},
			{
				name: 'Group',
				value: 'group',
			},
			{
				name: 'Normal',
				value: 'normal',
			},
			{
				name: 'Recruiter',
				value: 'recruiter',
			},
			{
				name: 'Sales Navigator',
				value: 'salesnav',
			},
		],
		default: 'normal',
		description: 'Type of search to perform',
		routing: {
			send: {
				type: 'body',
				property: 'searchType',
			},
		},
	},
	{
		displayName: 'Connection Levels',
		name: 'connectionLevels',
		type: 'multiOptions',
		required: true,
		displayOptions: {
			show: showOnlyForImportProspects,
		},
		options: [
			{
				name: '1st',
				value: '1st',
			},
			{
				name: '2nd',
				value: '2nd',
			},
			{
				name: '3rd',
				value: '3rd',
			},
		],
		default: ['2nd', '3rd'],
		description: 'LinkedIn connection levels to include',
		routing: {
			send: {
				type: 'body',
				property: 'connectionLevels',
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
			show: showOnlyForImportProspects,
		},
		options: [
			{
				displayName: 'Collect Contact Info',
				name: 'collectContactInfo',
				type: 'boolean',
				default: true,
				description: 'Whether to collect contact information',
				routing: {
					send: {
						type: 'body',
						property: 'collectContactInfo',
					},
				},
			},
			{
				displayName: "Don't Add If In Another LinkedIn Account For My User",
				name: 'dontAddIfInAnotherLinkedinAccountForMyUser',
				type: 'boolean',
				default: true,
				description: 'Whether to skip prospects already in another LinkedIn account',
				routing: {
					send: {
						type: 'body',
						property: 'dontAddIfInAnotherLinkedinAccountForMyUser',
					},
				},
			},
			{
				displayName: 'Enable Fast Sync',
				name: 'enableFastSync',
				type: 'boolean',
				default: false,
				description: 'Whether to enable fast synchronization',
				routing: {
					send: {
						type: 'body',
						property: 'enableFastSync',
					},
				},
			},
			{
				displayName: 'Enrich Data',
				name: 'enrichData',
				type: 'boolean',
				default: true,
				description: 'Whether to enrich prospect data',
				routing: {
					send: {
						type: 'body',
						property: 'enrichData',
					},
				},
			},
			{
				displayName: 'Event Message URL',
				name: 'eventMessageUrl',
				type: 'string',
				default: '',
				description: 'URL for event messages',
				routing: {
					send: {
						type: 'body',
						property: 'eventMessageUrl',
					},
				},
			},
			{
				displayName: 'Group Message URL',
				name: 'groupMessageUrl',
				type: 'string',
				default: '',
				description: 'URL for group messages',
				routing: {
					send: {
						type: 'body',
						property: 'groupMessageUrl',
					},
				},
			},
			{
				displayName: 'Open InMail Discover',
				name: 'openInmailDiscover',
				type: 'boolean',
				default: false,
				description: 'Whether to open InMail discover',
				routing: {
					send: {
						type: 'body',
						property: 'openInmailDiscover',
					},
				},
			},
			{
				displayName: 'Premium Only',
				name: 'premiumOnly',
				type: 'boolean',
				default: false,
				description: 'Whether to include only premium profiles',
				routing: {
					send: {
						type: 'body',
						property: 'premiumOnly',
					},
				},
			},
		],
	},
];
