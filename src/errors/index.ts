enum ErrorCode {
  'BAD_REQUEST' = 400,
  'UNAUTHORIZED' = 401,
  'CONFLICT_ERROR' = 409,
  'INTERNAL_ERROR' = 500
}

interface ErrorDetails {
  [key: string]: unknown
}

export class AppError extends Error {
  public readonly statusCode: number
  public readonly code: ErrorCode
  public readonly details?: ErrorDetails
  constructor(statusCode: number, code: ErrorCode, message: string, details?: ErrorDetails) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    this.details = details
  }
}

export class BadRequest extends AppError {
  constructor(message = 'Bad request') {
    super(ErrorCode['BAD_REQUEST'], ErrorCode['BAD_REQUEST'],message)
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation Error', details?: ErrorDetails) {
    super(ErrorCode['BAD_REQUEST'], ErrorCode['BAD_REQUEST'],message, details)
  }
}

