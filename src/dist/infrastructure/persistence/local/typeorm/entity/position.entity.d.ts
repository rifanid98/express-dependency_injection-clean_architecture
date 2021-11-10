import { PositionEntityInterface } from 'domain/entity/position.entity';
import { Employee, User } from '.';
export declare class Position implements PositionEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    employees: Employee[];
}
