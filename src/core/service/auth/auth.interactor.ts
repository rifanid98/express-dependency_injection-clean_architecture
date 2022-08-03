import { TotpVerifyOptions } from "speakeasy";
import { AuthPresenter } from "interface/extl/v1/auth/auth.presenter";
import { User } from "core/entity/user.entity";
import {
  AuthAuthenticateDto,
  AuthSignInDto,
  AuthSignUpDto,
} from "core/dto/auth.dto";
import { AuthUseCase } from "./auth.usecase";
import { autoInjectable, registry, singleton } from "tsyringe";
import {
  Authenticator,
  Config,
  Security,
  Jwt,
  NotFoundException,
  BadRequestException,
  NotModifiedException,
  UnauthorizedException,
} from "../../../utils";
import { AuthRepository } from "core/port/repository/auth.repository";
import { UserRepository } from "core/port/repository/user.repository";
import { AuthUsecaseProvider } from "di/provider";

@singleton()
@autoInjectable()
@registry(AuthUsecaseProvider)
export class AuthInteractor implements AuthUseCase {
  constructor(
    private presenter: AuthPresenter,
    private authRepository: AuthRepository,
    private userRepository: UserRepository,
    private jwt: Jwt,
    private configService: Config,
    private authenticatorService: Authenticator,
    private securityService: Security
  ) {}

  async signup(auth: AuthSignUpDto): Promise<User> {
    const user = new User();
    user.email = auth.email;
    user.password = await this.securityService.hash(auth.password);

    const result = await this.authRepository.signup(user);
    return this.presenter.show(result);
  }

  async signin(auth: AuthSignInDto): Promise<string> {
    const result = await this.authRepository.signin({
      email: auth.email,
    });

    if (!result) {
      throw new NotFoundException("User not found");
    }

    if (!(await this.securityService.verify(auth.password, result.password))) {
      throw new BadRequestException("Credentials is invalid");
    }

    const presentedUser = this.presenter.show(result);
    const jwtPayload = this.presenter.json(presentedUser);
    return this.jwt.sign(jwtPayload);
  }

  async authenticator(user: User): Promise<string> {
    const secret = this.authenticatorService.generateSecret({
      name: this.configService.get("AUTHENTICATOR_NAME"),
    });

    const qrCodeUrl = await this.authenticatorService.generateQrCodeUrl(
      secret.otpauth_url
    );

    const update = await this.userRepository.updateUser({
      id: user.id,
      authenticator_secret: secret.base32,
    });

    if (!update) {
      throw new NotModifiedException();
    }

    return qrCodeUrl;
  }

  async authenticate(auth: AuthAuthenticateDto, user: User): Promise<string> {
    const currentUser = await this.userRepository.getOneUser({
      id: user.id,
    });

    if (!currentUser) {
      throw new NotFoundException("User is does not exists");
    }

    const totpPayload: TotpVerifyOptions = {
      secret: currentUser.authenticator_secret,
      encoding: "base32",
      token: auth.authenticator_code,
    };

    const verified = this.authenticatorService.verify(totpPayload);

    if (!verified) {
      throw new UnauthorizedException("Authenticator code is invalid.");
    }

    const update = await this.userRepository.updateUser({
      id: user.id,
      authenticator: true,
    });

    if (!update) {
      throw new NotModifiedException("Failed to update user configuration");
    }

    currentUser.authenticator = true;

    return this.jwt.sign(this.presenter.json(this.presenter.show(currentUser)));
  }
}
