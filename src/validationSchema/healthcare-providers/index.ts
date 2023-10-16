import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  years_of_experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
