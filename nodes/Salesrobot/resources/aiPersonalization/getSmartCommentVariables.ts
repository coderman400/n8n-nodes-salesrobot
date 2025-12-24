import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetSmartCommentVariables = {
	operation: ['getSmartCommentVariables'],
	resource: ['aiPersonalization'],
};

export const getSmartCommentVariablesDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetSmartCommentVariables,
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
		displayName: 'Variable Type',
		name: 'smartCommentVariableType',
		type: 'options',
		displayOptions: {
			show: showOnlyForGetSmartCommentVariables,
		},
		options: [
			{
				name: 'Created',
				value: 'CREATED',
			},
			{
				name: 'Public',
				value: 'PUBLIC',
			},
			{
				name: 'Saved',
				value: 'SAVED',
			},
		],
		default: 'CREATED',
		description: 'Type of smart comment variables to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'smartCommentVariableType',
			},
		},
	},
];
