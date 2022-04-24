import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./WhatGuestPosting.module.css";
const WhatGuestPosting = () => {
  return (
    <section className={classes.what}>
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <div className={classes.what_content}>
              <div className="section_heading">
                <h3>What is Guest Posting Services?</h3>
              </div>
              <p>
                Guest posting/blogging services is a white hat link building
                technique that is one of the most genuine SEO strategies. It is
                an interesting concept where you write a blog and post it on
                someone else's site. It offers mutual benefits for guest
                bloggers and the website hosting the guest blogs. In other
                words, a guest blog posting service is a two-way street that
                helps build relationships with other thought brands in your
                field and provides exposure to your brand.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.what_img}>
              <img
                src="https://www.uplers.com/wp-content/themes/uplers/assets/images/guest-services/guest-post.jpg"
                alt="What is Guest Posting Services? "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatGuestPosting;
