'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchPollutionData } from '@/services/pollution.service'
import { PollutionData } from '@/types'
import { Separator } from '@radix-ui/react-separator'
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

	return (
		<div className='min-h-screen p-4 flex flex-col items-center mt-28'>
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
				<Card className='w-full max-w-md'>
					<CardContent className='p-6 space-y-2'>
						<h2 className='text-xl font-semibold'>
							<strong>Place: </strong>
							{info.city.name}
						</h2>
						<Separator />
						<p>
							<strong>Air Quality Index (AQI):</strong> {info.aqi}
						</p>
						<p>
							<strong>Main Pollutant:</strong> {info.dominentpol}
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	)
}
