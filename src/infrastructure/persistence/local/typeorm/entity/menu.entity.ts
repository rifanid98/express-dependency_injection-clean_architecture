import { MenuEntityInterface } from 'domain/entity/menu.entity';
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
import { RoleMenu, User } from '.';

@Entity()
export class Menu implements MenuEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;

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

  // Relation
  @OneToMany(() => RoleMenu, (role_menu) => role_menu.menu)
  role_menus: RoleMenu[];
}
