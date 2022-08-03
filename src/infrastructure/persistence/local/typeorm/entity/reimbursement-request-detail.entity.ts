import { ReimbursementRequestDetailEntityInterface } from "core/entity/reimbursement-request-detail.entity";
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
import { ReimbursementBenefit, ReimbursementRequest, User } from ".";

@Entity()
export class ReimbursementRequestDetail
  implements ReimbursementRequestDetailEntityInterface
{
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  reimbursement_benefit?: string;

  @Column({ nullable: true })
  request_amount?: number;

  @Column({ nullable: true })
  paid_amount?: number;

  @Column({ nullable: true })
  description?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_request_details, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_request_details, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_request_details, {
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
    () => ReimbursementBenefit,
    (reimbursement_benefit) =>
      reimbursement_benefit.reimbursement_request_details
  )
  @JoinColumn({ name: "reimbursement_benefit_id" })
  reimbursement_benefit_id;

  @ManyToOne(
    () => ReimbursementRequest,
    (reimbursement_request) =>
      reimbursement_request.reimbursement_request_details
  )
  @JoinColumn({ name: "reimbursement_request_id" })
  reimbursement_request_id;
}
