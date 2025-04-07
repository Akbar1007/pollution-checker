export interface ChildProps {
	children: React.ReactNode
}

export interface PollutionData {
	aqi: number
	city: { name: string }
	dominentpol: string
}

export interface IStatus {
	color: string
	label: string
}
