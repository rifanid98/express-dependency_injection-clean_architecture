export enum ApprovalStatus {
  PENDING = "pending",
  APPROVED = "approved",
}

export interface ApprovalListEntityInterface {
  id?: number;
  name?: string;
  request_id?: number;
  request_type?: string;
  status?: ApprovalStatus;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class ApprovalList implements ApprovalListEntityInterface {
  id?: number;
  name?: string;
  request_id?: number;
  request_type?: string;
  status?: ApprovalStatus;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
