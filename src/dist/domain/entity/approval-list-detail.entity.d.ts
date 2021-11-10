import { ApprovalStatus } from "domain/entity/approval-list.entity";
export interface ApprovalListDetailEntityInterface {
    id?: number;
    name?: string;
    status?: ApprovalStatus;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class ApprovalListDetail implements ApprovalListDetailEntityInterface {
    id?: number;
    name?: string;
    status?: ApprovalStatus;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
