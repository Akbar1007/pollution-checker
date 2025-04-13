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
		color: '#C4A825',
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

export const pollutants = [
	{
		header: 'PM2.5 - Fine Particulate Matter',
		content:
			'Tiny particles less than 2.5 micrometers that can enter the bloodstream through the lungs, increasing the risk of heart and respiratory diseases.',
		className: 'bg-rose-100 dark:bg-rose-900',
	},
	{
		header: 'PM10 - Coarse Particulate Matter',
		content:
			'Particles between 2.5 and 10 micrometers that can irritate the eyes, nose, and throat and aggravate asthma and bronchitis.',
		color: 'amber',
		className: 'bg-amber-100 dark:bg-amber-900',
	},
	{
		header: 'NO2 - Nitrogen Dioxide',
		content:
			'A reddish-brown gas emitted from vehicles and industrial processes that can damage lung tissue and reduce immunity to respiratory infections.',
		color: 'red',
		className: 'bg-red-100 dark:bg-red-900',
	},
	{
		header: 'SO2 - Sulfur Dioxide',
		content:
			'A toxic gas produced by burning fossil fuels, especially coal; it can lead to respiratory problems and contribute to acid rain.',
		color: 'yellow',
		className: 'bg-yellow-100 dark:bg-yellow-900',
	},
	{
		header: 'CO - Carbon Monoxide',
		content:
			'A colorless, odorless gas from incomplete combustion of carbon-based fuels; it reduces oxygen delivery in the body and can be fatal in high concentrations.',
		color: 'slate',
		className: 'bg-slate-100 dark:bg-slate-800',
	},
	{
		header: 'O₃ - Ground-Level Ozone',
		content:
			'Formed by a reaction between sunlight and pollutants like NOx and VOCs; it can cause chest pain, coughing, and throat irritation.',
		color: 'indigo',
		className: 'bg-indigo-100 dark:bg-indigo-900',
	},
	{
		header: 'Pb - Lead',
		content:
			'A heavy metal that can accumulate in the body and damage the nervous system, especially in children. Emitted from metal processing and old paints.',
		color: 'zinc',
		className: 'bg-zinc-100 dark:bg-zinc-800',
	},
	{
		header: 'VOCs - Volatile Organic Compounds',
		content:
			'Organic chemicals that easily become vapors or gases. Found in paints, cleaners, and vehicle emissions, contributing to smog and ozone formation.',
		color: 'orange',
		className: 'bg-orange-100 dark:bg-orange-900',
	},
	{
		header: 'NH₃ - Ammonia',
		content:
			'Released mainly by agricultural activities like livestock waste and fertilizers. It contributes to the formation of secondary particulate matter.',
		color: 'lime',
		className: 'bg-lime-100 dark:bg-lime-900',
	},
	{
		header: 'Benzene',
		content:
			'A known carcinogen found in vehicle exhaust and cigarette smoke. Long-term exposure can affect bone marrow and the immune system.',
		color: 'violet',
		className: 'bg-violet-100 dark:bg-violet-900',
	},
]
