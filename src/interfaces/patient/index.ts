import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  user_id: string;
  dob: any;
  gender: string;
  medical_history?: string;
  insurance_provider_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  insurance_provider?: InsuranceProviderInterface;
  _count?: {
    appointment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gender?: string;
  medical_history?: string;
  insurance_provider_id?: string;
}
