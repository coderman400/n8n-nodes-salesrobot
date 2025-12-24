import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateSmartCommentVariable = {
	operation: ['createSmartCommentVariable'],
	resource: ['aiPersonalization'],
};

export const createSmartCommentVariableDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateSmartCommentVariable,
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
			show: showOnlyForCreateSmartCommentVariable,
		},
		description: 'Name of the smart comment variable',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Smart Comment Prompt',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 6,
		},
		displayOptions: {
			show: showOnlyForCreateSmartCommentVariable,
		},
		description:
			'The prompt for your smart comment variable. You can use tags like {{firstName}}, {{about}}, {{industry}}, {{currentPost}}, {{otherComments}}, etc.',
		placeholder:
			"Write an engaging comment for {{firstName}}'s post about {{currentPost}} considering their {{industry}} background",
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Update Smart Comment Variable ID',
		name: 'updateSmartCommentVariableId',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCreateSmartCommentVariable,
		},
		description: 'ID of existing smart comment variable to update (leave empty to create new)',
		routing: {
			send: {
				type: 'body',
				property: 'updateSmartCommentVariableId',
				value: '={{$value || null}}',
			},
		},
	},
];
