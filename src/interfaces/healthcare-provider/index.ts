import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  user_id: string;
  specialization: string;
  years_of_experience: number;
  clinic_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {
    appointment?: number;
  };
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  specialization?: string;
  clinic_id?: string;
}
