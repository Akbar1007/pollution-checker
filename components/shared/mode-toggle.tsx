'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const ModeToggle = () => {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMount(true)
	}, [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			size={'icon'}
			aria-label='sun'
			variant={'ghost'}
			onClick={() => setTheme('light')}
		>
			<Sun />
		</Button>
	) : (
		<Button
			size={'icon'}
			aria-label='moon'
			variant={'ghost'}
			onClick={() => setTheme('dark')}
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
