import type { INodeProperties } from 'n8n-workflow';
import { createAiVariableDescription } from './createAiVariable';
import { getAiVariablesDescription } from './getAiVariables';
import { createSmartCommentVariableDescription } from './createSmartCommentVariable';
import { getSmartCommentVariablesDescription } from './getSmartCommentVariables';
import { createVoiceCloneDescription } from './createVoiceClone';
import { deleteVoiceCloneDescription } from './deleteVoiceClone';
import { generateTestVoiceMessageDescription } from './generateTestVoiceMessage';
import { getVideoAvatarDescription } from './getVideoAvatar';
import { createVideoAvatarDescription } from './createVideoAvatar';
import { generateSampleVideoDescription } from './generateSampleVideo';

const showOnlyForAiPersonalization = {
	resource: ['aiPersonalization'],
};

export const aiPersonalizationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAiPersonalization,
		},
		options: [
			{
				name: 'Create AI Variable',
				value: 'createAiVariable',
				action: 'Create an AI variable',
				description: 'Create or update an AI variable for use in campaign sequences',
				routing: {
					request: {
						method: 'POST',
						url: '/sequence/add_new_ai_variable',
					},
				},
			},
			{
				name: 'Create Smart Comment Variable',
				value: 'createSmartCommentVariable',
				action: 'Create a smart comment variable',
				description: 'Create or update a smart comment variable for post engagement sequences',
				routing: {
					request: {
						method: 'POST',
						url: '/sequence/add_new_smart_comment_variable',
					},
				},
			},
			{
				name: 'Create Video Avatar',
				value: 'createVideoAvatar',
				action: 'Create video avatar',
				description: 'Create a video avatar for AI video personalization',
				routing: {
					request: {
						method: 'POST',
						url: '/ai-video-personalization/create-video-avatar',
					},
				},
			},
			{
				name: 'Create Voice Clone',
				value: 'createVoiceClone',
				action: 'Create voice clone',
				description: 'Create a voice clone for AI voice personalization',
				routing: {
					request: {
						method: 'POST',
						url: '/ai-voice-personalization/create-voice-clone',
					},
				},
			},
			{
				name: 'Delete Voice Clone',
				value: 'deleteVoiceClone',
				action: 'Delete voice clone',
				description: 'Delete an existing voice clone',
				routing: {
					request: {
						method: 'DELETE',
						url: '/ai-voice-personalization/delete-voice-clone',
					},
				},
			},
			{
				name: 'Generate Sample Video',
				value: 'generateSampleVideo',
				action: 'Generate sample video',
				description: 'Generate a sample video with AI video personalization',
				routing: {
					request: {
						method: 'POST',
						url: '/ai-video-personalization/generate-video-sample',
					},
				},
			},
			{
				name: 'Generate Test Voice Message',
				value: 'generateTestVoiceMessage',
				action: 'Generate test voice message',
				description: 'Generate a test voice message to preview voice clone',
				routing: {
					request: {
						method: 'POST',
						url: '/ai-voice-personalization/generate-test-voice-message',
					},
				},
			},
			{
				name: 'Get AI Variables',
				value: 'getAiVariables',
				action: 'Get AI variables',
				description: 'Get list of AI variables for use in sequences',
				routing: {
					request: {
						method: 'GET',
						url: '/sequence/ai_variable',
					},
				},
			},
			{
				name: 'Get Smart Comment Variables',
				value: 'getSmartCommentVariables',
				action: 'Get smart comment variables',
				description: 'Get list of smart comment variables for post engagement',
				routing: {
					request: {
						method: 'GET',
						url: '/sequence/ai_variable',
					},
				},
			},
			{
				name: 'Get Video Avatar',
				value: 'getVideoAvatar',
				action: 'Get video avatar',
				description: 'Get video avatar for AI video personalization',
				routing: {
					request: {
						method: 'GET',
						url: '/ai-video-personalization/get-video-avatar',
					},
				},
			},
		],
		default: 'getAiVariables',
	},
	...createAiVariableDescription,
	...getAiVariablesDescription,
	...createSmartCommentVariableDescription,
	...getSmartCommentVariablesDescription,
	...createVoiceCloneDescription,
	...deleteVoiceCloneDescription,
	...generateTestVoiceMessageDescription,
	...getVideoAvatarDescription,
	...createVideoAvatarDescription,
	...generateSampleVideoDescription,
];
