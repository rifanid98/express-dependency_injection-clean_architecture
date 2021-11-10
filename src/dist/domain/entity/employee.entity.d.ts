export interface EmployeeEntityInterface {
    id?: number;
    name?: string;
    alias?: string;
    position_name?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class Employee implements EmployeeEntityInterface {
    id?: number;
    name?: string;
    alias?: string;
    position_name?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
