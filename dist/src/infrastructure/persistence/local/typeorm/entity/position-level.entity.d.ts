import { PositionLevelEntityInterface } from 'domain/entity/position-level.entity';
import { Employee, User } from '.';
export declare class PositionLevel implements PositionLevelEntityInterface {
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
