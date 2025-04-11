import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Atom, Biohazard } from 'lucide-react'

const PollutantsPage = () => {
	// TODO: map pollutants data from constants
	return (
		<div className='p-4 flex flex-col items-center mt-28'>
			<h1 className='text-3xl font-bold mb-4 text-center'>
				Know more about pollutants <Biohazard className='inline-block' />
			</h1>
			<Card>
				<CardHeader className='justify-center'>
					<CardTitle>
						<p className='text-2xl'>
							PM 2.5 - Particulate Matter <Atom className='inline-block' />
						</p>
					</CardTitle>
				</CardHeader>
				<CardContent>
					Tiny particles that can penetrate deep into the lungs, causing various
					health issues.
				</CardContent>
			</Card>
		</div>
	)
}

export default PollutantsPage
