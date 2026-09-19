/**
 * User Domain Entity & Repository Contract
 *
 * Defines the core business model and the swappable data storage interface.
 */

export type UserRole = 'ADMIN' | 'USER' | 'AUDITOR';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserDTO = Readonly<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;
export type UpdateUserDTO = Readonly<Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>>;

/**
 * Interface-driven repository contract.
 * Any storage engine (Postgres, MongoDB, In-Memory) MUST adhere to this interface.
 */
export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  create(dto: CreateUserDTO): Promise<User>;
  update(id: string, dto: UpdateUserDTO): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
