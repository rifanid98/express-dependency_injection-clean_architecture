import { AuthPresenter } from "adapter/presenter/auth.presenter";
import { User } from "domain/entity/user.entity";
import { AuthAuthenticateDto, AuthSignInDto, AuthSignUpDto } from "domain/dto/auth.dto";
import { AuthUseCase } from "./auth.usecase";
import { Authenticator, Config, Security, Jwt } from "sharedkernel";
import { AuthRepository } from "domain/repository/auth.repository";
import { UserRepository } from "domain/repository/user.repository";
export declare class AuthInteractor implements AuthUseCase {
    private presenter;
    private authRepository;
    private userRepository;
    private jwt;
    private configService;
    private authenticatorService;
    private securityService;
    constructor(presenter: AuthPresenter, authRepository: AuthRepository, userRepository: UserRepository, jwt: Jwt, configService: Config, authenticatorService: Authenticator, securityService: Security);
    signup(auth: AuthSignUpDto): Promise<User>;
    signin(auth: AuthSignInDto): Promise<string>;
    authenticator(user: User): Promise<string>;
    authenticate(auth: AuthAuthenticateDto, user: User): Promise<string>;
}
