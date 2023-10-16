import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  dob: yup.date().required(),
  gender: yup.string().required(),
  medical_history: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  insurance_provider_id: yup.string().nullable().required(),
});
