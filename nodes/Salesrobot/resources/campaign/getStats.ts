import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStats = {
	operation: ['getStats'],
	resource: ['campaign'],
};

export const campaignGetStatsDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetStats,
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
			show: showOnlyForGetStats,
		},
		description: 'The UUID of the campaign to get statistics for',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
];
