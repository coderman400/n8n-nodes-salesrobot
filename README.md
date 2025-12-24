# n8n-nodes-salesrobot

An n8n community node for integrating with SalesRobot API - a LinkedIn automation and outreach platform that helps you automate LinkedIn campaigns, manage prospects, and streamline your sales process.

## Features

- **Campaign Management**: Create, list, start, pause, and manage LinkedIn campaigns
- **Prospect Management**: Import prospects from CSV, Sales Navigator, and other sources
- **AI Personalization**: Create AI variables, voice clones, and video avatars for personalized outreach
- **LinkedIn Integration**: Sync inbox, manage accounts, and automate LinkedIn activities
- **Settings Management**: Configure quotas, schedules, blacklists, and warmup settings
- **Sequence Automation**: Add and manage sequence steps for automated outreach

## Installation

### In n8n

1. Go to **Settings** → **Community Nodes**
2. Click **Install a community node**
3. Enter: `n8n-nodes-salesrobot`
4. Click **Install**

### Manual Installation

```bash
npm install n8n-nodes-salesrobot
```

## Authentication

### Getting Your API Key

1. Log in to your SalesRobot account
2. Navigate to **Settings** → **Admin Settings** → **API Key**
3. Generate your API key

### Setting Up Credentials in n8n

1. In your n8n workflow, add a **Salesrobot** node
2. Click on **Credentials** → **Create New Credential**
3. Select **Salesrobot API**
4. Enter your API key in the **API Key** field
5. Click **Save**

The API key will be sent as the `Authorization` header in all requests.

## Resources and Operations

### Campaign

Manage LinkedIn campaigns and prospects:

- **Create**: Create a new campaign
- **List**: Get a list of all campaigns (with filtering options)
- **Import Prospects**: Import prospects from LinkedIn Search
- **Import From CSV**: Import multiple prospects from CSV data
- **Add Sequence Steps**: Add sequence steps to a campaign
- **Update Configuration**: Update campaign settings and configuration
- **Start**: Start a campaign
- **Pause/Resume**: Pause or resume a campaign
- **Get Prospects**: Get list of prospects in a campaign
- **Delete Prospects**: Delete multiple prospects from a campaign
- **Get Prospect Status**: Get execution details for a specific prospect
- **Pause/Resume Prospect**: Pause or resume a specific prospect
- **Get Stats**: Get time-wise statistics for a campaign

### AI Personalization

Create personalized content for your outreach:

- **Create AI Variable**: Create or update an AI variable for use in campaign sequences
- **Get AI Variables**: Get list of AI variables for use in sequences
- **Create Smart Comment Variable**: Create a smart comment variable for post engagement sequences
- **Get Smart Comment Variables**: Get list of smart comment variables
- **Create Voice Clone**: Create a voice clone for AI voice personalization
- **Delete Voice Clone**: Delete an existing voice clone
- **Generate Test Voice Message**: Generate a test voice message to preview voice clone
- **Get Video Avatar**: Get video avatar for AI video personalization
- **Create Video Avatar**: Create a video avatar for AI video personalization
- **Generate Sample Video**: Generate a sample video with AI video personalization

### LinkedIn

Manage LinkedIn accounts and messages:

- **Get Accounts**: Get all connected LinkedIn accounts
- **Sync Inbox**: Synchronize LinkedIn inbox messages

### Settings

Configure account settings and quotas:

- **Update Quota**: Update daily quota and warm up settings for LinkedIn account
- **Update Schedule**: Update schedule settings including working hours and days
- **Delete Pending Invites**: Delete old pending connection invites
- **Update Blacklist**: Update blacklisted companies and profile URLs
- **Copy Blacklist From Account**: Copy blacklist settings from another LinkedIn account
- **Automatic Warmup**: Configure automatic connection acceptance and suggested connections

## Example Workflows

### 1. Create and Start a Campaign

