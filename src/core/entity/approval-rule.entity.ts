export interface ApprovalRuleEntityInterface {
  id?: number;
  name?: string;
  approval_rule_type?: string;
  request_type?: string;
  value?: string;
  position_order?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class ApprovalRule implements ApprovalRuleEntityInterface {
  id?: number;
  name?: string;
  approval_rule_type?: string;
  request_type?: string;
  value?: string;
  position_order?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
