import { User } from "domain/entity/user.entity";
export interface UserRepositoryInterface {
    getAllUsers(): Promise<User[]>;
    getOneUser(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<boolean>;
}
export declare class UserRepository implements UserRepositoryInterface {
    createUser(user: User): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(user: User): Promise<boolean>;
}
