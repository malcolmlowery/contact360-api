import { User } from '@entities/User';
import { IUserRepository } from '@repositories/user/UserRepository';

export class DatabaseUserRepository implements IUserRepository {
  async get(user: User): Promise<User> {
    return user
  }

  async create(user: User): Promise<User> {
    return user
  }

  async update(user: User): Promise<User> {
    return user
  }

  async delete(id: string): Promise<{ id: string }> {
    return { id };
  }
}