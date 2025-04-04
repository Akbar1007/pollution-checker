import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
			<div className='flex justify-center items-center'>
				<Footer />
			</div>
		</main>
	)
}

export default Layout
