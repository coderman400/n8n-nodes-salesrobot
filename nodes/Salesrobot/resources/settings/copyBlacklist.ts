import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCopyBlacklist = {
	operation: ['copyBlacklist'],
	resource: ['settings'],
};

export const settingsCopyBlacklistDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCopyBlacklist,
		},
		description: 'The UUID of the LinkedIn account to copy blacklist to',
		routing: {
			send: {
				type: 'query',
				property: 'linkedinAccountUuid',
			},
		},
	},
	{
		displayName: 'Copy From Account',
		name: 'copyFromAccount',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCopyBlacklist,
		},
		description: 'The UUID of the account to copy blacklist from',
		routing: {
			send: {
				type: 'query',
				property: 'copyFromAccount',
			},
		},
	},
];

