import { ReimbursementTypeEntityInterface } from 'domain/entity/reimbursement-type.entity';
import { ReimbursementBenefit, ReimbursementRequest, User } from '.';
export declare class ReimbursementType implements ReimbursementTypeEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    reimbursement_benefits: ReimbursementBenefit[];
    reimbursement_requests: ReimbursementRequest[];
}
