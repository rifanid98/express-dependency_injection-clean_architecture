import { User } from "../entity/user.entity";
export interface AuthRepositoryInterface {
    signup(user: User): Promise<User>;
    signin(user: User): Promise<User>;
}
export declare class AuthRepository implements AuthRepositoryInterface {
    signin(user: User): Promise<User>;
    signup(user: User): Promise<User>;
}
