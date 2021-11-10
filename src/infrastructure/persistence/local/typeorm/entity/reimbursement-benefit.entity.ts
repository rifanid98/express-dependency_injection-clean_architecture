import { ReimbursementBenefitEntityInterface } from 'domain/entity/reimbursement-benefit.entity';
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
} from 'typeorm';
import { ReimbursementRequestDetail, ReimbursementType, User } from '.';

@Entity()
export class ReimbursementBenefit
  implements ReimbursementBenefitEntityInterface
{
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  @Column()
  reimbursement_type?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_benefits, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_benefits, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_benefits, {
    eager: false,
  })
  @JoinColumn({ name: 'deleted_by' })
  deleted_by?: User;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(
    () => ReimbursementType,
    (reimbursement_type) => reimbursement_type.reimbursement_benefits,
  )
  @JoinColumn({ name: 'reimbursement_type_id' })
  reimbursement_type_id?: number;

  @OneToMany(
    () => ReimbursementRequestDetail,
    (reimbursement_request_detail) =>
      reimbursement_request_detail.reimbursement_benefit_id,
  )
  @JoinColumn({ name: 'reimbursement_type_id' })
  reimbursement_request_details?: number;
}
