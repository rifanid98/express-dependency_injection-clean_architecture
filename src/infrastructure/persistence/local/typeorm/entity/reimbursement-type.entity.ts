import { ReimbursementTypeEntityInterface } from "core/entity/reimbursement-type.entity";
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
import { ReimbursementBenefit, ReimbursementRequest, User } from ".";

@Entity()
export class ReimbursementType implements ReimbursementTypeEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column()
  name?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_types, {
    eager: false,
  })
  @JoinColumn({ name: "created_by" })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_types, {
    eager: false,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_types, {
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
    () => ReimbursementBenefit,
    (rimbrsbnft) => rimbrsbnft.reimbursement_type_id
  )
  reimbursement_benefits: ReimbursementBenefit[];

  @OneToMany(
    () => ReimbursementRequest,
    (rimbrsbnft) => rimbrsbnft.reimbursement_type_id
  )
  reimbursement_requests: ReimbursementRequest[];
}
