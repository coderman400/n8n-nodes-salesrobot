import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateVoiceClone = {
	operation: ['createVoiceClone'],
	resource: ['aiPersonalization'],
};

export const createVoiceCloneDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateVoiceClone,
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
		displayName: 'Voice Name',
		name: 'voiceName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateVoiceClone,
		},
		description: 'Name for the voice clone',
		routing: {
			send: {
				type: 'body',
				property: 'voiceName',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: showOnlyForCreateVoiceClone,
		},
		description: 'Description of the voice clone',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Audio Data',
		name: 'audioData',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 8,
		},
		displayOptions: {
			show: showOnlyForCreateVoiceClone,
		},
		description: 'Base64 encoded audio data for voice cloning',
		placeholder: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10...',
		routing: {
			send: {
				type: 'body',
				property: 'audioData',
			},
		},
	},
];
