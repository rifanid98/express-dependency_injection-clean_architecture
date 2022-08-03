export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export enum MaritalStatus {
  MARRIED = "married",
  SINGLE = "single",
  WIDOW = "widow",
  WIDOWER = "widower",
}

export enum Religion {
  ISLAM = "islam",
  CHRISTIANITY = "christianity",
  PROTESTANTISM = "protestantism",
  HINDUISM = "hinduism",
  BUDDHISM = "buddhism",
  CONFUCIANISM = "confucianism",
  OTHER = "other",
}

export enum IdentityType {
  KTP = "KTP",
  SIM = "SIM",
  KK = "KK",
  OTHER = "other",
}

export enum BloodType {
  A = "A",
  A_POSITIVE = "A+",
  A_NEGATIVE = "A-",
  B = "B",
  B_POSITIVE = "B+",
  B_NEGATIVE = "B-",
  O = "O",
  O_POSITIVE = "O+",
  O_NEGATIVE = "O-",
  AB = "AB",
  AB_PABSITIVE = "AB+",
  AB_NEGATIVE = "AB-",
}

export interface UserEntityInterface {
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
