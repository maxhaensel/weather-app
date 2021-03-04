import React from 'react'
import './App.css'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'

import { CreateWeatherInput } from './API'
import { listWeathers } from './graphql/queries'

import { Header } from './layout'
import { WeatherGrid, WeatherCard, WeatherCityAppend } from './components'

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

	React.useEffect(() => {
		const interval = setInterval(async () => {
			const datas: any = await API.graphql(graphqlOperation(listWeathers))
			setData(datas.data.listWeathers.items)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="App">
			<Header></Header>
			<div className="bg-gray-200 p-16">
				<h1 className="text-2xl text-gray-500 mb-12">Dashboard</h1>
				<WeatherGrid>
					<>
						{data.map((props) => (
							<WeatherCard key={props.city} {...props} />
						))}
						<WeatherCityAppend {...{ setData }} />
					</>
				</WeatherGrid>
			</div>
		</div>
	)
}

export default App
