import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Form, Container, Row, Col, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContext } from "../../store/auth-context";
import classes from "../Form.module.css";
import MainLayout from "../Layouts/MainLayout";
import toastCreator from "../../utils/toastifyCreator";
import "react-toastify/dist/ReactToastify.css";

//Form validation schema
const schema = yup.object().shape({
  name: yup.string().required("*Name is required!"),
  email: yup
    .string()
    .email("*Email is invalid!")
    .required("*Email is required!"),
  password: yup
    .string()
    .required("*Password is required!")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("*Confirm Password is required!")
    .oneOf([yup.ref("password")], "*Passwords must match!"),
});
const Register = () => {
  const { setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //Form submit handler
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/signup",
        formData
      );
      setUser(response.data.data.user);
      localStorage.setItem("JWT", response.data.token);
    } catch (error) {
      toastCreator("Email is already exist!", "error");
      console.log(error.response.data.message);
    }
  };

  return (
    <MainLayout>
      <section
        className={`page_gap d-flex justify-content-center align-items-center`}
      >
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <Form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h2>Create an account</h2>
                <FloatingLabel label="Name" className={`${classes.label} mb-3`}>
                  <Form.Control
                    placeholder="Name"
                    className={classes.input}
                    {...register("name")}
                  />
                  {errors.name && (
                    <small className="error">{errors.name.message}</small>
                  )}
                </FloatingLabel>
                <FloatingLabel
                  label="Email"
                  className={`${classes.label} mb-3`}
                >
                  <Form.Control
                    placeholder="Email"
                    className={classes.input}
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <small className="error">{errors.email.message}</small>
                  )}
                </FloatingLabel>
                <FloatingLabel
                  label="Password"
                  className={`${classes.label} mb-3`}
                >
                  <Form.Control
                    placeholder="Password"
                    className={classes.input}
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <small className="error">{errors.password.message}</small>
                  )}
                </FloatingLabel>

                <FloatingLabel
                  label="Confirm Password"
                  className={`${classes.label} mb-3`}
                >
                  <Form.Control
                    placeholder="Confirm Password"
                    className={classes.input}
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword?.message && (
                    <small className="error">
                      {errors.confirmPassword.message}
                    </small>
                  )}
                </FloatingLabel>

                <button
                  type="submit"
                  className={`btn button-primary ${classes.formSubmitBtn}`}
                >
                  Create an account
                </button>
                {/* Toggle login */}
                <p className={`text-center ${classes.haveAccount}`}>
                  Already have an account?{" "}
                  <Link to="/login" className={`${classes.forgotPassword}`}>
                    Login
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </section>
    </MainLayout>
  );
};

export default Register;
