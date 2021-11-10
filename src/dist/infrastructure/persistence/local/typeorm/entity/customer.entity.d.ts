import { CustomerEntityInterface } from 'domain/entity/customer.entity';
import { Project, User } from '.';
export declare class Customer implements CustomerEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    projects: Project[];
}
