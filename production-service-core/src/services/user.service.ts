/**
 * User Business Domain Service
 * 
 * Location: src/services/user.service.ts
 */

import { User, IUserRepository, CreateUserDTO, UpdateUserDTO } from '../domain/user.types';
import { ConflictError, NotFoundError } from '../errors/appError';

 export class UserService {
    constructor(private readonly userRepo: IUserRepository) {}

    async createUser(dto: CreateUserDTO): Promise<User> {
        const existingUser = await this.userRepo.findByEmail(dto.email)
        if(existingUser) {
            throw new ConflictError(`User with email ${dto.email} already exists`)
        }

        return this.userRepo.create(dto)
    }

    async getUserById(id: string): Promise<User> {
      const user = await this.userRepo.findById(id)
      if(!user) throw new NotFoundError(`User with ID ${id} not found`)   
      return user;
    }

    async getAllUsers(): Promise<User[]> {
      return this.userRepo.findAll()
    }

    async updateUser(id:string, dto: UpdateUserDTO): Promise<User> {

        if(dto.email) {
            const existingUser = await this.userRepo.findByEmail(dto.email)
            if(existingUser && existingUser.id !== id) {
                throw new ConflictError(`User with email ${dto.email} already exists`)
            }
        }

        const updated = await this.userRepo.update(id, dto)

        if(!updated) throw new NotFoundError (`User with ID ${id} not found`)

        return updated
    }

    async deleteUser(id:string): Promise<void> {
        await this.getUserById(id)
        const deleted = await this.userRepo.delete(id)
        
        if(!deleted) throw new NotFoundError(`User with ID ${id} not found`)
    }
 }







