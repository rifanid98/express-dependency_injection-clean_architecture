export interface PositionLevelEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class PositionLevel implements PositionLevelEntityInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
