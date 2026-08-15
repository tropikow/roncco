import { Request, Response, NextFunction } from "express"

import { AppError } from "@errors/*"

export const expressErrorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if(res.headersSent) {
    next(error)
    return
  }
  if(error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      error: {
        code: error.code,
        message: error.message,
        ...(error.details  && { details: error.details })
      }
    })
    return
  }
  console.error('[UNHANDLED ERROR]:', error)
  res.status(500).json({
    success: false,
    error: { message: 'Internal Server Error' }
  })
}