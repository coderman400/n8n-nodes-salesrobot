import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateBlacklist = {
	operation: ['updateBlacklist'],
	resource: ['settings'],
};

export const settingsUpdateBlacklistDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateBlacklist,
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
		displayName: 'Company Names',
		name: 'companyNames',
		type: 'json',
		default: '[]',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateBlacklist,
		},
		description:
			'Array of company domain names to blacklist (e.g., ["google.com", "facebook.com"])',
		placeholder: '["google.com", "facebook.com"]',
		routing: {
			send: {
				type: 'body',
				property: 'companyNames',
				value: '={{JSON.parse($value)}}',
			},
		},
	},
	{
		displayName: 'Profile URLs',
		name: 'profileUrls',
		type: 'json',
		default: '[]',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateBlacklist,
		},
		description: 'Array of LinkedIn profile URLs to blacklist',
		placeholder: '["https://www.linkedin.com/in/example1", "https://www.linkedin.com/in/example2"]',
		routing: {
			send: {
				type: 'body',
				property: 'profileUrls',
				value: '={{JSON.parse($value)}}',
			},
		},
	},
];
