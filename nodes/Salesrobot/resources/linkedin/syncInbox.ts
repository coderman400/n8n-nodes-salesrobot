import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSyncInbox = {
	operation: ['syncInbox'],
	resource: ['linkedin'],
};

export const linkedinSyncInboxDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForSyncInbox,
		},
		description: 'The UUID of the LinkedIn account to sync',
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
		default: 'ALL',
		displayOptions: {
			show: showOnlyForSyncInbox,
		},
		description: 'The UUID of the campaign to sync messages for (default: "ALL" for all campaigns)',
		placeholder: 'ALL',
		routing: {
			send: {
				type: 'body',
				property: 'campaignUuid',
			},
		},
	},
];
