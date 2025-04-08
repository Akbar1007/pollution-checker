'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { aqi_info } from '@/constants'
import { fetchPollutionData } from '@/services/pollution.service'
import { PollutionData } from '@/types'
import { useState } from 'react'

export default function HomePage() {
	const [city, setCity] = useState('')
	const [loading, setLoading] = useState(false)
	const [info, setInfo] = useState<PollutionData | null>(null)

	const handleCheck = async () => {
		setLoading(true)
		const data = await fetchPollutionData(city)
		setInfo(data)
		setLoading(false)
	}

	// const getAirQualityStatus = (aqi: number) => {
	// 	if (aqi >= 0 && aqi <= 50) return { status: 'Good', color: '009966' }
	// 	if (aqi >= 51 && aqi <= 100) return { status: 'Moderate', color: '#FFDE33' }
	// 	if (aqi >= 101 && aqi <= 150)
	// 		return { status: 'Unhealthy for Sensitive Groups', color: '#FF9933' }
	// 	if (aqi >= 151 && aqi <= 200)
	// 		return { status: 'Unhealthy', color: '#CC0033' }
	// 	if (aqi >= 201 && aqi <= 300)
	// 		return { status: 'Very Unhealthy', color: '#660099' }
	// 	if (aqi >= 300) return { status: 'Hazardous', color: '#7E0023' }
	// }

	// const logData = () => {
	// 	console.log(info)
	// 	// console.log(getAirQualityStatus(info.aqi))
	// }
	// logData()

	const getAirQualityStatus = (aqi: number) => {
		return aqi_info.find(info => aqi >= info.min && aqi <= info.max)
	}

	return (
		<div className='min-h-screen p-4 flex flex-col items-center mt-28'>
			{/* <div className=''></div> */}
			<h1 className='text-3xl font-bold mb-4 text-center'>
				City Pollution Checker
			</h1>
			<div className='flex gap-2 mb-6 w-full max-w-md'>
				<Input
					placeholder='Enter a city name'
					value={city}
					onChange={e => setCity(e.target.value)}
				/>
				<Button onClick={handleCheck} disabled={!city || loading}>
					{loading ? 'Loading...' : 'Check'}
				</Button>
			</div>

			{loading && (
				<div className='w-full max-w-md'>
					<Skeleton className='h-40 rounded-xl w-full' />
				</div>
			)}

			{info && !loading && (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Card className='w-full max-w-md'>
						<CardContent className='p-6 space-y-2'>
							<h2 className='text-xl font-semibold'>
								<strong>Place: </strong>
								{info.city.name.split(' ')[0]}
							</h2>
							<Separator />
							<p>
								<strong>Air Quality Index (AQI):</strong> {info.aqi}
							</p>
							<p>
								<strong>Main Pollutant:</strong> {info.dominentpol}
							</p>
							<p
								className={`text-sm font-semibold text-${
									getAirQualityStatus(info.aqi)?.color
								}`}
							>
								<strong>Status: </strong>
								{getAirQualityStatus(info.aqi)?.status}
								{getAirQualityStatus(info.aqi)?.icon}
							</p>
						</CardContent>
					</Card>
					<Card className='w-full max-w-md'>
						<CardContent className='p-6 space-y-2'>
							<h2 className='text-xl font-semibold'>
								<strong>Suggestion: </strong>
								{/* suggestion */}
							</h2>
							<Separator />
							<p>
								{getAirQualityStatus(info.aqi)?.descr}
								{getAirQualityStatus(info.aqi)?.caution}
							</p>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	)
}
