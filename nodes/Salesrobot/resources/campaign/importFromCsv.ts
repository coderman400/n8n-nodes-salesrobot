import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImportFromCsv = {
	operation: ['importFromCsv'],
	resource: ['campaign'],
};

export const campaignImportFromCsvDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForImportFromCsv,
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
			show: showOnlyForImportFromCsv,
		},
		description: 'The UUID of the campaign to import prospects into',
		routing: {
			send: {
				type: 'query',
				property: 'campaignUuid',
			},
		},
	},
	{
		displayName: 'Prospect Data',
		name: 'prospectDataJson',
		type: 'json',
		required: true,
		default:
			'[\n  {\n    "name": "profileUrl",\n    "values": [\n      "https://www.linkedin.com/in/johndoe",\n      "https://www.linkedin.com/in/janedoe"\n    ]\n  },\n  {\n    "name": "firstName",\n    "values": [\n      "John",\n      "Jane"\n    ]\n  },\n  {\n    "name": "lastName",\n    "values": [\n      "Doe",\n      "Doe"\n    ]\n  },\n  {\n    "name": "jobTitle",\n    "values": [\n      "Software Engineer",\n      "Product Manager"\n    ]\n  },\n  {\n    "name": "companyName",\n    "values": [\n      "Tech Corp",\n      "Tech Corp"\n    ]\n  }\n]',
		displayOptions: {
			show: showOnlyForImportFromCsv,
		},
		description:
			'Array of prospect data columns. Each column has a "name" (field name) and "values" (array of values for each prospect row). Common fields: profileUrl (required), firstName, lastName, jobTitle, companyName, email, phoneNumber, location, industry, connectionDegree. Each values array should have the same length (number of prospects)',
		routing: {
			send: {
				type: 'body',
				property: 'prospectData',
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
			show: showOnlyForImportFromCsv,
		},
		options: [
			{
				displayName: "Don't Add If In Another LinkedIn Account For My User",
				name: 'dontAddIfInAnotherLinkedinAccountForMyUser',
				type: 'boolean',
				default: true,
				description: 'Whether to skip prospects already in another LinkedIn account',
				routing: {
					send: {
						type: 'body',
						property: 'dontAddIfInAnotherLinkedinAccountForMyUser',
					},
				},
			},
		],
	},
];
