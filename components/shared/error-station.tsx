import { Antenna } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'

const ErrorStation = ({ msg }: { msg: string }) => {
	return (
		<Card className='w-full max-w-md dark:text-white'>
			<CardContent className='p-6 space-y-2'>
				<p className='inline-block text-3xl'>{msg}</p>{' '}
				<Antenna className='inline-block' />
				<Separator className='dark:bg-white' />
				<p className='text-2xl'>The city name is wrong.</p>
				<p className='text-2xl'>Or there is no station in this city yet.</p>
			</CardContent>
		</Card>
	)
}

export default ErrorStation
