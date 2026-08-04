import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  fName: Yup.string().trim().required('First name is required field.'),
  lName: Yup.string().trim().required('Last name is required field.'),
  email: Yup.string().trim().required().email('Email is not valid.'),
  phone: Yup.string()
    .trim()
    .min(7, 'Minimum phone number length is 7 characters.')
    .max(16, 'Maximum phone number length is 16 characters')
    .matches(/^\+*\d{1,4}[\d()-]+$/, 'Phone number is not valid.'),
});
