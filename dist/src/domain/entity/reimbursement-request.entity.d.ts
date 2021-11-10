export interface ReimbursementRequestEntityInterface {
    id?: number;
    name?: string;
    reimbursement_type?: string;
    notes?: string;
    file?: string;
    total?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class ReimbursementRequest implements ReimbursementRequestEntityInterface {
    id?: number;
    name?: string;
    reimbursement_type?: string;
    notes?: string;
    file?: string;
    total?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
