import { Request, Response, NextFunction } from 'express';
import { ZodType, ZodError } from 'zod';
import { BadRequestError } from '../errors/appError';

/**
 * Schema target map for HTTP requests
 */
export interface RequestValidationSchema {
  body?: ZodType;
  query?: ZodType;
  params?: ZodType;
}

/**
 * Standardized field-level validation error format for API responses
 */
export interface ValidationErrorDetail {
  field: string;
  message: string;
  code: string;
}

/**
 * Factory middleware that validates incoming HTTP body, query, and path parameters against Zod schemas.
 * Replaces unvalidated request properties with parsed, coerced, and sanitized data.
 * Forwards a formatted BadRequestError if validation fails.
 */
export function validateRequest(schemas: RequestValidationSchema) {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }
      if (schemas.query) {
        req.query = (await schemas.query.parseAsync(req.query)) as Record<string, any>;
      }
      if (schemas.params) {
        req.params = (await schemas.params.parseAsync(req.params)) as Record<string, string>;
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldDetails: ValidationErrorDetail[] = error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
          code: err.code,
        }));

        const validationError = new BadRequestError('Validation failed for request parameters');
        Object.assign(validationError, { details: fieldDetails });

        return next(validationError);
      }

      next(error);
    }
  };
}
