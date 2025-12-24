import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateVideoAvatar = {
	operation: ['createVideoAvatar'],
	resource: ['aiPersonalization'],
};

export const createVideoAvatarDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn Account UUID',
		name: 'linkedinAccountUuid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateVideoAvatar,
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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForCreateVideoAvatar,
		},
		description: 'The name of the video avatar',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: showOnlyForCreateVideoAvatar,
		},
		description: 'Description of the video avatar',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		options: [
			{
				name: 'Male',
				value: 'male',
			},
			{
				name: 'Female',
				value: 'female',
			},
		],
		required: true,
		default: 'male',
		displayOptions: {
			show: showOnlyForCreateVideoAvatar,
		},
		description: 'The gender of the video avatar',
		routing: {
			send: {
				type: 'body',
				property: 'gender',
			},
		},
	},
	{
		displayName: 'Video Data (Base64)',
		name: 'video',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: showOnlyForCreateVideoAvatar,
		},
		description: 'Base64 encoded video data or binary data from previous node',
		placeholder: 'Base64 encoded video file data',
		routing: {
			send: {
				type: 'body',
				property: 'video',
			},
		},
	},
];
