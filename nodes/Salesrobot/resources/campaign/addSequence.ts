import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddSequence = {
	operation: ['addSequence'],
	resource: ['campaign'],
};

export const campaignAddSequenceDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddSequence,
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
		displayName: 'Campaign UUID',
		name: 'campaignUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddSequence,
		},
		description: 'The UUID of the campaign',
		routing: {
			send: {
				type: 'body',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Selected Account Type',
		name: 'selectedAccountType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForAddSequence,
		},
		options: [
			{
				name: 'LinkedIn Account',
				value: 'LINKEDIN_ACCOUNT',
			},
			{
				name: 'Nylas Account',
				value: 'NYLAS_ACCOUNT',
			},
		],
		default: 'LINKEDIN_ACCOUNT',
		description: 'The type of account',
		routing: {
			send: {
				type: 'body',
				property: 'selectedAccountType',
			},
		},
	},
	{
		displayName: 'Campaign Type',
		name: 'campaignType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForAddSequence,
		},
		options: [
			{
				name: 'Advanced',
				value: 'ADVANCED',
			},
			{
				name: 'Advanced Sequence',
				value: 'ADVANCED_SEQUENCE',
			},
			{
				name: 'Sales GPT - AI',
				value: 'SALES_GPT_AI',
			},
			{
				name: 'Sales GPT - Message Template',
				value: 'SALES_GPT_MESSAGE_TEMPLATE',
			},
			{
				name: 'Sales GPT - Scratch',
				value: 'SALES_GPT_SCRATCH',
			},
		],
		default: 'ADVANCED',
		description: 'The type of campaign',
		routing: {
			send: {
				type: 'body',
				property: 'campaignType',
			},
		},
	},
	{
		displayName: 'Sequence Steps',
		name: 'sequenceStepsJson',
		type: 'json',
		required: true,
		default:
			'[\n  {\n    "stepOrdinal": 1,\n    "hoursDelay": 0,\n    "sequenceStepType": "VIEW_PROFILE",\n    "multiVariateMails": [\n      {\n        "body": "",\n        "subject": "",\n        "inMailVariant": false,\n        "ordinal": 1\n      }\n    ]\n  },\n  {\n    "stepOrdinal": 2,\n    "hoursDelay": 1,\n    "sequenceStepType": "SEND_CONNECTION_REQUEST",\n    "multiVariateMails": [\n      {\n        "body": "Hi {{firstName}}, I would love to connect with you!",\n        "subject": "",\n        "inMailVariant": false,\n        "ordinal": 1\n      }\n    ]\n  },\n  {\n    "stepOrdinal": 3,\n    "hoursDelay": 24,\n    "sequenceStepType": "SEND_MESSAGE",\n    "multiVariateMails": [\n      {\n        "body": "Hello {{firstName}}, thanks for connecting! I noticed you work at {{company}}.",\n        "subject": "",\n        "inMailVariant": false,\n        "ordinal": 1\n      }\n    ]\n  }\n]',
		displayOptions: {
			show: showOnlyForAddSequence,
		},
		description:
			'Array of sequence steps. SequenceStep fields: uuid (optional), stepOrdinal (order), hoursDelay (hours), sequenceStepType, multiVariateMails array. Step types: VIEW_PROFILE, SEND_CONNECTION_REQUEST, SEND_CONNECTION_REQUEST_BROWSER, SEND_CONNECTION_USING_EMAIL, SEND_MESSAGE, SEND_VOICE_MESSAGE, SEND_VIDEO_MESSAGE, FOLLOW, ENDORSE, LIKE_POST, LIKE_AND_COMMENT, SEND_MESSAGE_IN_MAIL, SEND_EMAIL, SEND_MESSAGE_USING_GROUP, SEND_MESSAGE_USING_EVENT. Mail fields: uuid, body, subject, inMailVariant (boolean), ordinal (A/B variant order), aiVariableName, aiVariableId, smartCommentVariableName, smartCommentVariableId',
		routing: {
			send: {
				type: 'body',
				property: 'sequenceStepDTOList',
				value: '={{JSON.parse($value)}}',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForAddSequence,
		},
		options: [
			{
				displayName: 'Delete Existing Conditional Sequence',
				name: 'deleteExistingConditionalSequence',
				type: 'boolean',
				default: false,
				description: 'Whether to delete existing conditional sequence steps',
				routing: {
					send: {
						type: 'body',
						property: 'deleteExistingConditionalSequence',
					},
				},
			},
		],
	},
];
