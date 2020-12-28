import React from "react";
import "./Login.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../Component/TextError/TextError";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../Action/auth";

const Login = ({ isAuthenticated, login }) => {
  //initial values of form field in formik
  const initialValues = {
    username: "",
    password: "",
  };

  //validation rule for the form field in formik
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be atleas 4 characters")
      .matches(
        /(?=.*^[A-Za-z_]\w).*$/,
        "Username should begin with _ or alphabet "
      ),
    password: Yup.string()
      .required("Please Enter your password")
      .min(4, "Password should be atleast 4 characters"),
  });

  //submit handler for formik
  const onSubmit = (values) => {
    const { username, password } = values;
    const user = { username, password };
    login(user);
  };
  //for redirecting the user from login to dashboard
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="simple-login-container">
       <h2>Informative Site</h2>
    <div className="card shadow-lg p-3 mb-5 bg-white rounded mt-5 ">
  <div className="card-body">
  
      <h2 className="mb-2">Login Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="row">
                <div className="col-md-12 form-group">
                  <Field
                    type="text"
                    name="username"
                    className="form-control "
                    placeholder="Username"
                  />
                  <ErrorMessage name="username" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                <button
                  type="submit"
                  className="btn btn-block btn-login"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  LogIn
                </button>
              </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                <button
                  type="submit"
                  className="btn btn-block btn-login"
                >
                  Forget Password
                </button>
              </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  </div>
</div>
    
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
