import { ApprovalRuleEntityInterface } from "core/entity/approval-rule.entity";
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
import { ApprovalRuleType, ApprovalSetting, User } from ".";

@Entity()
export class ApprovalRule implements ApprovalRuleEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  approval_rule_type?: string;

  @Column({ nullable: true })
  request_type?: string; // Requester/Requested ?

  @Column({ nullable: true })
  value?: string;

  @Column({ nullable: true })
  position_order?: number;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_rules, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_rules, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.approval_rules, {
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
    () => ApprovalRuleType,
    (approval_rule_type) => approval_rule_type.approval_rules
  )
  @JoinColumn({ name: "approval_rule_type_id" })
  approval_rule_type_id?: number;

  @ManyToOne(
    () => ApprovalSetting,
    (approval_setting) => approval_setting.approval_rules
  )
  @JoinColumn({ name: "approval_setting_id" })
  approval_setting_id?: number;
}
