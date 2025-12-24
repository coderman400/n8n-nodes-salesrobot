import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCampaignCreate = {
	operation: ['create'],
	resource: ['campaign'],
};

export const campaignCreateDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCampaignCreate,
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
		displayName: 'Campaign Name',
		name: 'campaignName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCampaignCreate,
		},
		description: 'The name of the campaign',
		routing: {
			send: {
				type: 'body',
				property: 'campaignName',
			},
		},
	},
	{
		displayName: 'Campaign Type',
		name: 'campaignType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForCampaignCreate,
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
		displayName: 'Campaign Family',
		name: 'campaignFamily',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForCampaignCreate,
		},
		options: [
			{
				name: 'LinkedIn',
				value: 'LINKEDIN',
			},
			{
				name: 'Hybrid',
				value: 'HYBRID',
			},
			{
				name: 'Nylas',
				value: 'NYLAS',
			},
		],
		default: 'LINKEDIN',
		description: 'The campaign family/platform',
		routing: {
			send: {
				type: 'body',
				property: 'campaignFamily',
			},
		},
	},
];
