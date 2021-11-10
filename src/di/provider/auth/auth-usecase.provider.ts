import {
  Authenticator,
  Config,
  ConfigImpl,
  ProviderRegistry,
  Security,
  SecurityImpl,
} from "sharedkernel";
import {
  AuthPresenter,
  AuthPresenterImpl,
} from "adapter/presenter/auth.presenter";
import { Jwt, JwtImpl } from "sharedkernel/jwt";
import { AuthLocalRepository } from "infrastructure/persistence/local/typeorm/repository";
import { AuthRepository } from "domain/repository/auth.repository";

export const AuthUsecaseProvider: ProviderRegistry[] = [
  {
    token: AuthPresenter,
    useClass: AuthPresenterImpl,
  },
  {
    token: Authenticator,
    useClass: AuthPresenterImpl,
  },
  {
    token: Security,
    useClass: SecurityImpl,
  },
  {
    token: Jwt,
    useClass: JwtImpl,
  },
  {
    token: Config,
    useClass: ConfigImpl,
  },
  {
    token: AuthRepository,
    useClass: AuthLocalRepository,
  },
];
