export interface MenuEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class Menu implements MenuEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
