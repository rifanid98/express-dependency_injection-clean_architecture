import { ApprovalListDetailEntityInterface } from "domain/entity/approval-list-detail.entity";
import { User } from ".";
import { ApprovalStatus } from "domain/entity/approval-list.entity";
export declare class ApprovalListDetail implements ApprovalListDetailEntityInterface {
    id?: number;
    name?: string;
    status?: ApprovalStatus;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_list_id?: number;
    approval_rule_id?: number;
}
