import { EmployeeEntityInterface } from 'domain/entity/employee.entity';
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
import { Company, Position, PositionLevel, Project, Role, User } from '.';
import { BusinessUnit } from 'infrastructure/persistence/local/typeorm/entity/business-unit.entity';

@Entity()
export class Employee implements EmployeeEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  @Column({ nullable: true })
  alias?: string;

  @Column({ nullable: true })
  position_name?: string;

  // @Column() FK
  @ManyToOne(() => Role, (role) => role.employees, { eager: false })
  role: Role;

  // @Column() FK
  @ManyToOne(() => Position, (position) => position.employees, { eager: false })
  position: Position;

  // @Column() FK
  @ManyToOne(
    () => PositionLevel,
    (position_level) => position_level.employees,
    { eager: false },
  )
  position_level: PositionLevel;

  // @Column() FK
  @ManyToOne(() => BusinessUnit, (business_unit) => business_unit.employees, {
    eager: false,
  })
  business_unit: BusinessUnit;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.employees, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.employees, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.employees, {
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

  // Relation
  @OneToMany(() => Company, (company) => company.director)
  companies: Company[];

  // Relation
  @OneToMany(() => BusinessUnit, (business_units) => business_units.director)
  business_units: BusinessUnit[];

  // Relation
  @OneToMany(() => Project, (project) => project.sales_id)
  projects: Project[];
}
