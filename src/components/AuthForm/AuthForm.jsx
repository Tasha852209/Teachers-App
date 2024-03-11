import React, { useState } from 'react';
import { useFormik } from 'formik';

import togglePassword from 'utils/togglePassword';
import Icon from 'components/Icon/Icon';
import { registerSchema } from '../../schemas/authSchemas';
import {
  StyledAuthFormSpan,
  StyledModalContent,
  SubmitButton,
} from './AuthForm.styled';

const RegistrationForm = () => {
  const [passwordToggleInput, setPasswordToggleInput] = useState('password');
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      console.log('submit', values);
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
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </label>
          <label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </label>

          <label>
            <div className="eye-input">
              <input
                name="password"
                type={passwordToggleInput}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
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
              <div>{formik.errors.password}</div>
            ) : null}
          </label>
        </div>

        <SubmitButton type="submit">Sign Up</SubmitButton>
      </form>
    </StyledModalContent>
  );
};
export default RegistrationForm;
