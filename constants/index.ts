import {
	BadgeAlert,
	CircleAlert,
	OctagonAlert,
	ShieldCheck,
	Skull,
	TriangleAlert,
} from 'lucide-react'

export const navLinks = [
	{
		name: 'Home',
		route: '/',
	},
	{
		name: 'Pollutants',
		route: '/pollutants',
	},
	{
		name: 'Send Feedback',
		route: '/send-feedback',
	},
]

export const aqi_info = [
	{
		min: 0,
		max: 50,
		status: 'Good',
		color: '#009966',
		icon: ShieldCheck,
		descr:
			'Air quality is considered satisfactory, and air pollution poses little or no risk.',
		caution:
			'The air quality is absolutely safe and poses no health risks for any age group. Enjoy outdoor activities freely.',
	},
	{
		min: 51,
		max: 100,
		status: 'Moderate',
		color: '#E6C52E',
		icon: CircleAlert,
		descr:
			'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
		caution:
			'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
	},
	{
		min: 101,
		max: 150,
		status: 'Unhealthy for Sensitive Groups',
		color: '#FF9933',
		icon: TriangleAlert,
		descr:
			'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
		caution:
			'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
	},
	{
		min: 151,
		max: 200,
		status: 'Unhealthy',
		color: '#CC0033',
		icon: BadgeAlert,
		descr:
			'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
		caution:
			'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.',
	},
	{
		min: 201,
		max: 300,
		status: 'Very Unhealthy',
		color: '#660099',
		icon: OctagonAlert,
		descr:
			'Health warnings of emergency conditions. The entire population is more likely to be affected.',
		caution:
			'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
	},
	{
		min: 301,
		max: Infinity,
		status: 'Hazardous',
		color: '#7E0023',
		icon: Skull,
		descr: 'Health alert: everyone may experience more serious health effects.',
		caution: 'Everyone should avoid all outdoor exertion.',
	},
]

export const pollutants = []
