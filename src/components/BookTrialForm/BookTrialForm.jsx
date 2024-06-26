import { SubmitButton } from 'components/RegisterForm/RegisterForm.styled';
import { useFormik } from 'formik';
import { useAuth } from 'providers';
import React from 'react';
import { bookSchema } from 'schemas/authSchemas';
import {
  StyledModalBookContent,
  StyledSelectedTeacher,
} from './BookTrialForm.styled';
import { Notify } from 'notiflix';

const BookTrialForm = ({ setVisible, teacher }) => {
  const { user, error } = useAuth();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      reason: 'Career and business', 
    },
    validationSchema: bookSchema,
    // onSubmit: values => {
    //   userSignUp(values.email, values.password, setVisible);
    // },
  });

  return (
    <StyledModalBookContent>
      <div className="text">
        <h2>Book trial lesson</h2>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <StyledSelectedTeacher>
        <div className="img-text">
          <img id="teacher-img" src={teacher.avatar_url} alt={teacher.name} />
          <div className="teacher-text">
            <p className="text-your-teacher">Your teacher</p>
            <p className="teacher-name">
              {teacher.name} {teacher.surname}
            </p>
          </div>
        </div>
      </StyledSelectedTeacher>

      <p className="question">What is your main reason for learning English?</p>

      <form onSubmit={formik.handleSubmit}>
        <div className="inputs">
          <div id="radio-inputs">
            <label className="radio-label">
              <input
                name="reason"
                type="radio"
                onChange={formik.handleChange}
                checked={formik.values.reason === 'Career and business'}
                value="Career and business"
              />
              <span>Career and business</span>
            </label>

            <label className="radio-label">
              <input
                name="reason"
                type="radio"
                onChange={formik.handleChange}
                checked={formik.values.reason === 'Lesson for kids'}
                value="Lesson for kids"
              />
              <span>Lesson for kids</span>
            </label>

            <label className="radio-label">
              <input
                name="reason"
                type="radio"
                onChange={formik.handleChange}
                checked={formik.values.reason === 'Living abroad'} 
                value="Living abroad"
              />
              <span>Living abroad</span>
            </label>

            <label className="radio-label">
              <input
                name="reason"
                type="radio"
                onChange={formik.handleChange}
                checked={formik.values.reason === 'Exams and coursework'}
                value="Exams and coursework"
              />
              <span>Exams and coursework</span>
            </label>

            <label className="radio-label">
              <input
                className="radio-input"
                name="reason"
                type="radio"
                onChange={formik.handleChange}
                checked={formik.values.reason === 'Culture, travel or hobby'} 
                value="Culture, travel or hobby"
              />
              <span>Culture, travel or hobby</span>
            </label>
          </div>

          <label>
            <input
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              placeholder="Full Name"
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
            <div className="">
              <input
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Phone Number"
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </label>
        </div>

        <SubmitButton
          type="submit"
          onClick={() =>
            user
              ? (window.location.href = 'tel:+380730000000')
              : Notify.warning('Please signIn or signUp!')
          }
        >
          Book
        </SubmitButton>
        {error ? <p>{error}</p> : null}
      </form>
    </StyledModalBookContent>
  );
};

export default BookTrialForm;
