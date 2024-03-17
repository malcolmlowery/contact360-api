import { User } from "@entities/User";

export interface IUserRepository {
  get(user: User): Promise<User>;

  create(user: User): Promise<User>;

  update(user: User): Promise<User>;

  delete(id: string): Promise<{ id: string }>;
}
