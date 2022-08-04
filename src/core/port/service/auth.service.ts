import { User } from "core/entity/user.entity";

interface AuthServiceInterface {
  signup(user: User): Promise<User>;
  signin(user: User): Promise<string>;
}

export class AuthService implements AuthServiceInterface {
  signin(auth: User): Promise<string> {
    return Promise.resolve("");
  }

  signup(auth: User): Promise<User> {
    return Promise.resolve(undefined);
  }
}
