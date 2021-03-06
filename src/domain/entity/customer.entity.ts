export interface CustomerEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class Customer implements CustomerEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
