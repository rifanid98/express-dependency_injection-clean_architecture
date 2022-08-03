import { RequestTypeEntityInterface } from "core/entity/request-type.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApprovalList, ApprovalSetting, User } from ".";

@Entity()
export class RequestType implements RequestTypeEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column()
  name?: string;

  @Column()
  alias?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.request_types, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.request_types, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.request_types, {
    eager: false,
  })
  @JoinColumn({ name: "deleted_by" })
  deleted_by?: User;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany(
    () => ApprovalList,
    (approval_list) => approval_list.request_type_id
  )
  approval_lists: ApprovalList[];

  @OneToMany(
    () => ApprovalSetting,
    (approval_setting) => approval_setting.request_type_id
  )
  approval_settings: ApprovalSetting[];
}
