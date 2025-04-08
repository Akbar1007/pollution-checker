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
export interface IAqiInfo {
	min: number
	max: number
	status: string
	color: string
	icon: string
	descr: string
	caution: string
}
