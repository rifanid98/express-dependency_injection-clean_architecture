import { EmployeeEntityInterface } from 'domain/entity/employee.entity';
import { Company, Position, PositionLevel, Project, Role, User } from '.';
import { BusinessUnit } from 'infrastructure/persistence/local/typeorm/entity/business-unit.entity';
export declare class Employee implements EmployeeEntityInterface {
    id?: number;
    name?: string;
    alias?: string;
    position_name?: string;
    role: Role;
    position: Position;
    position_level: PositionLevel;
    business_unit: BusinessUnit;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    companies: Company[];
    business_units: BusinessUnit[];
    projects: Project[];
}
