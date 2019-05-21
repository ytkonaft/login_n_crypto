import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './index.scss';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const Signup = ({ handleLogin }) => {
  const handleSubmit = (userData, { setStatus, resetForm }) => {
    handleLogin(userData).catch((err) => {
      setStatus(err.response.data.message);
    });
  };

  const validatedFrom = touched => (Object.keys(touched).length ? 'was-validated' : '');

  const fieldClass = (errors, touched, nameField) => {
    if (errors[nameField] === undefined && touched[nameField] === undefined) {
      return '';
    }
    if (errors[nameField] && touched[nameField] === true) {
      return 'is-invalid';
    }
    return 'is-valid';
  };

  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, status }) => (
          <Form className={`needs-validation ${validatedFrom(touched)}`}>
            <div className="form-group">
              <label>Email address</label>
              <Field
                type="email"
                name="email"
                className={fieldClass(errors, touched, 'email')}
                placeholder="Enter email"
              />

              {errors.email && touched.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                className={fieldClass(errors, touched, 'password')}
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            {status && <div className="invalid-feedback">{status}</div>}
            <button className="btn" type="submit">
              LogIn
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Signup;
