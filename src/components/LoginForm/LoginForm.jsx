import { useFormik } from 'formik';
import React, { useState } from 'react';
import { loginSchema } from 'schemas/authSchemas';
import {
  StyledAuthFormSpan,
  StyledModalContent,
  SubmitButton,
} from './LoginForm.styled';
import togglePassword from 'utils/togglePassword';
import Icon from 'components/Icon/Icon';
import { useAuth } from '../../providers/AuthProvider';

const LoginForm = () => {
  const { userSignIn, error } = useAuth();
  const [passwordToggleInput, setPasswordToggleInput] = useState('password');
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      userSignIn(values.email, values.password);
    },
  });

  return (
    <StyledModalContent>
      <div className="text">
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs">
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

        <SubmitButton type="submit">Sign In</SubmitButton>
        {error ? <p>{error}</p> : null}
      </form>
    </StyledModalContent>
  );
};

export default LoginForm;
