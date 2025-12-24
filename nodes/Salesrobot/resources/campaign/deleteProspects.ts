import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDeleteProspects = {
	operation: ['deleteProspects'],
	resource: ['campaign'],
};

export const campaignDeleteProspectsDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForDeleteProspects,
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
		displayName: 'Prospect UUIDs',
		name: 'selectedProspectUuidsJson',
		type: 'json',
		required: true,
		default: '[\n  "c89e49b9-bc46-4275-8eec-35ea3fc011d7"\n]',
		displayOptions: {
			show: showOnlyForDeleteProspects,
		},
		description: 'Array of prospect UUIDs to delete',
		routing: {
			send: {
				type: 'body',
				property: 'selectedProspectUuids',
				value: '={{JSON.parse($value)}}',
			},
		},
	},
	{
		displayName: 'All Selected',
		name: 'allSelected',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForDeleteProspects,
		},
		description: 'Whether all prospects are selected for deletion',
		routing: {
			send: {
				type: 'body',
				property: 'allSelected',
			},
		},
	},
];
