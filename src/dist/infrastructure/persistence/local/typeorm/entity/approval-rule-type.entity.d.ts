import { ApprovalRuleTypeEntityInterface } from "domain/entity/approval-rule-type.entity";
import { ApprovalRule, User } from ".";
export declare class ApprovalRuleType implements ApprovalRuleTypeEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_rules: ApprovalRule[];
}
