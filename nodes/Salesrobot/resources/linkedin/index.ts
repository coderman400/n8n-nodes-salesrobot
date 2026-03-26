import type { INodeProperties } from 'n8n-workflow';
import { linkedinSyncInboxDescription } from './syncInbox';
import { linkedinGetAccountsDescription } from './getAccounts';

const showOnlyForLinkedIn = {
	resource: ['linkedin'],
};

export const linkedinDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLinkedIn,
		},
		options: [
			{
				name: 'Get Accounts',
				value: 'getAccounts',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Get LinkedIn accounts',
				description: 'Get all connected LinkedIn accounts',
				routing: {
					request: {
						method: 'GET',
						url: '/linkedinAccounts',
					},
				},
			},
			{
				name: 'Sync Inbox',
				value: 'syncInbox',
				// eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
				action: 'Sync LinkedIn inbox',
				description: 'Synchronize LinkedIn inbox messages',
				routing: {
					request: {
						method: 'POST',
						url: '/syncedMessages',
					},
				},
			},
		],
		default: 'getAccounts',
	},
	...linkedinGetAccountsDescription,
	...linkedinSyncInboxDescription,
];
