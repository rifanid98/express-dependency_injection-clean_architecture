import { MenuEntityInterface } from 'domain/entity/menu.entity';
import { RoleMenu, User } from '.';
export declare class Menu implements MenuEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    role_menus: RoleMenu[];
}
