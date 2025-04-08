export interface ChildProps {
	children: React.ReactNode
}

export interface PollutionData {
	aqi: number
	city: { name: string }
	dominentpol: string
	status: 'ok'
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
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	descr: string
	caution: string
}

export interface PollutionError {
	status: 'error'
	message: string
}

export type PollutionResponse = PollutionData | PollutionError
