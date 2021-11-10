import { User } from "../entity/user.entity";

export interface AuthRepositoryInterface {
  signup(user: User): Promise<User>;
  signin(user: User): Promise<User>;
}

export class AuthRepository implements AuthRepositoryInterface {
  signin(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  signup(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }
}
