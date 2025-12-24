import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateAiVariable = {
	operation: ['createAiVariable'],
	resource: ['aiPersonalization'],
};

export const createAiVariableDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateAiVariable,
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
		displayName: 'Variable Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateAiVariable,
		},
		description: 'Name of the AI variable',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'AI Prompt',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 6,
		},
		displayOptions: {
			show: showOnlyForCreateAiVariable,
		},
		description:
			'The prompt for your AI variable. You can use tags like {{firstName}}, {{industry}}, {{company}}, etc.',
		placeholder:
			'Write a personalized opening line for {{firstName}} who works at {{company}} in the {{industry}} industry',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Update AI Variable ID',
		name: 'updateAiVariableId',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCreateAiVariable,
		},
		description: 'ID of existing AI variable to update (leave empty to create new)',
		routing: {
			send: {
				type: 'body',
				property: 'updateAiVariableId',
				value: '={{$value || null}}',
			},
		},
	},
];
