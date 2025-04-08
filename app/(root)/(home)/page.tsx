'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { aqi_info } from '@/constants'
import { fetchPollutionData } from '@/services/pollution.service'
import { PollutionData } from '@/types'
import { MapPin } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
	const [city, setCity] = useState('')
	const [loading, setLoading] = useState(false)
	const [info, setInfo] = useState<PollutionData | null>(null)
	const [error, setError] = useState<string | null>(null)
	const h6 = 'text-2xl semi-bold'

	const handleCheck = async () => {
		setLoading(true)
		setInfo(null)
		setError(null)

		try {
			const response = await fetchPollutionData(city)
			console.log(response)

			if ('status' in response && response.status === 'error') {
				setError(response.message)
			} else {
				setInfo(response as PollutionData)
			}
		} catch (error) {
			console.error('Fetch failed:', error)
			setError('Something went wrong. Please try again later.')
		}
		setLoading(false)
	}

	const getAirQualityStatus = (aqi: number) => {
		return aqi_info.find(info => aqi >= info.min && aqi <= info.max)
	}

	const status = info ? getAirQualityStatus(info.aqi) : null
	const Icon = status?.icon

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
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl'>
					<Card
						className='w-full max-w-md dark:text-white rounded-xl opacity-90 z-0'
						style={{ backgroundColor: getAirQualityStatus(info.aqi)?.color }}
					>
						<CardContent className='p-6 space-y-2'>
							<p className={h6}>
								Place: {info.city.name.split(' ')[0]}
								<MapPin className='inline-block pb-1' />
							</p>
							<Separator className='dark:bg-black' />
							<p className={h6}>Air Quality Index (AQI): {info.aqi}</p>
							<p className={h6}>Main Pollutant: {info.dominentpol}</p>
							<p className={h6}>
								Status: {getAirQualityStatus(info.aqi)?.status}{' '}
								{Icon && <Icon className='w-5 h-5 inline-block' />}
							</p>
						</CardContent>
					</Card>
					<Card className='rounded-xl flex flex-col justify-between dark:text-white bg-blue-400/25'>
						<CardContent className='p-6 space-y-2'>
							<p>
								<strong>Description of the situation: </strong>
								{getAirQualityStatus(info.aqi)?.descr}
							</p>
							<Separator className='light:color-black dark:bg-black' />
							<p>
								<strong>Caution: </strong>
								{getAirQualityStatus(info.aqi)?.caution}
							</p>
						</CardContent>
					</Card>
				</div>
			)}

			{!loading && !info && city === '' ? (
				<div className='text-3xl'>Please enter a city name.</div>
			) : null}

			{error && (
				<div className='text-red-500 text-center mt-4'>Error: {error}</div>
			)}
		</div>
	)
}
