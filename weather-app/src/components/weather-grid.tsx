interface Props {
	children: JSX.Element[] | JSX.Element
}

const WeatherGrid = ({ children }: Props) => (
	<div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 ">{children}</div>
)

export { WeatherGrid }
