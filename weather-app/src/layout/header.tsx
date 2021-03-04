const Header = () => (
	<header className="App-header flex bg-blue-900 items-center pl-4">
		<svg
			className="w-16 h-16 text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
			/>
		</svg>
		<h1 className="text-white">Wetter Online</h1>
	</header>
)

export { Header }
