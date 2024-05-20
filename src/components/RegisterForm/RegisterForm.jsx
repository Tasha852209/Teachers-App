import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { registerSchema } from 'schemas/authSchemas';
import {
  StyledAuthFormSpan,
  StyledModalContent,
  SubmitButton,
} from './RegisterForm.styled';
import togglePassword from 'utils/togglePassword';
import Icon from 'components/Icon/Icon';
import { useAuth } from '../../providers/AuthProvider';

const RegisterForm = ({ setVisible }) => {
  const { userSignUp, error, setError } = useAuth();
  const [passwordToggleInput, setPasswordToggleInput] = useState('password');
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  useEffect(() => {
    setError(null);
  }, [setError]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      userSignUp(values.email, values.password, setVisible);
    },
  });
  return (
    <StyledModalContent>
      <div className="text">
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs">
          <label>
            <span
              className={formik.errors.name ? 'gap-error' : 'gap-normal'}
            ></span>
            <input
              className={
                formik.errors.name ? 'input-red input' : 'input-black input'
              }
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-red">{formik.errors.name}</div>
            ) : (
              <div className="empty"> </div>
            )}
          </label>
          <label>
            <span
              className={formik.errors.email ? 'gap-error' : 'gap-normal'}
            ></span>
            <input
              className={
                formik.errors.email ? 'input-red input' : 'input-black input'
              }
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-red">{formik.errors.email}</div>
            ) : (
              <div className="empty"> </div>
            )}
          </label>

          <label>
            <span
              className={formik.errors.password ? 'gap-error' : 'gap-normal'}
            ></span>
            <div className="eye-input">
              <input
                className={
                  formik.errors.password
                    ? 'input-red input'
                    : 'input-black input'
                }
                name="password"
                type={passwordToggleInput}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
                autoComplete="current-password"
              />

              <StyledAuthFormSpan
                onClick={() =>
                  togglePassword(
                    passwordToggleInput,
                    setPasswordToggleInput,
                    setPasswordToggleIcon
                  )
                }
              >
                {passwordToggleIcon ? (
                  <Icon className="eye-icon" id="eye" />
                ) : (
                  <Icon className="eye-outline-icon" id="eye-outline" />
                )}
              </StyledAuthFormSpan>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error-red">{formik.errors.password}</div>
            ) : (
              <div className="empty"> </div>
            )}
          </label>
        </div>

        <SubmitButton type="submit">Sign Up</SubmitButton>
        <p className="error-main-red">{error ? error : ' '}</p>
      </form>
    </StyledModalContent>
  );
};
export default RegisterForm;
