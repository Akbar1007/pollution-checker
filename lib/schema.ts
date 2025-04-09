import { z } from 'zod'

export const feedbackSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	message: z
		.string()
		.min(5, 'Message must be at least 5 characters')
		.max(500, 'Message cannot exceed 500 characters'),
})
