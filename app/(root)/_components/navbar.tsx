'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mobile from './sheet-mobile'

function Navbar() {
	const pathName = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sd border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				<Link href={'/'}>
					<h1 className='text-4xl'>
						<b>Pollution Checker</b>
					</h1>
				</Link>
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(link => (
						<Link
							key={link.route}
							href={link.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sd transition-colors',
								pathName === link.route && 'bg-blue-400/25'
							)}
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className='flex items-center gap-1'>
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navbar
