import {
  Authenticator,
  Config,
  ConfigImpl,
  ProviderRegistry,
  Security,
  SecurityImpl,
} from "../../../utils";
import {
  AuthPresenter,
  AuthPresenterImpl,
} from "interface/handler/auth.presenter";
import { Jwt, JwtImpl } from "utils/jwt";
import { AuthLocalRepository } from "infrastructure/persistence/local/typeorm/repository";
import { AuthRepository } from "core/port/repository/auth.repository";

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
