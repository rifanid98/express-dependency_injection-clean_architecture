import { ApprovalSettingEntityInterface } from 'domain/entity/approval-setting.entity';
import { ApprovalRule, User } from '.';
export declare class ApprovalSetting implements ApprovalSettingEntityInterface {
    id?: number;
    name?: string;
    request_type?: string;
    approval_setting_type?: string;
    value?: string;
    auto_ascend?: boolean;
    no_approval?: boolean;
    position_order?: number;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    request_type_id?: number;
    approval_setting_type_id?: number;
    approval_rules: ApprovalRule[];
}
