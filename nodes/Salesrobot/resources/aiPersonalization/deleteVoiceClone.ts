import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteVoiceClone = {
	operation: ['deleteVoiceClone'],
	resource: ['aiPersonalization'],
};

export const deleteVoiceCloneDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDeleteVoiceClone,
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
