import { UserRepository } from "domain/repository/user.repository";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
export declare class UserLocalRepository extends Repository<User> implements UserRepository {
    createUser(user: User): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(user: User): Promise<boolean>;
}
