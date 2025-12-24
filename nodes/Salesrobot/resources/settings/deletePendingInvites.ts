import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeletePendingInvites = {
	operation: ['deletePendingInvites'],
	resource: ['settings'],
};

export const settingsDeletePendingInvitesDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDeletePendingInvites,
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
		displayName: 'Delete Old Pending',
		name: 'deleteOldPending',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
			show: showOnlyForDeletePendingInvites,
		},
		description: 'Whether to delete old pending invites',
		routing: {
			send: {
				type: 'body',
				property: 'deleteOldPending',
			},
		},
	},
	{
		displayName: 'Delete Last Value',
		name: 'deleteLastValue',
		type: 'number',
		default: 501,
		required: true,
		displayOptions: {
			show: showOnlyForDeletePendingInvites,
		},
		description: 'Number of days old for pending invites to delete',
		typeOptions: {
			minValue: 1,
		},
		routing: {
			send: {
				type: 'body',
				property: 'deleteLastValue',
			},
		},
	},
];

