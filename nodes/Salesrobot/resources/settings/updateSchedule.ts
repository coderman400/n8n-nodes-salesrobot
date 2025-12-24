import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateSchedule = {
	operation: ['updateSchedule'],
	resource: ['settings'],
};

export const settingsUpdateScheduleDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForUpdateSchedule,
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
		displayName: 'Schedule Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		description: 'Name of the schedule',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Max Prospects to Reach',
		name: 'maxProspectsToReach',
		type: 'number',
		required: true,
		default: 100,
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		description: 'Maximum number of prospects to reach per day',
		typeOptions: {
			minValue: 1,
		},
		routing: {
			send: {
				type: 'body',
				property: 'maxProspectsToReach',
			},
		},
	},
	{
		displayName: 'Start Time',
		name: 'startTime',
		type: 'string',
		required: true,
		default: '09:00',
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		description: 'Start time for campaign activities (HH:mm format)',
		placeholder: '09:00',
		routing: {
			send: {
				type: 'body',
				property: 'startTime',
			},
		},
	},
	{
		displayName: 'End Time',
		name: 'endTime',
		type: 'string',
		required: true,
		default: '17:00',
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		description: 'End time for campaign activities (HH:mm format)',
		placeholder: '17:00',
		routing: {
			send: {
				type: 'body',
				property: 'endTime',
			},
		},
	},
	{
		displayName: 'Time Zone',
		name: 'timeZoneString',
		type: 'string',
		required: true,
		default: 'UTC',
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		description: 'Timezone for schedule (e.g., Asia/Calcutta, America/New_York, Europe/London)',
		placeholder: 'Asia/Calcutta',
		routing: {
			send: {
				type: 'body',
				property: 'timeZoneString',
			},
		},
	},
	{
		displayName: 'Days of Week',
		name: 'dayOfWeeks',
		type: 'multiOptions',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateSchedule,
		},
		options: [
			{
				name: 'Friday',
				value: 'FRIDAY',
			},
			{
				name: 'Monday',
				value: 'MONDAY',
			},
			{
				name: 'Saturday',
				value: 'SATURDAY',
			},
			{
				name: 'Sunday',
				value: 'SUNDAY',
			},
			{
				name: 'Thursday',
				value: 'THURSDAY',
			},
			{
				name: 'Tuesday',
				value: 'TUESDAY',
			},
			{
				name: 'Wednesday',
				value: 'WEDNESDAY',
			},
		],
		default: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
		description: 'Days of the week to run campaigns',
		routing: {
			send: {
				type: 'body',
				property: 'dayOfWeeks',
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
			show: showOnlyForUpdateSchedule,
		},
		options: [
			{
				displayName: 'Safe Mode Enabled',
				name: 'safeModeEnabled',
				type: 'boolean',
				default: true,
				description: 'Whether to enable safe mode for LinkedIn activity',
				routing: {
					send: {
						type: 'body',
						property: 'safeModeEnabled',
					},
				},
			},
			{
				displayName: 'Skip Dates',
				name: 'skipDatesJson',
				type: 'json',
				default: '[]',
				description: 'Array of dates to skip (format: ["2024-12-25", "2024-12-26"])',
				routing: {
					send: {
						type: 'body',
						property: 'skipDates',
						value: '={{JSON.parse($value)}}',
					},
				},
			},
			{
				displayName: 'Should Skip One Day In Week',
				name: 'shouldSkipOneDayInWeek',
				type: 'boolean',
				default: false,
				description: 'Whether to skip one day per week',
				routing: {
					send: {
						type: 'body',
						property: 'shouldSkipOneDayInWeek',
					},
				},
			},
		],
	},
];
