import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { pollutants } from '@/constants'
import { Atom, Biohazard } from 'lucide-react'

const PollutantsPage = () => {
	return (
		<div className='p-4 flex flex-col items-center mt-28'>
			<h1 className='text-3xl font-bold mb-4 text-center'>
				Know more about pollutants <Biohazard className='inline-block' />
			</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
				{pollutants.map((pollutant, index) => (
					<Card key={index} className={pollutant.className}>
						<CardHeader className='justify-center'>
							<CardTitle className='text-2xl'>
								{pollutant.header} <Atom className='inline-block' />
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{pollutant.content}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default PollutantsPage
