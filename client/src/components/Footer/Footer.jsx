import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <Container>
        <Row gy={4}>
          <Col sm={6} lg={4} xl={3}>
            <h2 className={classes.footer_heading}>GLOBEX OUTREACH</h2>
            <p>
              GLOBEX OUTREACH At Globex Outreach, we have 10+ years of
              experience and expertise in keeping pace and delivering quality.
              We only deliver white hat services. Attaining excellence for every
              task and project we work on, is our motto since the very beginning
              and that is keeping us motivated from last 10 years.
            </p>
          </Col>
          <Col sm={6} lg={4} xl={2}>
            <h2 className={classes.footer_heading}>PAGES</h2>
            <ul>
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Refund Policy</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={4} xl={2}>
            <h2 className={classes.footer_heading}>SERVICES</h2>
            <ul>
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Refund Policy</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={4} xl={3}>
            <h2 className={classes.footer_heading}>GEO SPECIFIC LINKS</h2>
            <ul>
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Refund Policy</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={4} xl={2}>
            <h2 className={classes.footer_heading}>Contact</h2>
            <ul className={classes.contact_details}>
              <li>
                <h6>Phone Number :- </h6>
                <p>+1718-(618)-4834</p>
              </li>
              <li>
                <h6>Email :- </h6>
                <p>hello@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
