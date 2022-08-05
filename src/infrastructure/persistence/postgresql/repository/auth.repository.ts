import { AuthRepository } from "../../../../core/port/repository";
import { User } from "../../../../core/entity";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { AuthRepositoryProvider } from "../../../../di/provider/auth/auth-repository.provider";
import KnexInstance from "../knex/knex";

@singleton()
@autoInjectable()
@registry(AuthRepositoryProvider)
export class AuthRepositoryImpl implements AuthRepository {
  constructor(@inject("Knex") private db: KnexInstance) {}

  signin(user: User): Promise<User> {
    return Promise.resolve(user);
  }

  signup(user: User): Promise<User> {
    const queryBuilder = this.db.knex.insert(user).into("users");
    console.log(queryBuilder);
    return Promise.resolve(user);
  }
}
