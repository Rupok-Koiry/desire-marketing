import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Help.module.css";
const Help = () => {
  return (
    <section className={`section_gap section_padding ${classes.help_sec}`}>
      <Container>
        <div className="section_heading">
          <h2>How Can We Help</h2>
          <p>We follow a simple three-step guest post link building process.</p>
        </div>
        <Row className="row">
          <Col sm={4} className={classes.help_card}>
            <h3>Order Placement</h3>
            <p>
              Place an order and provide us with an URL and anchor text. Our
              team will get in touch with you to discuss requirements and
              instructions, if any.
            </p>
          </Col>
          <Col sm={4} className={classes.help_card}>
            <h3>Prospecting &amp; Writing</h3>
            <p>
              Our native content writers will craft a unique copy and publish it
              on the blog with links back to your site.
            </p>
          </Col>
          <Col sm={4} className={classes.help_card}>
            <h3>White Label Reporting</h3>
            <p>
              After the article is published, we will send you guest post
              progress in the form of a{" "}
              <a href="https://www.uplers.com/white-label-agency/">
                white-label report
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Help;
