export interface ReimbursementTypeEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class ReimbursementType implements ReimbursementTypeEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
