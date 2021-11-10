export interface ReimbursementBenefitEntityInterface {
  id?: number;
  name?: string;
  reimbursement_type?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class ReimbursementBenefit
  implements ReimbursementBenefitEntityInterface
{
  id?: number;
  name?: string;
  reimbursement_type?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
