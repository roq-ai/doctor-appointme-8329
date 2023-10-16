import { PatientInterface } from 'interfaces/patient';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  patient_id: string;
  healthcare_provider_id: string;
  clinic_id: string;
  appointment_date: any;
  appointment_time: string;
  reason_for_visit?: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  healthcare_provider?: HealthcareProviderInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  healthcare_provider_id?: string;
  clinic_id?: string;
  appointment_time?: string;
  reason_for_visit?: string;
}
