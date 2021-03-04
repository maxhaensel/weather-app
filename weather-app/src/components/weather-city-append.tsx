import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createWeather } from '../graphql/mutations'
import { CreateWeatherInput } from '../API'

interface Props {
	setData: React.Dispatch<React.SetStateAction<CreateWeatherInput[]>>
}

const WeatherCityAppend = ({ setData }: Props) => {
	const [showModal, setShowModal] = React.useState(false)
	const [city, setCity] = React.useState('')

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
		setShowModal(!showModal)
	}

	function handleChance(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault()
		setCity(event.target.value)
	}

	return (
		<div className="bg-gray-100 border-2 border-gray-400 border-dashed justify-center w-full h-full flex items-center justify-center">
			<button
				className="text-xl "
				type="button"
				style={{ transition: 'all .15s ease' }}
				onClick={() => setShowModal(true)}
			>
				+ Ort hinzufügen
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
						<div className="relative my-6 mx-auto max-w-4xl w-1/2">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
									<h3 className="text-3xl font-semibold">Stadt auswählen</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										×
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<form className="flex flex-col">
										<input
											className="p-4 mb-8 border-2 border-solid border-gray-300 rounded-b"
											type="text"
											placeholder="Ort hinzufügen"
											value={city}
											onChange={handleChance}
										/>
										<div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
											<button
												className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
												type="button"
												style={{ transition: 'all .15s ease' }}
												onClick={() => setShowModal(false)}
											>
												Abbruch
											</button>
											<input
												className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
												type="submit"
												value="OK"
												onClick={onSubmit}
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</div>
	)
}

export { WeatherCityAppend }
