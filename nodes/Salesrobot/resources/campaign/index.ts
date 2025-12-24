import type { INodeProperties } from 'n8n-workflow';
import { campaignCreateDescription } from './create';
import { campaignListDescription } from './list';
import { campaignStartDescription } from './start';
import { campaignAddSequenceDescription } from './addSequence';
import { campaignGetStatsDescription } from './getStats';
import { campaignGetProspectsDescription } from './getProspects';
import { campaignGetProspectStatusDescription } from './getProspectStatus';
import { campaignImportProspectsDescription } from './importProspects';
import { campaignImportFromCsvDescription } from './importFromCsv';
import { campaignUpdateConfigurationDescription } from './updateConfiguration';
import { campaignPauseResumeDescription } from './pauseResume';
import { campaignPauseResumeProspectDescription } from './pauseResumeProspect';
import { campaignDeleteProspectsDescription } from './deleteProspects';

const showOnlyForCampaign = {
	resource: ['campaign'],
};

export const campaignDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCampaign,
		},
		options: [
			{
				name: 'Add Sequence Steps',
				value: 'addSequence',
				action: 'Add sequence steps to campaign',
				description: 'Add multiple sequence steps to a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/sequence/save/from-steps',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a campaign',
				description: 'Create a new campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/campaign',
					},
					send: {
						type: 'body',
						property: 'linkedinAccountUuid',
						value: '={{$parameter.linkedinAccountUuid}}',
					},
				},
			},
			{
				name: 'Delete Prospects',
				value: 'deleteProspects',
				action: 'Delete prospects from campaign',
				description: 'Delete multiple prospects from a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/campaign/deleteMultiple',
					},
				},
			},
			{
				name: 'Get Prospect Status',
				value: 'getProspectStatus',
				action: 'Get prospect execution details',
				description: 'Get execution details and status for a specific prospect',
				routing: {
					request: {
						method: 'GET',
						url: '/campaign/prospects/execution-details',
					},
				},
			},
			{
				name: 'Get Prospects',
				value: 'getProspects',
				action: 'Get campaign prospects',
				description: 'Get list of prospects in a campaign',
				routing: {
					request: {
						method: 'GET',
						url: '/campaign/prospects',
					},
				},
			},
			{
				name: 'Get Stats',
				value: 'getStats',
				action: 'Get campaign statistics',
				description: 'Get time-wise statistics for a campaign',
				routing: {
					request: {
						method: 'GET',
						url: '/campaignTimeWiseStats',
					},
				},
			},
			{
				name: 'Import From CSV',
				value: 'importFromCsv',
				action: 'Import prospects from CSV data',
				description: 'Import multiple prospects into campaign from CSV-like data structure',
				routing: {
					request: {
						method: 'POST',
						url: '/add-from-csv',
					},
				},
			},
			{
				name: 'Import Prospects',
				value: 'importProspects',
				action: 'Import prospects from sales navigator',
				description: 'Import prospects into campaign from LinkedIn Sales Navigator search',
				routing: {
					request: {
						method: 'POST',
						url: '/add-from-lisalesnav-search',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List campaigns',
				description: 'Get a list of all campaigns',
				routing: {
					request: {
						method: 'GET',
						url: '/campaigns',
					},
				},
			},
			{
				name: 'Pause/Resume',
				value: 'pauseResume',
				action: 'Pause or resume campaign',
				description: 'Pause or resume a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/campaign/pause',
					},
				},
			},
			{
				name: 'Pause/Resume Prospect',
				value: 'pauseResumeProspect',
				action: 'Pause or resume prospect',
				description: 'Pause or resume a specific prospect in a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/campaign/pauseForProspect',
					},
				},
			},
			{
				name: 'Start',
				value: 'start',
				action: 'Start campaign',
				description: 'Start a campaign',
				routing: {
					request: {
						method: 'POST',
						url: '/start',
					},
				},
			},
			{
				name: 'Update Configuration',
				value: 'updateConfiguration',
				action: 'Update campaign configuration',
				description: 'Update campaign settings and configuration',
				routing: {
					request: {
						method: 'POST',
						url: '/campaign/settings/update',
					},
				},
			},
		],
		default: 'list',
	},
	...campaignCreateDescription,
	...campaignListDescription,
	...campaignImportProspectsDescription,
	...campaignImportFromCsvDescription,
	...campaignUpdateConfigurationDescription,
	...campaignStartDescription,
	...campaignPauseResumeDescription,
	...campaignAddSequenceDescription,
	...campaignGetProspectsDescription,
	...campaignDeleteProspectsDescription,
	...campaignGetProspectStatusDescription,
	...campaignPauseResumeProspectDescription,
	...campaignGetStatsDescription,
];
