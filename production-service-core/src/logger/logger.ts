/**
 * Structured Pino Logger with AsyncLocalStorage Context, PII Redaction & Pretty Dev Logs
 * 
 * Location: src/logger/logger.ts
 */

import pino from 'pino';
import { requestContext } from '../context/requestContext';

const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  // Redact PII fields across all logged objects automatically
  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'password',
      'token',
      'creditCard',
      'ssn',
      'email',
    ],
    censor: '[REDACTED]',
  },
  // Automatically inject requestId, traceId, spanId, and userId from AsyncLocalStorage
  mixin() {
    const store = requestContext.getStore();
    if (!store) return {};

    return {
      requestId: store.requestId,
      traceId: store.traceId,
      ...(store.spanId ? { spanId: store.spanId } : {}),
      ...(store.userId ? { userId: store.userId } : {}),
    };
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  // Use pino-pretty transport in local dev, raw JSON in production
  transport: isProduction
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },
});
