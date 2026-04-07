import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAddProspect = {
	operation: ['addProspect'],
	resource: ['campaign'],
};

export const campaignAddProspectDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddProspect,
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
			show: showOnlyForAddProspect,
		},
		description: 'The UUID of the campaign to add the prospect to',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Profile URL',
		name: 'profileUrl',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddProspect,
		},
		placeholder: 'https://www.linkedin.com/in/johndoe',
		description: 'LinkedIn profile URL of the prospect',
		routing: {
			send: {
				preSend: [
					async function (this, requestOptions) {
						const profileUrl = this.getNodeParameter('profileUrl') as string;
						const firstName = this.getNodeParameter('firstName', '') as string;
						const lastName = this.getNodeParameter('lastName', '') as string;
						const additionalFields = this.getNodeParameter('additionalFields', {}) as {
							jobTitle?: string;
							companyName?: string;
							emailId?: string;
							phoneNumber?: string;
							salesNavProfileUrl?: string;
							state?: string;
							city?: string;
							industry?: string;
							website?: string;
							isPremium?: boolean;
							connectionLevel?: string;
						};

						const prospectData: Array<{ name: string; values: string[] }> = [
							{ name: 'profileUrl', values: [profileUrl] },
							{ name: 'firstName', values: [firstName] },
							{ name: 'lastName', values: [lastName] },
						];

						const fieldMap: Record<string, string> = {
							jobTitle: 'jobTitle',
							companyName: 'companyName',
							emailId: 'emailId',
							phoneNumber: 'phoneNumber',
							salesNavProfileUrl: 'salesNavProfileUrl',
							state: 'state',
							city: 'city',
							industry: 'industry',
							website: 'website',
							isPremium: 'isPremium',
							connectionLevel: 'connectionLevel',
						};

						for (const [key, apiName] of Object.entries(fieldMap)) {
							const value = additionalFields[key as keyof typeof additionalFields];
							if (value !== undefined && value !== '') {
								prospectData.push({
									name: apiName,
									values: [String(value)],
								});
							}
						}

						requestOptions.body = {
							...(requestOptions.body as object),
							prospectData,
						};

						return requestOptions;
					},
				],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddProspect,
		},
		description: 'First name of the prospect',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForAddProspect,
		},
		description: 'Last name of the prospect',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForAddProspect,
		},
		options: [
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'City of the prospect',
			},
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description: 'Company name of the prospect',
			},
			{
				displayName: 'Connection Level',
				name: 'connectionLevel',
				type: 'options',
				options: [
					{ name: '1st', value: '1st' },
					{ name: '2nd', value: '2nd' },
					{ name: '3rd', value: '3rd' },
				],
				default: '2nd',
				description: 'LinkedIn connection level',
			},
			{
				displayName: 'Email',
				name: 'emailId',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email address of the prospect',
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				description: 'Industry of the prospect',
			},
			{
				displayName: 'Is Premium',
				name: 'isPremium',
				type: 'boolean',
				default: false,
				description: 'Whether the prospect has a premium LinkedIn profile',
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				description: 'Job title of the prospect',
			},
			{
				displayName: 'Phone Number',
				name: 'phoneNumber',
				type: 'string',
				default: '',
				description: 'Phone number of the prospect',
			},
			{
				displayName: 'Sales Navigator Profile URL',
				name: 'salesNavProfileUrl',
				type: 'string',
				default: '',
				description: 'LinkedIn Sales Navigator profile URL',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'State of the prospect',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Website of the prospect',
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForAddProspect,
		},
		options: [
			{
				displayName: 'Collect Contact Info',
				name: 'collectContactInfo',
				type: 'boolean',
				default: true,
				description: 'Whether to collect contact information',
				routing: {
					send: {
						type: 'body',
						property: 'collectContactInfo',
					},
				},
			},
			{
				displayName: "Don't Add If In Another LinkedIn Account's Campaign",
				name: 'dontAddIfInAnotherLinkedinAccountForMyUser',
				type: 'boolean',
				default: true,
				description: 'Whether to skip if prospect is already in another LinkedIn account',
				routing: {
					send: {
						type: 'body',
						property: 'dontAddIfInAnotherLinkedinAccountForMyUser',
					},
				},
			},
			{
				displayName: 'Enrich Data',
				name: 'enrichData',
				type: 'boolean',
				default: true,
				description: 'Whether to enrich prospect data',
				routing: {
					send: {
						type: 'body',
						property: 'enrichData',
					},
				},
			},
		],
	},
];
