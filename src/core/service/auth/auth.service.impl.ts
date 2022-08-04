import { AuthPresenter } from "../../../interface/extl/v1/auth/auth.presenter";
import { User } from "../../../core/entity/user.entity";
import { AuthService } from "../../port/service/auth.service";
import { autoInjectable, injectable, registry, singleton } from "tsyringe";
import { NotFoundException, BadRequestException } from "../../../utils";
import { AuthRepository } from "../../../core/port/repository/auth.repository";
import { AuthServiceProvider } from "../../../di/provider";
import { Config } from "../../port/utils/config.utils";
import { Jwt } from "../../port/utils/jwt.utils";
import { Security } from "../../port/utils/security.utils";

@singleton()
@autoInjectable()
@injectable()
@registry(AuthServiceProvider)
export class AuthServiceImpl implements AuthService {
  constructor(
    private presenter: AuthPresenter,
    private authRepository: AuthRepository,
    private jwt: Jwt,
    private configService: Config,
    private securityService: Security
  ) {}

  async signup(user: User): Promise<User> {
    user.password = await this.securityService.hash(user.password);
    const result = await this.authRepository.signup(user);
    return this.presenter.show(result);
  }

  async signin(user: User): Promise<string> {
    // const result = await this.authRepository.signin({
    //   email: user.email,
    // });
    //
    // if (!result) {
    //   throw new NotFoundException("User not found");
    // }
    //
    // if (!(await this.securityService.verify(user.password, result.password))) {
    //   throw new BadRequestException("Credentials is invalid");
    // }
    //
    // const presentedUser = this.presenter.show(result);
    // const jwtPayload = this.presenter.json(presentedUser);
    // return this.jwt.sign(jwtPayload);
    return Promise.resolve(user.name);
  }
}
