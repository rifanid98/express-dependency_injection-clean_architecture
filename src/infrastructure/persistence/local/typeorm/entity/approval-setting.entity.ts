import { ApprovalSettingEntityInterface } from "core/entity/approval-setting.entity";
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
import { ApprovalRule, ApprovalSettingType, RequestType, User } from ".";

@Entity()
export class ApprovalSetting implements ApprovalSettingEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  request_type?: string;

  @Column({ nullable: true })
  approval_setting_type?: string;

  @Column({ nullable: true })
  value?: string;

  @Column({ nullable: true })
  auto_ascend?: boolean;

  @Column({ nullable: true })
  no_approval?: boolean;

  @Column({ nullable: true })
  position_order?: number;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_settings, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_settings, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_settings, {
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
    () => RequestType,
    (request_type) => request_type.approval_settings
  )
  @JoinColumn({ name: "request_type_id" })
  request_type_id?: number;

  @ManyToOne(
    () => ApprovalSettingType,
    (approval_setting_type) => approval_setting_type.approval_settings
  )
  @JoinColumn({ name: "approval_setting_type_id" })
  approval_setting_type_id?: number;

  @OneToMany(
    () => ApprovalRule,
    (approval_rule) => approval_rule.approval_setting_id
  )
  approval_rules: ApprovalRule[];
}
