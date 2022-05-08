import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Partner.module.css";
const Partner = () => {
  return (
    <section className={`${classes.partner} section_gap section_padding`}>
      <Container>
        <Row className="align-items-center">
          <Col sm={5}>
            <div className={classes.trust_detail}>
              <div className="section_heading">
                <h3 className="colorful">Come - Partner with us!</h3>
              </div>
              <p>
                Our streamlined work processes have helped brands chase ranks,
                survive them and add value to people’s search queries.
              </p>
            </div>
          </Col>
          <Col sm={7}>
            <div className={classes.logos}>
              <ul>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/disnep-white.svg"
                    alt="Disney White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/national-geo-white.svg"
                    alt="National Geographics White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/dhl-white.svg"
                    alt="DHL White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/oracle-white.svg"
                    alt="Oracle White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/centure-fox-white.svg"
                    alt="21st Century Fox White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/ogivly-white.svg"
                    alt="Ogivly White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/rc-white.svg"
                    alt="RC White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/amazone-white.png"
                    alt="Amazon White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/jxt-white.svg"
                    alt="JXT White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/airtasker-white.svg"
                    alt="Airtasker White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/ribs-white.svg"
                    alt="Ribs&amp;Burger White Logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.uplers.com/wp-content/themes/uplers/assets/images/hire-dedicated-team/ww-white.svg"
                    alt="WW White Logo"
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partner;
