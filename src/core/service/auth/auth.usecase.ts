import {
  AuthAuthenticateDto,
  AuthSignInDto,
  AuthSignUpDto,
} from "core/dto/auth.dto";
import { User } from "core/entity/user.entity";

export interface AuthUseCase {
  signup(auth: AuthSignUpDto): Promise<User>;
  signin(auth: AuthSignInDto): Promise<string>;
  authenticator(user: User): Promise<string>;
  authenticate(auth: AuthAuthenticateDto, user: User): Promise<string>;
}
