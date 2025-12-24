import type { IAuthenticateGeneric, Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class SalesrobotApi implements ICredentialType {
	name = 'salesrobotApi';

	displayName = 'Salesrobot API';

	testedBy = 'salesrobot';

	icon: Icon = { light: 'file:../icons/salesrobot.svg', dark: 'file:../icons/salesrobot.dark.svg' };

	documentationUrl =
		'https://solar-robot-476240.postman.co/workspace/salesrobot~11cc6376-ed3b-435e-926a-0a10deb24cd7/collection/10815846-ab263f3a-130f-4de2-a05f-b824b4877a20';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Salesrobot API key',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.apiKey}}',
			},
		},
	};
}
