import { ApprovalListEntityInterface, ApprovalStatus } from "domain/entity/approval-list.entity";
import { ApprovalListDetail, User } from ".";
export declare class ApprovalList implements ApprovalListEntityInterface {
    id?: number;
    name?: string;
    request_id?: number;
    request_type?: string;
    status?: ApprovalStatus;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    request_type_id?: number;
    approval_list_details: ApprovalListDetail[];
}
