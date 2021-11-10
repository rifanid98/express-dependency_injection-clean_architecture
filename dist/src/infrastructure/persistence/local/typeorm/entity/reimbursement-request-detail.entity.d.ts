import { ReimbursementRequestDetailEntityInterface } from 'domain/entity/reimbursement-request-detail.entity';
import { User } from '.';
export declare class ReimbursementRequestDetail implements ReimbursementRequestDetailEntityInterface {
    id?: number;
    name?: string;
    reimbursement_benefit?: string;
    request_amount?: number;
    paid_amount?: number;
    description?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    reimbursement_benefit_id: any;
    reimbursement_request_id: any;
}
