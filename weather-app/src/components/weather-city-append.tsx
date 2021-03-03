import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createWeather } from '../graphql/mutations'
import { CreateWeatherInput } from '../API'

interface Props {
	setData: React.Dispatch<React.SetStateAction<CreateWeatherInput[]>>
}

const WeatherCityAppend = ({ setData }: Props) => {
	const [city, setCity] = React.useState('')

	function handleChance(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault()
		setCity(event.target.value)
	}

	function onSubmit(event: React.FormEvent<HTMLElement>) {
		event.preventDefault()

		const input = {
			city,
			lastUpdate: 'Montag, 01.10.18',
			temperature: '5°C/15°C',
			cloudStatus: 'Gewitter',
			rainProbability: 0,
		}

		setData((data) => [...data, input])
		setCity('')
		API.graphql(graphqlOperation(createWeather, { input }))
	}

	return (
		<div className="bg-gray-200 border-2 border-gray-400 border-dashed">
			<form>
				<input type="text" placeholder="Ort hinzufügen" value={city} onChange={handleChance} />
				<input type="submit" value="OK" onClick={onSubmit} />
			</form>
		</div>
	)
}

export { WeatherCityAppend }
