import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <section className={`${classes.contact} section_gap section_padding`}>
      <Container>
        <div className="section_heading">
          <h2>Let's get started...</h2>
          <p>Tell us more about your marketing goals</p>
        </div>
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="fName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="company_website">
                <Form.Label>Company Website</Form.Label>
                <Form.Control type="text" placeholder="Company Website" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="iam">
                <Form.Label>I'm a...</Form.Label>
                <Form.Select aria-label="I'm a....">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="lName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
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
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" className="btn button-primary" size="lg">
              Get in touch
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
