import { RequestTypeEntityInterface } from 'domain/entity/request-type.entity';
import { ApprovalList, ApprovalSetting, User } from '.';
export declare class RequestType implements RequestTypeEntityInterface {
    id?: number;
    name?: string;
    alias?: string;
    created_by?: User;
    updated_by?: User;
    deleted_by?: User;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    approval_lists: ApprovalList[];
    approval_settings: ApprovalSetting[];
}
