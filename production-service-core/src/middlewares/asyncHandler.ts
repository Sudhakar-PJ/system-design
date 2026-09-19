/**
 * Async Handler Wrapper Middleware
 * 
 * Location: src/middlewares/async-handler.ts
 */

import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncHandler = (fn: RequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}






