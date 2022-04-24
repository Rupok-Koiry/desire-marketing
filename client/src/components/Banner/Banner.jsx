import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import classes from "./Banner.module.css";
const Banner = () => {
  return (
    <section className={classes.banner}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className={classes.banner_content}>
              <h1>Results Driven Search Marketing Agency</h1>
              <p>
                Our amazing team supports both strategic agencies and a vast
                array of retail clients on their journey to search marketing and
                digital marketing success.
              </p>
              <div className={classes.banner_buttons}>
                <Button className="btn button-primary me-3" size="lg">
                  Work With Us
                </Button>{" "}
                <Button className="btn button-secondary" size="lg">
                  Order Online
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
