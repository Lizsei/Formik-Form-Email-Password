import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Username should be an email')
    .required('Field required'),
  password: Yup.string()
    .required('Field required'),
});

function App() {
  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert('Login Successful');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="emailField">Email</label>
              <Field type="email" name="email" id="emailField" />
              <div id="emailError">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div>
              <label htmlFor="pswField">Password</label>
              <Field type="password" name="password" id="pswField" />
              <div id="pswError">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button type="submit" id="submitBtn" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
