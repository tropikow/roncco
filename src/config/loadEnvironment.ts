import z, { ZodError } from 'zod'

import { nonEmptyString, databaseSchema } from '@helpers/'

const environmentSchema = z.object({
  yuju: nonEmptyString,
  database: databaseSchema
})

export const config = {
  yuju: process.env.YUJU,
  database: {
    user: process.env.POSTGRESQL_USER,
    host: process.env.POSTGRESQL_HOST,
    database: process.env.POSTGRESQL_DATABASE_NAME,
    password: process.env.POSTGRESQL_DATABASE_PASSWORD,
    port: Number(process.env.POSTGRESQL_DATABASE_PORT)
  }
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