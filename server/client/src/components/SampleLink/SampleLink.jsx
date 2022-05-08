import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./SampleLink.module.css";
const SampleLink = () => {
  return (
    <section className={classes.what}>
      <Container>
        <Row className="align-items-center g-5 mb-5">
          <Col md={6}>
            <div className={classes.what_content}>
              <div className="section_heading">
                <h3 >
                  Exceptional Services for Real Time Results
                </h3>
              </div>
              <button className="btn button-primary">
                CHECK SAMPLE LINKS HERE
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.what_img}>
              <img
                src="https://www.uplers.com/wp-content/themes/uplers/assets/images/seo/new/reason-seo-partner.jpg"
                alt="What is Guest Posting Services? "
              />
            </div>
          </Col>
        </Row>
        <Row className={`${classes.content} g-4`}>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>Deeply Vetted Sites</h4>
              <p>
                Not every site becomes part of our guest posting site inventory.
                We look for various aspects of sites such as high domain
                authority, domain life, high organic traffic, indexed pages,
                traffic location, etc. Apart from metrics, we look for sites
                that have quality professional design and feel real.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>Contextual Links</h4>
              <p>
                We don't just put your link randomly anywhere in the content,
                understanding the significance of perfect link placement. We
                provide contextual backlinks that provide relevant traffic,
                authority, and exposure to your brand.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>In-Depth Content Creation</h4>
              <p>
                We truly believe that content is king. We have a team of native
                writers who keep your brand in the center at every stage,
                starting from content ideation, conceptualization to the
                creation and writing a copy that converts.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>Native Content Writers</h4>
              <p>
                The experienced and creative team of native content writers will
                create exclusive content with your backlinks. It will pass
                through rigorous quality checks, and we will run it through you
                before posting on the sites.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>Fast Turn-Around Time</h4>
              <p>
                We complete the whole process starting from research to posting
                within 30 days. We have guest posting experts who can build 100
                unique links per month. We work thoroughly to meet deadlines and
                provide you with a seamless experience.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.link_content}>
              <h4>100% Replacement Guarantee</h4>
              <p>
                We will replace the links if you may not like them, and we
                provide a 100% replacement guarantee of the removed links within
                a year.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SampleLink;
