import { RoleMenuEntityInterface } from "domain/entity/role-menu.entity";
import { Menu, Role, User } from ".";
export declare class RoleMenu implements RoleMenuEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    menu: Menu;
    role: Role;
}
