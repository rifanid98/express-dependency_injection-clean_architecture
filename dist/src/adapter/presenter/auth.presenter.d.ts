import { User } from "domain/entity/user.entity";
interface AuthPresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
export declare class AuthPresenter implements AuthPresenterInterface {
    json(entity: User): User;
    show(entity: User): User;
    showAll(entity: User): User;
}
export declare class AuthPresenterImpl extends AuthPresenter {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
export {};
