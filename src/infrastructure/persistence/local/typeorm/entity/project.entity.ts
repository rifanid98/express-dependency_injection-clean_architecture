import { ProjectEntityInterface } from 'domain/entity/project.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer, Employee, User } from '.';

@Entity()
export class Project implements ProjectEntityInterface {
  @PrimaryColumn({ nullable: false })
  id?: string;

  @Column({ nullable: true })
  sales?: string;

  @Column({ nullable: true })
  customer?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  nominal?: number;

  @Column({ nullable: true })
  contract_number_po?: string;

  @Column({ nullable: true })
  contract_start_date?: Date;

  @Column({ nullable: true })
  contract_end_date?: Date;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.menus, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.menus, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.menus, {
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

  // Relaltion
  @ManyToOne(() => Customer, (customer) => customer.projects)
  @JoinColumn({ name: 'customer_id' })
  customer_id: Customer;

  @ManyToOne(() => Employee, (employee) => employee.projects)
  @JoinColumn({ name: 'sales_id' })
  sales_id: Employee;

  // @OneToMany(() => KPISales, kpi_sales => kpi_sales.projects)
  // kpi_sales: KPISales;
}
