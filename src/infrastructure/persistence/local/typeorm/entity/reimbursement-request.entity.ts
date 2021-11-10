import { ReimbursementRequestEntityInterface } from 'domain/entity/reimbursement-request.entity';
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
export class ReimbursementRequest
  implements ReimbursementRequestEntityInterface
{
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  reimbursement_type: string;

  @Column({ nullable: true })
  notes?: string;

  @Column({ nullable: true })
  file?: string;

  @Column({ default: 0 })
  total?: number;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_requests, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_requests, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.reimbursement_requests, {
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
    (reimbursement_type) => reimbursement_type.reimbursement_requests,
  )
  @JoinColumn({ name: 'reimbursement_type_id' })
  reimbursement_type_id?: number;

  @OneToMany(
    () => ReimbursementRequestDetail,
    (reimbursement_request_detail) =>
      reimbursement_request_detail.reimbursement_request_id,
  )
  reimbursement_request_details: ReimbursementRequestDetail[];
}
