export interface ReimbursementRequestDetailEntityInterface {
  id?: number;
  name?: string;
  reimbursement_benefit?: string;
  request_amount?: number;
  paid_amount?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class ReimbursementRequestDetail
  implements ReimbursementRequestDetailEntityInterface
{
  id?: number;
  name?: string;
  reimbursement_benefit?: string;
  request_amount?: number;
  paid_amount?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
