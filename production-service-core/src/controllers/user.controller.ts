/**
 * User HTTP Controller
 * 
 * Location: src/controllers/user.controller.ts
 */

import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser = async (req: Request, res: Response): Promise<void> => {
    const user = await this.userService.createUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  };

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    res.status(200).json({
      success: true,
      data: user,
    });
  };

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getAllUsers();
    res.status(200).json({
      success: true,
      data: users,
      count: users.length,
    });
  };

  updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedUser = await this.userService.updateUser(id, req.body);
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  };

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.userService.deleteUser(id);
    res.status(204).send();
  };
}
