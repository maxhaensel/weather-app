import { CityData } from '../types/city-data'

import { ReactComponent as Sun } from '../icons/001-sun.svg'
import { ReactComponent as Cloud } from '../icons/002-cloud.svg'
import { ReactComponent as Cloudy } from '../icons/003-cloudy.svg'
import { ReactComponent as Rain } from '../icons/004-rain.svg'
import { ReactComponent as Thunderstorm } from '../icons/005-thunderstorm.svg'

const Icons = { Sun, Cloud, Cloudy, Rain, Thunderstorm }

interface Props extends CityData {}

const ReturnLogo = (item: string): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
	switch (item) {
		case 'Clear':
			return Icons['Sun']
		case 'Clouds':
			return Icons['Cloud']
		case 'Rain':
			return Icons['Rain']
		case 'Mist':
			return Icons['Thunderstorm']
		default:
			return Icons['Sun']
	}
}

const WeatherCard = ({ city, lastUpdate, temperature, cloudStatus, rainProbability }: Props) => {
	const Logo = ReturnLogo(cloudStatus)
	return (
		<div className="bg-gray-100 pt-4 px-4 pb-12  ">
			<h1 className="text-center w-full text-2xl py-4">{city}</h1>
			<div className="grid grid-flow-row grid-cols-2 items-center">
				<div>
					<Logo className="w-full h-full p-6" />
				</div>
				<div className="flex flex-col font-thin text-gray-600">
					<span className="underline pb-4 text-xl">{lastUpdate}</span>
					<span>{temperature}</span>
					<span>{cloudStatus}</span>
					<span>{rainProbability}% Regen</span>
				</div>
			</div>
		</div>
	)
}

export { WeatherCard }
