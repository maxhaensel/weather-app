/* Amplify Params - DO NOT EDIT
	
Amplify Params - DO NOT EDIT */
const fetch = require('node-fetch')
const AWS = require('aws-sdk')

const credentials = new AWS.SharedIniFileCredentials({ profile: 'amplify-admin' })
// const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-central-1', credentials })
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-central-1' })
const params = { TableName: 'Weather-p66r72zhlfdthbbkl7o33hksaa-productive' }

exports.handler = async (event) => {
	try {
		const data = await documentClient.scan(params).promise()
		data.Items.forEach((city) => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=b73b624979a3ffaa51d0475f04bccd85&units=metric`
			fetch(encodeURI(url))
				.then((res) => res.text())
				.then(JSON.parse)
				.then(async (body) => {
					city.cloudStatus = body.weather[0].main
					city.rainProbability = body.main.humidity
					city.updatedAt = new Date().toISOString()
					city.lastUpdate = new Date().toISOString()
					city.temperature = `${body.main.temp_min}°C/${body.main.temp_max}°C`
					var params = {
						TableName: 'Weather-p66r72zhlfdthbbkl7o33hksaa-productive',
						Item: city,
					}
					await documentClient.put(params).promise().catch(console.error)
				})
				.catch(console.err)
		})
	} catch (error) {
		console.log(error)
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify('Hello from Lambda!'),
	}
	return response
}
