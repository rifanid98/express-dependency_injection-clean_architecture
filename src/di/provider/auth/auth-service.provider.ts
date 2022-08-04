import { ConfigImpl, ProviderRegistry, SecurityImpl } from "../../../utils";
import {
  AuthPresenter,
  AuthPresenterImpl,
} from "../../../interface/extl/v1/auth/auth.presenter";
import { JwtImpl } from "../../../utils/jwt";
import { Config } from "../../../core/port/utils/config.utils";
import { Jwt } from "../../../core/port/utils/jwt.utils";
import { Security } from "../../../core/port/utils/security.utils";
import { AuthRepository } from "../../../core/port/repository";
import { AuthRepositoryImpl } from "../../../infrastructure/persistence/mysql/repository";

export const AuthServiceProvider: ProviderRegistry[] = [
  {
    token: AuthPresenter,
    useClass: AuthPresenterImpl,
  },
  {
    token: AuthRepository,
    useClass: AuthRepositoryImpl,
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
    token: Security,
    useClass: SecurityImpl,
  },
];
