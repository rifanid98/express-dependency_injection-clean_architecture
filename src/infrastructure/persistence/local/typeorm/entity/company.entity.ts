import { CompanyEntityInterface } from 'domain/entity/company.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employee, User } from '.';

@Entity()
export class Company implements CompanyEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  @Column()
  alias?: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  bpjs_ketenagakerjaaan: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  hq_initial: string;

  @Column({ nullable: true })
  jkk: string;

  @Column({ nullable: true })
  klu_code: string;

  @Column({ nullable: true })
  npwp: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  state_province: string;

  @Column({ nullable: true })
  tax_person_name: string;

  @Column({ nullable: true })
  tax_person_npwp: string;

  @Column({ nullable: true })
  taxable_date: string;

  @Column({ nullable: true })
  umr: string;

  // @Column() FK
  @ManyToOne(() => Employee, (employee) => employee.companies)
  director?: Employee;

  @Column({ nullable: true })
  logo?: string;

  @Column({ nullable: true })
  signature?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.companies, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.companies, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.companies, {
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
}
