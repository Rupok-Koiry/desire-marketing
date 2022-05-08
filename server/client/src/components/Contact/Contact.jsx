import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import classes from "./Contact.module.css";
import toastCreator from "../../utils/toastifyCreator";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_db8idym",
        "template_irkfrmr",
        form.current,
        "-5JR_MnrgJYL0Me2V"
      )
      .then(
        (result) => {
          toastCreator("Email Sent Successfully!", "success");
          console.log(result.text);
          reset();
        },
        (error) => {
          toastCreator("Email Sent Failure!", "error");
          console.log(error.text);
        }
      );
  };

  return (
    <section className={`${classes.contact} section_gap section_padding`}>
      <Container>
        <div className="section_heading">
          <h2>Let's get started...</h2>
          <p>Tell us more about your marketing goals</p>
        </div>
        <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="fName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <span className="error">*First name is required</span>
                )}
              </Form.Group>

              <Form.Group className="mb-4" controlId="company_website">
                <Form.Label>Company Website</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company Website"
                  name="company_website"
                  {...register("company_website", { required: false })}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="iam">
                <Form.Label>I'm a...</Form.Label>
                <Form.Select
                  aria-label="I'm a...."
                  name="user_type"
                  {...register("user_type", { required: true })}
                >
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                {errors.user_type && (
                  <span className="error">*User Type is required</span>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="lName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <span className="error">*Last name is required</span>
                )}
              </Form.Group>

              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  {...register("user_email", { required: true })}
                />
                {errors.user_email && (
                  <span className="error">*Email is required</span>
                )}
              </Form.Group>
              <Form.Group className="mb-4" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Phone"
                  name="user_phone"
                  {...register("user_phone", { required: true })}
                />
                {errors.user_phone && (
                  <span className="error">*Phone Number is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-4" controlId="pleForm">
                <Form.Label>Write are your goals</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write are your goals"
                  name="user_goal"
                  {...register("user_goal", { required: true })}
                />
                {errors.user_goal && (
                  <span className="error">*This field is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" className="btn button-primary" size="lg">
              Get in touch
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </Container>
    </section>
  );
};

export default Contact;
