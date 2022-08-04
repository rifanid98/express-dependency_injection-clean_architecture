import { AuthRepository } from "../../../../core/port/repository";
import { User } from "../../../../core/entity";
import { autoInjectable, singleton } from "tsyringe";

@singleton()
@autoInjectable()
export class AuthRepositoryImpl implements AuthRepository {
  signin(user: User): Promise<User> {
    return Promise.resolve(user);
  }

  signup(user: User): Promise<User> {
    return Promise.resolve(user);
  }
}
