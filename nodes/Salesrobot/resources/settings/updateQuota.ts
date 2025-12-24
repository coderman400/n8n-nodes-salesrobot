import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateQuota = {
	operation: ['updateQuota'],
	resource: ['settings'],
};

export const settingsUpdateQuotaDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForUpdateQuota,
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
		displayName: 'Daily Quotas',
		name: 'dailyQuotas',
		type: 'collection',
		placeholder: 'Add Quota',
		default: {},
		displayOptions: {
			show: showOnlyForUpdateQuota,
		},
		options: [
			{
				displayName: 'Daily Connect Quota',
				name: 'dailyConnectQuota',
				type: 'number',
				default: 45,
				description: 'Maximum connection requests per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyConnectQuota',
					},
				},
			},
			{
				displayName: 'Daily Email Message Quota',
				name: 'dailyEmailMessageQuota',
				type: 'number',
				default: 15,
				description: 'Maximum email messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyEmailMessageQuota',
					},
				},
			},
			{
				displayName: 'Daily Endorsement Quota',
				name: 'dailyEndorsementQuota',
				type: 'number',
				default: 10,
				description: 'Maximum endorsements per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyEndorsementQuota',
					},
				},
			},
			{
				displayName: 'Daily Follow Quota',
				name: 'dailyFollowQuota',
				type: 'number',
				default: 10,
				description: 'Maximum follows per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyFollowQuota',
					},
				},
			},
			{
				displayName: 'Daily InMail Message Quota',
				name: 'dailyInMailMessageQuota',
				type: 'number',
				default: 10,
				description: 'Maximum InMail messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyInMailMessageQuota',
					},
				},
			},
			{
				displayName: 'Daily Like Comment Quota',
				name: 'dailyLikeCommentQuota',
				type: 'number',
				default: 30,
				description: 'Maximum likes/comments per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyLikeCommentQuota',
					},
				},
			},
			{
				displayName: 'Daily Mail Quota',
				name: 'dailyMailQuota',
				type: 'number',
				default: 150,
				description: 'Maximum emails per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyMailQuota',
					},
				},
			},
			{
				displayName: 'Daily Message From Events Quota',
				name: 'dailyMessageFromEventsQuota',
				type: 'number',
				default: 100,
				description: 'Maximum event messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyMessageFromEventsQuota',
					},
				},
			},
			{
				displayName: 'Daily Message From Groups Quota',
				name: 'dailyMessageFromGroupsQuota',
				type: 'number',
				default: 200,
				description: 'Maximum group messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyMessageFromGroupsQuota',
					},
				},
			},
			{
				displayName: 'Daily Message Quota',
				name: 'dailyMessageQuota',
				type: 'number',
				default: 30,
				description: 'Maximum messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyMessageQuota',
					},
				},
			},
			{
				displayName: 'Daily Video Message Quota',
				name: 'dailyVideoMessageQuota',
				type: 'number',
				default: 10,
				description: 'Maximum video messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyVideoMessageQuota',
					},
				},
			},
			{
				displayName: 'Daily View Quota',
				name: 'dailyViewQuota',
				type: 'number',
				default: 10,
				description: 'Maximum profile views per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyViewQuota',
					},
				},
			},
			{
				displayName: 'Daily Voice Message Quota',
				name: 'dailyVoiceMessageQuota',
				type: 'number',
				default: 10,
				description: 'Maximum voice messages per day',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'dailyVoiceMessageQuota',
					},
				},
			},
		],
	},
	{
		displayName: 'Automated Warm Up Settings',
		name: 'warmUpSettings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: {
			show: showOnlyForUpdateQuota,
		},
		options: [
			{
				displayName: 'Automated Warm Up',
				name: 'automatedWarmUp',
				type: 'boolean',
				default: false,
				description: 'Whether to enable automated warm up',
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUp',
					},
				},
			},
			{
				displayName: 'Automated Warm Up End Value',
				name: 'automatedWarmUpEndValue',
				type: 'number',
				default: 25,
				description: 'End value for automated warm up',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpEndValue',
					},
				},
			},
			{
				displayName: 'Automated Warm Up End Value InMail',
				name: 'automatedWarmUpEndValueInMail',
				type: 'number',
				default: 25,
				description: 'End value for automated warm up InMail',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpEndValueInMail',
					},
				},
			},
			{
				displayName: 'Automated Warm Up Frequency',
				name: 'automatedWarmUpFrequency',
				type: 'number',
				default: 3,
				description: 'Frequency for automated warm up (days)',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpFrequency',
					},
				},
			},
			{
				displayName: 'Automated Warm Up Frequency InMail',
				name: 'automatedWarmUpFrequencyInMail',
				type: 'number',
				default: 3,
				description: 'Frequency for automated warm up InMail (days)',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpFrequencyInMail',
					},
				},
			},
			{
				displayName: 'Automated Warm Up InMail',
				name: 'automatedWarmUpInMail',
				type: 'boolean',
				default: false,
				description: 'Whether to enable automated warm up for InMail',
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpInMail',
					},
				},
			},
			{
				displayName: 'Automated Warm Up Step Value',
				name: 'automatedWarmUpStepValue',
				type: 'number',
				default: 2,
				description: 'Step value for automated warm up',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpStepValue',
					},
				},
			},
			{
				displayName: 'Automated Warm Up Step Value InMail',
				name: 'automatedWarmUpStepValueInMail',
				type: 'number',
				default: 2,
				description: 'Step value for automated warm up InMail',
				typeOptions: {
					minValue: 0,
				},
				routing: {
					send: {
						type: 'body',
						property: 'automatedWarmUpStepValueInMail',
					},
				},
			},
		],
	},
];
