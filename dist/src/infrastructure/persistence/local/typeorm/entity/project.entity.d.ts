import { ProjectEntityInterface } from 'domain/entity/project.entity';
import { Customer, Employee, User } from '.';
export declare class Project implements ProjectEntityInterface {
    id?: string;
    sales?: string;
    customer?: string;
    name?: string;
    description?: string;
    nominal?: number;
    contract_number_po?: string;
    contract_start_date?: Date;
    contract_end_date?: Date;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    customer_id: Customer;
    sales_id: Employee;
}
