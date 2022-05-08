import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import serviceIcon_1 from "../../images/services/Layer-19@1X-1.png";
import serviceIcon_2 from "../../images/services/Layer-18@1X-1.png";
import serviceIcon_3 from "../../images/services/Layer-20@1X-1.png";
import serviceIcon_4 from "../../images/services/Layer-14@1X-1.png";
import serviceIcon_5 from "../../images/services/Layer-17@1X-1.png";
import serviceIcon_6 from "../../images/services/Layer-21@1X-1.png";
import serviceIcon_7 from "../../images/services/Premium-Backlinking.png";
import serviceIcon_8 from "../../images/services/Layer-23@1X-1.png";
import classes from "./Service.module.css";
const Service = () => {
  return (
    <section className={`${classes.service} section_gap section_padding`}>
      <Container>
        <div className="section_heading text-white">
          <h2>
            Delivering Nothing but{" "}
            <span className="highlight">Quality Links</span> to our{" "}
            <span className="highlight">Valued Customers</span>
          </h2>
          <p className="text-white">
            At Globex Outreach, we take pride in our performance-driven results
            that are based on our scientific approach to problem-solving.
          </p>
        </div>
        <Row className="gy-3">
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_1} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Guest Posting
                </Card.Title>
                <Card.Text>
                  Engaging and interesting guest posts published on relevant
                  high DA blogs with Do-Follow links that remain live for at
                  least one year.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_2} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Blogger Outreach
                </Card.Title>
                <Card.Text>
                  Our SEO Services links building agency finds and contacts
                  qualified websites for backlinks and makes affordable deals
                  with them on your behalf.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_3} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Link Building
                </Card.Title>
                <Card.Text>
                  Quality and relevant links that increase website traffic and
                  online authority, manually built by experienced SEO
                  professionals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_4} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Niche Edits
                </Card.Title>
                <Card.Text>
                  Get backlinks from already published niche-relevant, authority
                  blogs that will increase online authority and traffic of your
                  website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_5} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Infographic Creation
                </Card.Title>
                <Card.Text>
                  Build quality infographics that work as linkable assets and
                  get you natural backlinks while building your brand image as
                  an industry leader.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_6} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Premium Backlinking
                </Card.Title>
                <Card.Text>
                  Acquire impossible powerful backlinks from premium websites
                  that have a domain authority of 80+ to boost your SERP
                  rankings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_7} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  SEO Packages
                </Card.Title>
                <Card.Text>
                  We are a link building SEO Agency, creating and executing SEO
                  plans that bring visible results for our clients for over a
                  decade.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card className={classes.service_card}>
              <div>
                <Card.Img variant="top" src={serviceIcon_8} />
              </div>
              <Card.Body>
                <Card.Title className={classes.serviceTitle}>
                  Country Specific Links
                </Card.Title>
                <Card.Text>
                  In addition to guest posting and infographics creation, Globex
                  does full-fledged content marketing for its clients to ensure
                  their success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
