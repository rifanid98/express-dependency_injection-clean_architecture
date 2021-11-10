export interface ProjectEntityInterface {
  id?: string;
  sales?: string;
  customer?: string;
  name?: string;
  description?: string;
  nominal?: number;
  contract_number_po?: string;
  contract_start_date?: Date;
  contract_end_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class Project implements ProjectEntityInterface {
  id?: string;
  sales?: string;
  customer?: string;
  name?: string;
  description?: string;
  nominal?: number;
  contract_number_po?: string;
  contract_start_date?: Date;
  contract_end_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
