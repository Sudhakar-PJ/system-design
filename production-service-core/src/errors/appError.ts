/**
 * Production-Grade Centralized Application Error Architecture
 * 
 * Location: src/errors/app-error.ts
 */

export abstract class AppError extends Error {
  public abstract readonly statusCode: number;
  public abstract readonly code: string;
  public readonly isOperational: boolean;
  public readonly timestamp: string;

  constructor(message: string, isOperational = true) {
    super(message);
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();

    // Restores correct prototype chain when extending built-in Error in ES5/ES6 target
    Object.setPrototypeOf(this, new.target.prototype);

    // Captures clean stack trace excluding constructor frame
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class BadRequestError extends AppError {
  public readonly statusCode = 400;
  public readonly code = 'BAD_REQUEST';

  constructor(message = 'Bad Request') {
    super(message, true);
  }
}

export class UnauthorizedError extends AppError {
  public readonly statusCode = 401;
  public readonly code = 'UNAUTHORIZED';

  constructor(message = 'Unauthorized') {
    super(message, true);
  }
}

export class ForbiddenError extends AppError {
  public readonly statusCode = 403;
  public readonly code = 'FORBIDDEN';

  constructor(message = 'Forbidden access') {
    super(message, true);
  }
}

export class NotFoundError extends AppError {
  public readonly statusCode = 404;
  public readonly code = 'NOT_FOUND';

  constructor(message = 'Resource not found') {
    super(message, true);
  }
}

export class ConflictError extends AppError {
  public readonly statusCode = 409;
  public readonly code = 'CONFLICT';

  constructor(message = 'Resource conflict') {
    super(message, true);
  }
}

export class InternalServerError extends AppError {
  public readonly statusCode = 500;
  public readonly code = 'INTERNAL_SERVER_ERROR';

  constructor(message = 'Internal server error', isOperational = false) {
    super(message, isOperational);
  }
}
