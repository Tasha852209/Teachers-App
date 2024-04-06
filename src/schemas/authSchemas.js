import * as Yup from 'yup';

export const registerSchema = () => {
  return Yup.object({
    name: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
};

export const loginSchema = () => {
  return Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
};

export const bookSchema = () => {
  return Yup.object({
    fullName: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(50, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    tel: Yup.string()
      .phone('Invalid phone number. Example')
      .required('Required')
      .required('Required'),
  });
};
