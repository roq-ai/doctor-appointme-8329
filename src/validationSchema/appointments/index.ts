import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  appointment_date: yup.date().required(),
  appointment_time: yup.string().required(),
  reason_for_visit: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  healthcare_provider_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
