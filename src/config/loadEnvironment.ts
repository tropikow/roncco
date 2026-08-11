import z, { ZodError } from 'zod'

import { nonEmptyString } from '@helpers/'

const environmentSchema = z.object({
  yuju: nonEmptyString  
})

const config = {
  yuju: process.env.YUJU
}

export const loadEnvironments = () => {
  try {
    environmentSchema.parse(config)
  } catch (error) {
    if(error instanceof ZodError) {
      throw error.issues
    } else {
      console.log('[zod error]:', error)
    }
  }
}