```
1. Salesrobot Node (Campaign → Create)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Campaign Name: "Q4 Outreach Campaign"
   - Campaign Type: Advanced
   - Campaign Family: LinkedIn

2. Salesrobot Node (Campaign → Import Prospects)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Campaign UUID: {{ $json.campaignUuid }}
   - Search URL: [LinkedIn Sales Navigator search URL]
   - Search Type: Sales Navigator
   - Connection Levels: 2nd, 3rd

3. Salesrobot Node (Campaign → Add Sequence Steps)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Campaign UUID: {{ $json.campaignUuid }}
   - Sequence Steps: [JSON array with sequence steps]

4. Salesrobot Node (Campaign → Start)
   - Campaign UUID: {{ $json.campaignUuid }}
```

### 2. Import Prospects from CSV

```
1. Read Binary File Node (to read CSV file)

2. Salesrobot Node (Campaign → Import From CSV)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Campaign UUID: {{ $json.campaignUuid }}
   - CSV Data: {{ $binary.data }}
```

### 3. Create AI Variable and Use in Campaign

```
1. Salesrobot Node (AI Personalization → Create AI Variable)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Variable Name: "companyResearch"
   - Variable Description: "Research about the company"

2. Salesrobot Node (Campaign → Add Sequence Steps)
   - Campaign UUID: {{ $json.campaignUuid }}
   - Sequence Steps: [Include aiVariableName and aiVariableId in mail body]
```

### 4. Monitor Campaign Performance

```
1. Salesrobot Node (Campaign → Get Stats)
   - LinkedIn Account UUID: {{ $json.linkedinAccountUuid }}
   - Campaign UUID: {{ $json.campaignUuid }}

2. Function Node (to process and format statistics)

3. Email Node (to send daily report)
```

## API Documentation

For detailed API documentation, visit:

- **Postman Collection**: [SalesRobot API Documentation](https://solar-robot-476240.postman.co/workspace/salesrobot~11cc6376-ed3b-435e-926a-0a10deb24cd7/collection/10815846-ab263f3a-130f-4de2-a05f-b824b4877a20)

## Common Parameters

### LinkedIn Account UUID

Most operations require a `linkedinAccountUuid`. You can get this by:

1. Using the **LinkedIn → Get Accounts** operation
2. The UUID will be in the response

### Campaign UUID

Campaign operations require a `campaignUuid`. You can get this by:

1. Creating a new campaign (returns UUID)
2. Listing campaigns (UUID in response)

### Sequence Steps Format

When adding sequence steps, use this JSON format:

```json
[
	{
		"stepOrdinal": 1,
		"hoursDelay": 0,
		"sequenceStepType": "VIEW_PROFILE",
		"multiVariateMails": [
			{
				"body": "",
				"subject": "",
				"inMailVariant": false,
				"ordinal": 1
			}
		]
	},
	{
		"stepOrdinal": 2,
		"hoursDelay": 1,
		"sequenceStepType": "SEND_CONNECTION_REQUEST",
		"multiVariateMails": [
			{
				"body": "Hi {{firstName}}, I would love to connect with you!",
				"subject": "",
				"inMailVariant": false,
				"ordinal": 1
			}
		]
	}
]
```

**Available Sequence Step Types:**

- `VIEW_PROFILE`
- `SEND_CONNECTION_REQUEST`
- `SEND_CONNECTION_REQUEST_BROWSER`
- `SEND_CONNECTION_USING_EMAIL`
- `SEND_MESSAGE`
- `SEND_VOICE_MESSAGE`
- `SEND_VIDEO_MESSAGE`
- `FOLLOW`
- `ENDORSE`
- `LIKE_POST`
- `LIKE_AND_COMMENT`
- `SEND_MESSAGE_IN_MAIL`
- `SEND_EMAIL`
- `SEND_MESSAGE_USING_GROUP`
- `SEND_MESSAGE_USING_EVENT`

## Troubleshooting

### Authentication Errors

- Verify your API key is correct
- Ensure the API key hasn't expired
- Check that the API key has the necessary permissions

### Missing Parameters

- Most operations require a `linkedinAccountUuid`
- Campaign operations require a `campaignUuid`
- Ensure all required fields are filled in the node configuration

## Support

- **GitHub Issues**: [Report Issues](https://github.com/coderman400/n8n-nodes-salesrobot/issues)
- **SalesRobot Support**: Contact SalesRobot support for API-related questions at support@salesrobot.co
- **n8n Community**: [n8n Community Forum](https://community.n8n.io/)

## License

MIT

## Version

Current version: 0.1.0
