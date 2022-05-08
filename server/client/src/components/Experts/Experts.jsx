import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Experts.module.css";
import hand from "../../images/guest_posting/hand-icon.svg";
import clients from "../../images/guest_posting/clients-icon.svg";

const Experts = () => {
  return (
    <section className={`${classes.expert} section_gap`}>
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={6}>
            <div className={classes.content}>
              <div className="section_heading">
                <h3 className="colorful">Inbound Certified Experts</h3>
              </div>
              <p>
                We are inbound certiﬁed experts delivering guest posting
                services that are supported by quality content creation and
                fruitful partnerships with top websites. Our guest blogging
                services aren’t just focused on drawing trafﬁc but reaching the
                audience that converts.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className={classes.flexbox}>
              <img src={hand} alt="100+ Clients" />
              <h6>
                <strong>70+</strong> 70+ Google Certified Experts
              </h6>
            </div>
            <div className={classes.flexbox}>
              <img src={clients} alt="100+ Clients" />
              <h6>
                <strong>100+</strong> Clients
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experts;
