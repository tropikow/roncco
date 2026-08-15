import z from 'zod'

import { BadRequest } from '@errors/*'
import { ZodObject } from 'zod'

export const parseOrThrow = <S extends ZodObject>(schema: S, data: unknown): z.infer<S> => {
  const result = schema.safeParse(data)
  if(!result.success) {
    throw new BadRequest(result.error.message)
  }
  return result.data
}