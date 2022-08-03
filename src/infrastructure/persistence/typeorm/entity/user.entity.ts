import {
  BloodType,
  Gender,
  IdentityType,
  MaritalStatus,
  Religion,
  UserEntityInterface,
} from "core/entity/user.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "./index";

@Entity()
export class User implements UserEntityInterface {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  password?: string;

  @Column({
    type: "enum",
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column({ nullable: true })
  birth_place?: string;

  @Column({
    type: "date",
    nullable: true,
  })
  birth_date?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({
    type: "enum",
    enum: MaritalStatus,
    default: MaritalStatus.SINGLE,
  })
  marital_status?: MaritalStatus;

  @Column({
    type: "enum",
    enum: Religion,
    default: null,
    nullable: true,
  })
  religion?: Religion;

  @Column({ nullable: true })
  identity_number?: string;

  @Column({
    type: "enum",
    enum: IdentityType,
    default: null,
    nullable: true,
  })
  identity_type?: IdentityType;

  @Column({
    type: "date",
    nullable: true,
  })
  identity_expiration_date?: string;

  @Column({ nullable: true })
  identity_address?: string;

  @Column({ nullable: true })
  identity_postal_code?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  postal_code?: string;

  @Column({
    type: "enum",
    enum: BloodType,
    default: null,
    nullable: true,
  })
  blood_type?: BloodType;

  @Column({ default: false })
  authenticator?: boolean;

  @Column({ nullable: true })
  authenticator_secret?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @Column({ nullable: true })
  created_by?: number;

  @Column({ nullable: true })
  updated_by?: number;

  @Column({ nullable: true })
  deleted_by?: number;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(() => Role, (role) => role.created_by)
  @OneToMany(() => Role, (role) => role.updated_by)
  @OneToMany(() => Role, (role) => role.deleted_by)
  roles: Role[];
}
