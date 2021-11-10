import { ApprovalRuleEntityInterface } from 'domain/entity/approval-rule.entity';
import { User } from '.';
export declare class ApprovalRule implements ApprovalRuleEntityInterface {
    id?: number;
    name?: string;
    approval_rule_type?: string;
    request_type?: string;
    value?: string;
    position_order?: number;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_rule_type_id?: number;
    approval_setting_id?: number;
}
