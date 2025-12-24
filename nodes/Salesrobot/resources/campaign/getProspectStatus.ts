import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetProspectStatus = {
	operation: ['getProspectStatus'],
	resource: ['campaign'],
};

export const campaignGetProspectStatusDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetProspectStatus,
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
		displayName: 'Prospect UUID',
		name: 'prospectUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetProspectStatus,
		},
		description: 'The UUID of the prospect to get execution details for',
		routing: {
			send: {
				type: 'query',
				property: 'prospectUuid',
			},
		},
	},
];
