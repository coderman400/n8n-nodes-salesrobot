import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStart = {
	operation: ['start'],
	resource: ['campaign'],
};

export const campaignStartDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForStart,
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
			show: showOnlyForStart,
		},
		description: 'The UUID of the campaign to start',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Has Invite Message',
		name: 'hasInviteMessage',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForStart,
		},
		description: 'Whether the campaign has an invite message',
		routing: {
			send: {
				type: 'query',
				property: 'hasInviteMessage',
			},
		},
	},
];
