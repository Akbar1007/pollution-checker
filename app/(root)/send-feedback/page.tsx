'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
	return (
		<div className='mt-30 max-w-md mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900'>
			<h1 className='text-2xl font-bold mb-4'>Send Feedback</h1>
			<form className='space-y-4'>
				<Input name='email' type='email' placeholder='Your email' required />
				<Textarea name='message' placeholder='Your message' rows={5} required />
				<Button type='submit'>Send</Button>
			</form>
		</div>
	)
}
