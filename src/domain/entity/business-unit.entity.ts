export interface BusinessUnitEntityInterface {
  id?: number;
  name?: string;
  hq_initial?: string;
  alias?: string;
  director_id?: number;
  logo?: string;
  signature?: string;
  address?: string;
  postal_code?: string;
  state_province?: string;
  city?: string;
  umr?: string;
  phone?: string;
  email?: string;
  bpjs_ketenagakerjaaan?: string;
  jkk?: string;
  npwp?: string;
  taxable_date?: string;
  tax_person_name?: string;
  tax_person_npwp?: string;
  klu_code?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class BusinessUnit implements BusinessUnitEntityInterface {
  id?: number;
  name?: string;
  hq_initial?: string;
  alias?: string;
  director_id?: number;
  logo?: string;
  signature?: string;
  address?: string;
  postal_code?: string;
  state_province?: string;
  city?: string;
  umr?: string;
  phone?: string;
  email?: string;
  bpjs_ketenagakerjaaan?: string;
  jkk?: string;
  npwp?: string;
  taxable_date?: string;
  tax_person_name?: string;
  tax_person_npwp?: string;
  klu_code?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
