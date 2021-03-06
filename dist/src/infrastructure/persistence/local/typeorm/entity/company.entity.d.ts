import { CompanyEntityInterface } from 'domain/entity/company.entity';
import { Employee, User } from '.';
export declare class Company implements CompanyEntityInterface {
    id?: number;
    name?: string;
    alias?: string;
    address: string;
    bpjs_ketenagakerjaaan: string;
    city: string;
    email: string;
    hq_initial: string;
    jkk: string;
    klu_code: string;
    npwp: string;
    phone: string;
    postal_code: string;
    state_province: string;
    tax_person_name: string;
    tax_person_npwp: string;
    taxable_date: string;
    umr: string;
    director?: Employee;
    logo?: string;
    signature?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
