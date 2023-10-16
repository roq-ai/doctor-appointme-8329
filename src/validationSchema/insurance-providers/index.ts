import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  company_name: yup.string().required(),
  coverage_details: yup.string().required(),
  contact_info: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
