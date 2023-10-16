import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  user_id: string;
  company_name: string;
  coverage_details: string;
  contact_info: string;
  created_at?: any;
  updated_at?: any;
  patient?: PatientInterface[];
  user?: UserInterface;
  _count?: {
    patient?: number;
  };
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_name?: string;
  coverage_details?: string;
  contact_info?: string;
}
