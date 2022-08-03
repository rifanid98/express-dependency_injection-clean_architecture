import { ApprovalListDetailEntityInterface } from "core/entity/approval-list-detail.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApprovalList, User } from ".";
import { ApprovalStatus } from "core/entity/approval-list.entity";

@Entity()
export class ApprovalListDetail implements ApprovalListDetailEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column()
  name?: string;

  @Column({
    type: "enum",
    enum: ApprovalStatus,
    default: ApprovalStatus.PENDING,
  })
  status?: ApprovalStatus;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_list_details, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_list_details, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_list_details, {
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

  @ManyToOne(
    () => ApprovalList,
    (approval_list) => approval_list.approval_list_details
  )
  @JoinColumn({ name: "approval_list_id" })
  approval_list_id?: number;

  // @ManyToOne(
  //   () => ApprovalList,
  //   (approval_list) => approval_list.approval_list_details,
  // )
  // @JoinColumn({ name: 'approval_rule_id' })
  @Column()
  approval_rule_id?: number;
}
