import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGenerateSampleVideo = {
	operation: ['generateSampleVideo'],
	resource: ['aiPersonalization'],
};

export const generateSampleVideoDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGenerateSampleVideo,
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
			show: showOnlyForGenerateSampleVideo,
		},
		description: 'Text to convert to video sample',
		placeholder: 'This is my first test, i am expecting some good results here',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
];
