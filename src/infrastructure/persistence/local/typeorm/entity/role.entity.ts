import { RoleEntityInterface } from 'domain/entity/role.entity';
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
import { Employee, RoleMenu, User } from '.';

@Entity()
export class Role implements RoleEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.roles, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.roles, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.roles, {
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
  @OneToMany(() => RoleMenu, (role_menu) => role_menu.role)
  role_menus: RoleMenu[];

  @OneToMany(() => Employee, (employee) => employee.role, {
    eager: false,
  })
  employees: Employee[];
}
