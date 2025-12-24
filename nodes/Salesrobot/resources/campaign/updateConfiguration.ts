import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateConfiguration = {
	operation: ['updateConfiguration'],
	resource: ['campaign'],
};

export const campaignUpdateConfigurationDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForUpdateConfiguration,
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
			show: showOnlyForUpdateConfiguration,
		},
		description: 'The UUID of the campaign to update configuration for',
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
			show: showOnlyForUpdateConfiguration,
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
		description: 'The type of account',
		routing: {
			send: {
				type: 'body',
				property: 'selectedAccountType',
			},
		},
	},
	{
		displayName: 'Connection Levels',
		name: 'connectionLevels',
		type: 'multiOptions',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateConfiguration,
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
		displayName: 'Configuration Options',
		name: 'configurationOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForUpdateConfiguration,
		},
		options: [
			{
				displayName: 'Create SOP On Campaign Start',
				name: 'createSopOnCampaignStart',
				type: 'boolean',
				default: false,
				description: 'Whether to create SOP when campaign starts',
				routing: {
					send: {
						type: 'body',
						property: 'createSopOnCampaignStart',
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
				default: false,
				description: 'Whether to enrich prospect data',
				routing: {
					send: {
						type: 'body',
						property: 'enrichData',
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
			{
				displayName: 'Send Message Using Group',
				name: 'sendMessageUsingGroup',
				type: 'boolean',
				default: false,
				description: 'Whether to send messages using group',
				routing: {
					send: {
						type: 'body',
						property: 'sendMessageUsingGroup',
					},
				},
			},
			{
				displayName: 'SOP Goal',
				name: 'sopGoal',
				type: 'string',
				default: '',
				description: 'The goal for the SOP',
				routing: {
					send: {
						type: 'body',
						property: 'sopGoal',
					},
				},
			},
		],
	},
];
