import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { pollutants } from '@/constants'
import { Atom, Biohazard } from 'lucide-react'

const PollutantsPage = () => {
	const colorMap: Record<string, string> = {
		rose: 'bg-rose-100 dark:bg-rose-900',
		amber: 'bg-amber-100 dark:bg-amber-900',
		red: 'bg-red-100 dark:bg-red-900',
		yellow: 'bg-yellow-100 dark:bg-yellow-900',
		slate: 'bg-slate-100 dark:bg-slate-800',
		indigo: 'bg-indigo-100 dark:bg-indigo-900',
		zinc: 'bg-zinc-100 dark:bg-zinc-800',
		orange: 'bg-orange-100 dark:bg-orange-900',
		lime: 'bg-lime-100 dark:bg-lime-900',
		violet: 'bg-violet-100 dark:bg-violet-900',
	}

	return (
		<div className='p-4 flex flex-col items-center mt-28'>
			<h1 className='text-3xl font-bold mb-4 text-center'>
				Know more about pollutants <Biohazard className='inline-block' />
			</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
				{pollutants.map((pollutant, index) => (
					<Card key={index} className={colorMap[pollutant.color]}>
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
