import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAutomaticWarmup = {
	operation: ['automaticWarmup'],
	resource: ['settings'],
};

export const settingsAutomaticWarmupDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAutomaticWarmup,
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
		displayName: 'Automated Accept Connections',
		name: 'automatedAcceptConnections',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
			show: showOnlyForAutomaticWarmup,
		},
		description: 'Whether to automatically accept connection requests',
		routing: {
			send: {
				type: 'body',
				property: 'automatedAcceptConnections',
			},
		},
	},
	{
		displayName: 'Automated Connect Suggested',
		name: 'automatedConnectSuggested',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForAutomaticWarmup,
		},
		description:
			'Whether to automatically connect with suggested profiles (leave unchecked for null)',
		routing: {
			send: {
				type: 'body',
				property: 'automatedConnectSuggested',
				value: '={{$value === false ? null : $value}}',
			},
		},
	},
];
