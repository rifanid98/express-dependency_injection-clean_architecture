import { User } from "domain/entity/user.entity";

export interface UserRepositoryInterface {
  getAllUsers(): Promise<User[]>;
  getOneUser(user: User): Promise<User>;
  getUserById(id: number): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<boolean>;
}

export class UserRepository implements UserRepositoryInterface {
  createUser(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  getAllUsers(): Promise<User[]> {
    return Promise.resolve([]);
  }

  getOneUser(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  getUserById(id: number): Promise<User> {
    return Promise.resolve(undefined);
  }

  updateUser(user: User): Promise<boolean> {
    return Promise.resolve(false);
  }
}
