import { UserRepository } from "../../../../core/port/repository";
import { User } from "../../../../core/entity";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { UserRepositoryProvider } from "../../../../di/provider/user/user-repository.provider";
import KnexInstance from "../knex/knex";

@singleton()
@autoInjectable()
@registry(UserRepositoryProvider)
export class UserRepositoryImpl implements UserRepository {
  constructor(@inject("Knex") private db: KnexInstance) {}

  async createUser(user: User): Promise<User> {
    await this.db.knex.insert(user).into("users");
    return Promise.resolve(user);
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
