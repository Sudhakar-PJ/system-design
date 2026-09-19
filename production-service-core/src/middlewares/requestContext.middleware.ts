/**
 * Request Context & Structured Audit Logging Middleware
 * 
 * Location: src/middlewares/request-context.middleware.ts
 */

import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'node:crypto';
import { requestContext, RequestContext } from '../context/requestContext';
import { logger } from '../logger/logger';

/**
 * Parses existing W3C traceparent (00-{trace_id}-{span_id}-{flags}) or generates a fresh trace context
 */
function resolveTraceContext(req: Request): { traceId: string; spanId: string } {
  const traceparent = req.headers['traceparent'] as string;
  if (traceparent) {
    const parts = traceparent.split('-');
    if (parts.length === 4 && parts[0] === '00') {
      return { traceId: parts[1], spanId: parts[2] };
    }
  }

  // Fallback: Generate fresh W3C-compliant traceId (32 hex) and spanId (16 hex)
  return {
    traceId: randomUUID().replace(/-/g, ''),
    spanId: randomUUID().replace(/-/g, '').substring(0, 16),
  };
}

export function requestContextMiddleware(req: Request, res: Response, next: NextFunction): void {
  const requestId = (req.headers['x-request-id'] as string) || `req_${randomUUID()}`;
  const { traceId, spanId } = resolveTraceContext(req);
  const startTime = Date.now();

  const context: RequestContext = {
    requestId,
    traceId,
    spanId,
    startTime,
  };

  // Set correlation response headers so client receives tracking IDs
  res.setHeader('X-Request-ID', requestId);
  res.setHeader('traceparent', `00-${traceId}-${spanId}-01`);

  // Log HTTP Request Completion when response finishes
  res.on('finish', () => {
    const durationMs = Date.now() - startTime;
    const statusCode = res.statusCode;

    const logData = {
      httpMethod: req.method,
      path: req.originalUrl || req.path,
      statusCode,
      durationMs,
    };

    if (statusCode >= 500) {
      logger.error(logData, `HTTP ${req.method} ${req.originalUrl} failed`);
    } else if (statusCode >= 400) {
      logger.warn(logData, `HTTP ${req.method} ${req.originalUrl} client error`);
    } else {
      logger.info(logData, `HTTP ${req.method} ${req.originalUrl} completed`);
    }
  });

  // Execute downstream middleware & routes inside AsyncLocalStorage context
  requestContext.runWithContext(context, () => {
    next();
  });
}
