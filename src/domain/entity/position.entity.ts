export interface PositionEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class Position implements PositionEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
