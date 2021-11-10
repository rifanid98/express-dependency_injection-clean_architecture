import { RoleEntityInterface } from 'domain/entity/role.entity';
import { Employee, RoleMenu, User } from '.';
export declare class Role implements RoleEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    role_menus: RoleMenu[];
    employees: Employee[];
}
