import z from 'zod'

export const nonEmptyString = z.string().min(1)
export const nonNegativeNumber = z.number().nonnegative()
export const nonInvalidEmail = z.email()

export const databaseSchema = z.object({
  user: nonEmptyString,
  host: nonEmptyString,
  database: nonEmptyString,
  password: nonEmptyString,
  port: nonNegativeNumber
})