import {
  BloodType,
  Gender,
  IdentityType,
  MaritalStatus,
  Religion,
  UserEntityInterface,
} from 'domain/entity/user.entity';
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
} from 'typeorm';
import {
  ApprovalList,
  ApprovalListDetail,
  ApprovalRule,
  ApprovalRuleType,
  ApprovalSetting,
  ApprovalSettingType,
  BusinessUnit,
  Company,
  Customer,
  Employee,
  Menu,
  Position,
  PositionLevel,
  ReimbursementBenefit,
  ReimbursementRequest,
  ReimbursementRequestDetail,
  ReimbursementType,
  RequestType,
  Role,
  RoleMenu,
} from '.';

@Entity()
export class User implements UserEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  password?: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column({ nullable: true })
  birth_place?: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  birth_date?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({
    type: 'enum',
    enum: MaritalStatus,
    default: MaritalStatus.SINGLE,
  })
  marital_status?: MaritalStatus;

  @Column({
    type: 'enum',
    enum: Religion,
    default: null,
    nullable: true,
  })
  religion?: Religion;

  @Column({ nullable: true })
  identity_number?: string;

  @Column({
    type: 'enum',
    enum: IdentityType,
    default: null,
    nullable: true,
  })
  identity_type?: IdentityType;

  @Column({
    type: 'date',
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
    type: 'enum',
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

  @OneToMany(() => BusinessUnit, (business_unit) => business_unit.created_by)
  @OneToMany(() => BusinessUnit, (business_unit) => business_unit.updated_by)
  @OneToMany(() => BusinessUnit, (business_unit) => business_unit.deleted_by)
  business_units: BusinessUnit[];

  @OneToMany(() => Company, (company) => company.created_by)
  @OneToMany(() => Company, (company) => company.updated_by)
  @OneToMany(() => Company, (company) => company.deleted_by)
  companies: Company[];

  @OneToMany(() => Employee, (employee) => employee.created_by)
  @OneToMany(() => Employee, (employee) => employee.updated_by)
  @OneToMany(() => Employee, (employee) => employee.deleted_by)
  employees: Employee[];

  @OneToMany(() => Menu, (menu) => menu.created_by)
  @OneToMany(() => Menu, (menu) => menu.updated_by)
  @OneToMany(() => Menu, (menu) => menu.deleted_by)
  menus: Menu[];

  @OneToMany(() => Position, (position) => position.created_by)
  @OneToMany(() => Position, (position) => position.updated_by)
  @OneToMany(() => Position, (position) => position.deleted_by)
  positions: Position[];

  @OneToMany(() => PositionLevel, (position_level) => position_level.created_by)
  @OneToMany(() => PositionLevel, (position_level) => position_level.updated_by)
  @OneToMany(() => PositionLevel, (position_level) => position_level.deleted_by)
  position_levels: PositionLevel[];

  @OneToMany(() => Role, (role) => role.created_by)
  @OneToMany(() => Role, (role) => role.updated_by)
  @OneToMany(() => Role, (role) => role.deleted_by)
  roles: Role[];

  @OneToMany(() => RoleMenu, (role_menu) => role_menu.created_by)
  @OneToMany(() => RoleMenu, (role_menu) => role_menu.updated_by)
  @OneToMany(() => RoleMenu, (role_menu) => role_menu.deleted_by)
  role_menus: RoleMenu[];

  @OneToMany(() => RequestType, (req_type) => req_type.created_by)
  @OneToMany(() => RequestType, (req_type) => req_type.updated_by)
  @OneToMany(() => RequestType, (req_type) => req_type.deleted_by)
  request_types: RequestType[];

  @OneToMany(() => ReimbursementType, (reimbrse_typ) => reimbrse_typ.created_by)
  @OneToMany(() => ReimbursementType, (reimbrse_typ) => reimbrse_typ.updated_by)
  @OneToMany(() => ReimbursementType, (reimbrse_typ) => reimbrse_typ.deleted_by)
  reimbursement_types: ReimbursementType[];

  @OneToMany(() => ReimbursementBenefit, (rimbrsbnft) => rimbrsbnft.created_by)
  @OneToMany(() => ReimbursementBenefit, (rimbrsbnft) => rimbrsbnft.updated_by)
  @OneToMany(() => ReimbursementBenefit, (rimbrsbnft) => rimbrsbnft.deleted_by)
  reimbursement_benefits: ReimbursementBenefit[];

  @OneToMany(() => ReimbursementRequest, (rimbrsereq) => rimbrsereq.created_by)
  @OneToMany(() => ReimbursementRequest, (rimbrsereq) => rimbrsereq.updated_by)
  @OneToMany(() => ReimbursementRequest, (rimbrsereq) => rimbrsereq.deleted_by)
  reimbursement_requests: ReimbursementRequest[];

  @OneToMany(() => ReimbursementRequestDetail, (rrd) => rrd.created_by)
  @OneToMany(() => ReimbursementRequestDetail, (rrd) => rrd.updated_by)
  @OneToMany(() => ReimbursementRequestDetail, (rrd) => rrd.deleted_by)
  reimbursement_request_details: ReimbursementRequestDetail[];

  @OneToMany(() => ApprovalList, (approval_list) => approval_list.created_by)
  @OneToMany(() => ApprovalList, (approval_list) => approval_list.updated_by)
  @OneToMany(() => ApprovalList, (approval_list) => approval_list.deleted_by)
  approval_lists: ApprovalList[];

  @OneToMany(() => ApprovalListDetail, (aprvlstdtl) => aprvlstdtl.created_by)
  @OneToMany(() => ApprovalListDetail, (aprvlstdtl) => aprvlstdtl.updated_by)
  @OneToMany(() => ApprovalListDetail, (aprvlstdtl) => aprvlstdtl.deleted_by)
  approval_list_details: ApprovalListDetail[];

  @OneToMany(() => ApprovalSetting, (approval_sett) => approval_sett.created_by)
  @OneToMany(() => ApprovalSetting, (approval_sett) => approval_sett.updated_by)
  @OneToMany(() => ApprovalSetting, (approval_sett) => approval_sett.deleted_by)
  approval_settings: ApprovalSetting[];

  @OneToMany(() => ApprovalSettingType, (aprsettype) => aprsettype.created_by)
  @OneToMany(() => ApprovalSettingType, (aprsettype) => aprsettype.updated_by)
  @OneToMany(() => ApprovalSettingType, (aprsettype) => aprsettype.deleted_by)
  approval_setting_types: ApprovalSettingType[];

  @OneToMany(() => ApprovalRule, (approval_rules) => approval_rules.created_by)
  @OneToMany(() => ApprovalRule, (approval_rules) => approval_rules.updated_by)
  @OneToMany(() => ApprovalRule, (approval_rules) => approval_rules.deleted_by)
  approval_rules: ApprovalRule[];

  @OneToMany(() => ApprovalRuleType, (aprvruletype) => aprvruletype.created_by)
  @OneToMany(() => ApprovalRuleType, (aprvruletype) => aprvruletype.updated_by)
  @OneToMany(() => ApprovalRuleType, (aprvruletype) => aprvruletype.deleted_by)
  approval_rule_types: ApprovalRuleType[];

  @OneToMany(() => Customer, (customer) => customer.created_by)
  @OneToMany(() => Customer, (customer) => customer.updated_by)
  @OneToMany(() => Customer, (customer) => customer.deleted_by)
  customers: Customer[];
}
