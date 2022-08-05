import { ProviderRegistry } from "../../type";
import { AuthService } from "../../../core/port/service";
import { AuthServiceImpl } from "../../../core/service/auth/auth.service.impl";

export const AuthControllerProvider: ProviderRegistry[] = [
  {
    token: AuthService,
    useClass: AuthServiceImpl,
  },
];
