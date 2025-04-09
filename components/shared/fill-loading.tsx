import { LucideLoaderCircle } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

const FillLoading = () => {
	return (
		<Skeleton className='absolute inset-0 flex justify-center items-center w-full h-full opacity-20 z-50'>
			<LucideLoaderCircle className='animate-spin w-6 h-6' />
		</Skeleton>
	)
}

export default FillLoading
