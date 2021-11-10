import { PositionEntityInterface } from 'domain/entity/position.entity';
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
import { Employee, User } from '.';

@Entity()
export class Position implements PositionEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.positions, {
    eager: false,
  })
  @JoinColumn({ name: 'created_by' })
  created_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.positions, {
    eager: false,
  })
  @JoinColumn({ name: 'updated_by' })
  updated_by?: User;

  // @Column() FK
  @ManyToOne(() => User, (user) => user.positions, {
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
  @OneToMany(() => Employee, (employee) => employee.position, {
    eager: false,
  })
  employees: Employee[];
}
