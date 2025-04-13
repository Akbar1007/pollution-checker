'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/firebase'
import { feedbackSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection } from 'firebase/firestore'
import { AlertCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ContactPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [feedback, setFeedback] = useState<{
		type: 'success' | 'error'
		message: string
	} | null>(null)

	const form = useForm<z.infer<typeof feedbackSchema>>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: { email: '', message: '' },
	})

	const onSubmit = async (values: z.infer<typeof feedbackSchema>) => {
		setIsLoading(true)
		setFeedback(null)

		try {
			await addDoc(collection(db, 'feedback'), {
				email: values.email,
				message: values.message,
				createdAt: new Date().getTime(),
			})

			setFeedback({
				type: 'success',
				message: 'Your feedback has been sent successfully. Thank you!',
			})
			form.reset()
		} catch (error) {
			console.error('Error adding document:', error)
			setFeedback({
				type: 'error',
				message: 'There was a problem sending your feedback. Please try again.',
			})
		} finally {
			setIsLoading(false)
		}
	}

	if (feedback?.type === 'success') {
		setTimeout(() => {
			setFeedback(null)
		}, 4000)
	}

	return (
		<div className='mt-26 grid md:grid-cols-2 grid-cols-1 gap-2'>
			<div>
				<h1 className='text-3xl font-bold text-center'>
					We value your feedback!
				</h1>
				<p className='text-center text-gray-600 mb-4 dark:text-white'>
					Your thoughts and suggestions help us improve our app.
				</p>

				<div className='mt-5 max-w-md mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900'>
					<h1 className='text-2xl font-bold mb-4'>Send Feedback</h1>

					{feedback && (
						<Alert
							variant={feedback.type === 'success' ? 'default' : 'destructive'}
							className={`mb-4 ${
								feedback.type === 'success'
									? 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
									: ''
							}`}
						>
							{feedback.type === 'success' ? (
								<CheckCircle className='h-4 w-4' />
							) : (
								<AlertCircle className='h-4 w-4' />
							)}
							<AlertTitle>
								{feedback.type === 'success' ? 'Success' : 'Error'}
							</AlertTitle>
							<AlertDescription>{feedback.message}</AlertDescription>
						</Alert>
					)}

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Your email'
												type='email'
												disabled={isLoading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												placeholder='Your message'
												rows={5}
												disabled={isLoading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' disabled={isLoading} className='w-full'>
								{isLoading ? 'Sending...' : 'Send Feedback'}
							</Button>
						</form>
					</Form>
				</div>
			</div>
			<Image
				src='/imgs/send-feedback-animation.gif'
				alt='send-feedback'
				width={500}
				height={500}
				className='flex justify-center mt-3 w-110 h-90 object-cover rounded-lg shadow-md mb-4'
			/>
		</div>
	)
}
