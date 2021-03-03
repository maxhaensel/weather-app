import React from 'react'
import './App.css'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { CreateWeatherInput } from './API'
import { listWeathers } from './graphql/queries'

import { Header } from './layout'
import { WeatherGrid, WeatherCard, WeatherCityAppend } from './components'

// const data = [
// 	{
// 		city: 'Darmstadt',
// 		lastUpdate: 'string',
// 		temperature: 'string',
// 		cloudStatus: 'string',
// 		rainProbability: 10,
// 	},
// 	{
// 		city: 'München',
// 		lastUpdate: 'string',
// 		temperature: 'string',
// 		cloudStatus: 'string',
// 		rainProbability: 10,
// 	},
// 	{ city: 'Berlin', lastUpdate: 'string', temperature: 'string', cloudStatus: 'string', rainProbability: 10 },
// ]
Amplify.configure(awsconfig)
function App() {
	const [data, setData] = React.useState<CreateWeatherInput[]>([])

	React.useEffect(() => {
		async function fetchMyAPI() {
			const result: any = await API.graphql(graphqlOperation(listWeathers))
			setData(result.data.listWeathers.items)
		}
		fetchMyAPI()
	}, [setData])

	// React.useEffect(() => {
	// 	const interval = setInterval(async () => {
	// 		const datas: any = await API.graphql(graphqlOperation(listWeathers))
	// 		setData(datas.data.listWeathers.items)
	// 		console.log(datas.data.listWeathers.items)
	// 	}, 3000)
	// 	return () => clearInterval(interval)
	// }, [])

	return (
		<div className="App">
			<Header></Header>
			<WeatherGrid>
				<>
					{data.map((props) => (
						<WeatherCard key={props.city} {...props} />
					))}
					<WeatherCityAppend {...{ setData }} />
				</>
			</WeatherGrid>
		</div>
	)
}

export default App
