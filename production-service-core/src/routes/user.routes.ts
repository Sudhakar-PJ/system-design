/**
 * User Router Factory
 * 
 * Location: src/routes/user.routes.ts
 */

import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

export function createUserRouter(userController: UserController): Router {
  const router = Router();

  router.get(
    '/',
    asyncHandler((req, res) => userController.getAllUsers(req, res))
  );

  router.get(
    '/:id',
    asyncHandler((req, res) => userController.getUserById(req, res))
  );

  router.post(
    '/',
    asyncHandler((req, res) => userController.createUser(req, res))
  );

  router.patch(
    '/:id',
    asyncHandler((req, res) => userController.updateUser(req, res))
  );

  router.delete(
    '/:id',
    asyncHandler((req, res) => userController.deleteUser(req, res))
  );

  return router;
}
