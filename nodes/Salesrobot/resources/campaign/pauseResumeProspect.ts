import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPauseResumeProspect = {
	operation: ['pauseResumeProspect'],
	resource: ['campaign'],
};

export const campaignPauseResumeProspectDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForPauseResumeProspect,
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
		displayName: 'Prospect UUID',
		name: 'prospectUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForPauseResumeProspect,
		},
		description: 'The UUID of the prospect to pause or resume',
		routing: {
			send: {
				type: 'query',
				property: 'prospectUuid',
			},
		},
	},
	{
		displayName: 'Action',
		name: 'pause',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForPauseResumeProspect,
		},
		options: [
			{
				name: 'Pause Prospect',
				value: true,
			},
			{
				name: 'Resume Prospect',
				value: false,
			},
		],
		default: true,
		description: 'Whether to pause or resume the prospect',
		routing: {
			send: {
				type: 'query',
				property: 'pause',
			},
		},
	},
];


