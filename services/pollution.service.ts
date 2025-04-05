import { PollutionData } from '@/types'

const token = process.env.NEXT_PUBLIC_API_TOKEN

export async function fetchPollutionData(
	city: string
): Promise<PollutionData | null> {
	try {
		const response = await fetch(
			`https://api.waqi.info/feed/${city}/?token=${token}`
		)
		const json = await response.json()

		if (json.status === 'ok') {
			return json.data as PollutionData
		} else {
			console.warn('API returned error status:', json)
			return null
		}
	} catch (error) {
		console.error('Error fetching pollution data:', error)
		return null
	}
}
