/**
 * Global RFC 7807 Express Error Handling Middleware
 * 
 * Location: src/middlewares/error-handler.ts
 */

import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export interface ErrorDetails {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  code: string;
  timestamp: string;
}

export const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const isAppError = err instanceof AppError;

    const status = isAppError ? err.statusCode : 500;
    const code = isAppError ? err.code : 'INTERNAL_SERVER_ERROR';

    // Operational errors show their message. 500 programmer errors mask details in production.
  const detail = isAppError || process.env.NODE_ENV !== 'production'
    ? err.message
    : 'An unexpected internal server error occurred.';

    const titles: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
  };

  const errorDetails: ErrorDetails = {
    type: `https://api.example.com/errors/${code}`,
    title: titles[status] || 'Error',
    status,
    detail,
    instance: req.originalUrl || req.path,
    code,
    timestamp: isAppError ? err.timestamp : new Date().toISOString(),
  }

  if (status >= 500 || !isAppError || !err.isOperational) {
    console.error(`[FATAL_ERROR] ${req.method} ${req.originalUrl}:`, err);
  }
  res.status(status).contentType('application/problem+json').json(errorDetails);
}


