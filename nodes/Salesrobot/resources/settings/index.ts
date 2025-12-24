import type { INodeProperties } from 'n8n-workflow';
import { settingsUpdateQuotaDescription } from './updateQuota';
import { settingsUpdateScheduleDescription } from './updateSchedule';
import { settingsDeletePendingInvitesDescription } from './deletePendingInvites';
import { settingsUpdateBlacklistDescription } from './updateBlacklist';
import { settingsCopyBlacklistDescription } from './copyBlacklist';
import { settingsAutomaticWarmupDescription } from './automaticWarmup';

const showOnlyForSettings = {
	resource: ['settings'],
};

export const settingsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSettings,
		},
		options: [
			{
				name: 'Automatic Warmup',
				value: 'automaticWarmup',
				action: 'Configure automatic warmup',
				description: 'Configure automatic connection acceptance and suggested connections',
				routing: {
					request: {
						method: 'POST',
						url: '/settings/automaticWarmUp',
					},
				},
			},
			{
				name: 'Copy Blacklist From Account',
				value: 'copyBlacklist',
				action: 'Copy blacklist from another account',
				description: 'Copy blacklist settings from another LinkedIn account',
				routing: {
					request: {
						method: 'POST',
						url: '/blacklist/copy_from_account',
					},
				},
			},
			{
				name: 'Delete Pending Invites',
				value: 'deletePendingInvites',
				action: 'Delete pending invites',
				description: 'Delete old pending connection invites',
				routing: {
					request: {
						method: 'POST',
						url: '/settings/pendingInvite',
					},
				},
			},
			{
				name: 'Update Blacklist',
				value: 'updateBlacklist',
				action: 'Update blacklist settings',
				description: 'Update blacklisted companies and profile URLs',
				routing: {
					request: {
						method: 'POST',
						url: '/blacklist/update',
					},
				},
			},
			{
				name: 'Update Quota',
				value: 'updateQuota',
				action: 'Update quota settings',
				description: 'Update daily quota and warm up settings for LinkedIn account',
				routing: {
					request: {
						method: 'POST',
						url: '/settings/quota',
					},
				},
			},
			{
				name: 'Update Schedule',
				value: 'updateSchedule',
				action: 'Update schedule settings',
				description: 'Update schedule settings including working hours and days',
				routing: {
					request: {
						method: 'POST',
						url: '/schedule',
					},
				},
			},
		],
		default: 'updateQuota',
	},
	...settingsUpdateQuotaDescription,
	...settingsUpdateScheduleDescription,
	...settingsDeletePendingInvitesDescription,
	...settingsUpdateBlacklistDescription,
	...settingsCopyBlacklistDescription,
	...settingsAutomaticWarmupDescription,
];
