import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetVideoAvatar = {
	operation: ['getVideoAvatar'],
	resource: ['aiPersonalization'],
};

export const getVideoAvatarDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGetVideoAvatar,
		},
		description: 'The UUID of the LinkedIn account',
		routing: {
			send: {
				type: 'query',
				property: 'linkedinAccountUuid',
			},
		},
	},
];
