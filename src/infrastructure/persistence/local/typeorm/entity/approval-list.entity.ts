import {
  ApprovalListEntityInterface,
  ApprovalStatus,
} from "domain/entity/approval-list.entity";
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
import { ApprovalListDetail, RequestType, User } from ".";

@Entity()
export class ApprovalList implements ApprovalListEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  request_id?: number;

  @Column({ nullable: true })
  request_type?: string;

  @Column({
    type: "enum",
    enum: ApprovalStatus,
    default: ApprovalStatus.PENDING,
  })
  status?: ApprovalStatus;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_lists, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_lists, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_lists, {
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

  @ManyToOne(() => RequestType, (request_type) => request_type.approval_lists)
  @JoinColumn({ name: "request_type_id" })
  request_type_id?: number;

  @OneToMany(
    () => ApprovalListDetail,
    (approval_list_detail) => approval_list_detail.approval_list_id
  )
  approval_list_details: ApprovalListDetail[];
}
