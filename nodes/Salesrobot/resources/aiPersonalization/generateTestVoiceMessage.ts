import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGenerateTestVoiceMessage = {
	operation: ['generateTestVoiceMessage'],
	resource: ['aiPersonalization'],
};

export const generateTestVoiceMessageDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGenerateTestVoiceMessage,
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
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: showOnlyForGenerateTestVoiceMessage,
		},
		description: 'Text to convert to voice message for testing',
		placeholder: 'Hello this is John, Trying to reach out from LinkedIn. Hope you are doing fine',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
];
