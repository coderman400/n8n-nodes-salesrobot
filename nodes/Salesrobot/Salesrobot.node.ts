import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { campaignDescription } from './resources/campaign';
import { linkedinDescription } from './resources/linkedin';
import { settingsDescription } from './resources/settings';
import { aiPersonalizationDescription } from './resources/aiPersonalization';

export class Salesrobot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Salesrobot',
		name: 'salesrobot',
		icon: {
			light: 'file:../../icons/salesrobot.svg',
			dark: 'file:../../icons/salesrobot.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Salesrobot API for LinkedIn automation and outreach',
		defaults: {
			name: 'Salesrobot',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'salesrobotApi',
				required: true,
				testedBy: 'salesrobot',
			},
		],
		requestDefaults: {
			baseURL: 'https://api.boomtechinc.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'AI Personalization',
						value: 'aiPersonalization',
					},
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'LinkedIn',
						value: 'linkedin',
					},
					{
						name: 'Setting',
						value: 'settings',
					},
				],
				default: 'campaign',
			},
			...campaignDescription,
			...aiPersonalizationDescription,
			...linkedinDescription,
			...settingsDescription,
		],
	};
}
