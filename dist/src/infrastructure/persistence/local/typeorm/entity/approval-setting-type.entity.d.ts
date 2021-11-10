import { ApprovalSettingTypeEntityInterface } from 'domain/entity/approval-setting-type.entity';
import { ApprovalSetting, User } from '.';
export declare class ApprovalSettingType implements ApprovalSettingTypeEntityInterface {
    id?: number;
    name?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_settings: ApprovalSetting[];
}
