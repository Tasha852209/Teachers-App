import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { loginSchema } from 'schemas/authSchemas';
import {
  StyledAuthFormSpan,
  StyledModalContent,
  SubmitButton,
} from './LoginForm.styled';
import togglePassword from 'utils/togglePassword';
import Icon from 'components/Icon/Icon';
import { useAuth } from '../../providers/AuthProvider';

const LoginForm = ({ setVisible }) => {
  const { userSignIn, error, setError } = useAuth();
  const [passwordToggleInput, setPasswordToggleInput] = useState('password');
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  useEffect(() => {
    setError(null);
  }, [setError]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      userSignIn(values.email, values.password, setVisible);
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

        <SubmitButton type="submit">Sign In</SubmitButton>
        <p className="error-main-red">{error ? error : ' '}</p>
      </form>
    </StyledModalContent>
  );
};

export default LoginForm;
