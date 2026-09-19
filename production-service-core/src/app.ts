/**
 * Production Service Core — Application Entrypoint & Composition Root
 * 
 * Location: src/app.ts
 */

import express, { Express, Request, Response } from 'express';
import { InMemoryUserRepository } from './repositories/in-memory-user.repository';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { createUserRouter } from './routes/user.routes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/appError';
import { requestContextMiddleware } from './middlewares/requestContext.middleware';
import { logger } from './logger/logger';

function createApp(): Express {
  const app = express();

  // 1. Global Request Context & Audit Logging Middleware (MUST BE REGISTERED FIRST)
  app.use(requestContextMiddleware);

  // 2. Global Pre-Routing Middlewares
  app.use(express.json());

  // Health Check Endpoint
  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
  });

  // 3. Composition Root: Instantiate Dependencies Bottom-Up
  const userRepository = new InMemoryUserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);
  const userRouter = createUserRouter(userController);

  // 4. Mount Routes
  app.use('/api/v1/users', userRouter);

  // 5. Fallback for Unhandled Routes (404)
  app.use((req: Request) => {
    throw new NotFoundError(`Route ${req.method} ${req.originalUrl} not found`);
  });

  // 6. Centralized RFC 7807 Error Handling Middleware (MUST BE REGISTERED LAST)
  app.use(errorHandler);

  return app;
}

// Start Server
const PORT = process.env.PORT || 3000;
const app = createApp();

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(`🚀 Production Service Core running on http://localhost:${PORT}`);
    logger.info(`👉 Health check: http://localhost:${PORT}/health`);
    logger.info(`👉 Users API: http://localhost:${PORT}/api/v1/users`);
  });
}

export { createApp };
