import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAiVariables = {
	operation: ['getAiVariables'],
	resource: ['aiPersonalization'],
};

export const getAiVariablesDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForGetAiVariables,
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
		displayName: 'AI Variable Type',
		name: 'aiVariableType',
		type: 'options',
		displayOptions: {
			show: showOnlyForGetAiVariables,
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
		description: 'Type of AI variables to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'aiVariableType',
			},
		},
	},
];
