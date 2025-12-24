import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPauseResume = {
	operation: ['pauseResume'],
	resource: ['campaign'],
};

export const campaignPauseResumeDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForPauseResume,
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
			show: showOnlyForPauseResume,
		},
		description: 'The UUID of the campaign to pause or resume',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Action',
		name: 'pause',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForPauseResume,
		},
		options: [
			{
				name: 'Pause Campaign',
				value: true,
			},
			{
				name: 'Resume Campaign',
				value: false,
			},
		],
		default: true,
		description: 'Whether to pause or resume the campaign',
		routing: {
			send: {
				type: 'query',
				property: 'pause',
			},
		},
	},
	{
		displayName: 'Continue Started Campaign',
		name: 'continueStartedCampaign',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForPauseResume,
		},
		description: 'Whether to continue the sequences if it has already started',
		routing: {
			send: {
				type: 'query',
				property: 'continueStartedCampaign',
			},
		},
	},
];


