/**
 * In-Memory Repository Implementation
 * 
 * Location: src/repositories/in-memory-user.repository.ts
 */

import { User, CreateUserDTO, IUserRepository, UpdateUserDTO } from "../domain/user.types";

export class InMemoryUserRepository implements IUserRepository {
  private readonly users: Map<string, User> = new Map();

  async findById(id: string): Promise<User | null> {
    const user = this.users.get(id);
    return user ? { ...user } : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    if (!email) return null;
    for (const user of this.users.values()) {
      if (user.email && user.email.toLowerCase() === email.toLowerCase()) {
        return { ...user };
      }
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return Array.from(this.users.values()).map((user) => ({ ...user }));
  }

  async create(dto: CreateUserDTO): Promise<User> {
    const now = new Date();
    const user: User = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      email: dto.email,
      name: dto.name,
      role: dto.role,
      createdAt: now,
      updatedAt: now,
    };

    this.users.set(user.id, user);
    return { ...user };
  }

  async update(id: string, dto: UpdateUserDTO): Promise<User | null> {
    const existing = this.users.get(id);
    if (!existing) return null;

    const updateUser: User = {
      ...existing,
      ...dto,
      updatedAt: new Date(),
    };
    this.users.set(id, updateUser);
    return { ...updateUser };
  }

  async delete(id: string): Promise<boolean> {
    if (!this.users.has(id)) return false;

    this.users.delete(id);
    return true;
  }
}
