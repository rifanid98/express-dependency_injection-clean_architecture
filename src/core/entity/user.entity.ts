import {
  BloodType,
  Gender,
  MaritalStatus,
  Religion,
  IdentityType,
} from "../constant/app.constant";

interface UserEntityInterface {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  gender?: Gender;
  birth_place?: string;
  birth_date?: string;
  phone?: string;
  marital_status?: MaritalStatus;
  religion?: Religion;
  identity_number?: string;
  identity_type?: IdentityType;
  identity_expiration_date?: string;
  identity_address?: string;
  identity_postal_code?: string;
  address?: string;
  postal_code?: string;
  blood_type?: BloodType;
  authenticator?: boolean;
  authenticator_secret?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class User implements UserEntityInterface {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  gender?: Gender;
  birth_place?: string;
  birth_date?: string;
  phone?: string;
  marital_status?: MaritalStatus;
  religion?: Religion;
  identity_number?: string;
  identity_type?: IdentityType;
  identity_expiration_date?: string;
  identity_address?: string;
  identity_postal_code?: string;
  address?: string;
  postal_code?: string;
  blood_type?: BloodType;
  authenticator?: boolean;
  authenticator_secret?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
