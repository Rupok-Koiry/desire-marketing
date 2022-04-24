import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./GuestPostService.module.css";
import ranking from "../../images/guest_posting/ranking-icon.png";
import backlinks from "../../images/guest_posting/backlinks.png";
import traffic from "../../images/guest_posting/traffic-icon.png";
import searchEngine from "../../images/guest_posting/search-engine-icon.png";
import credibility from "../../images/guest_posting/credibility.png";
import brand from "../../images/guest_posting/brand-icon.png";

const GuestPostService = () => {
  return (
    <section
      className={`section_gap ${classes.guest_post_service} section_padding`}
    >
      <Container>
        <Row className="g-4">
          <div className="section_heading">
            <h2>Benefits of Guest Post Services</h2>
            <p>
              Considering hiring a professional Guest Posting Services/Blogger
              Outreach Services? <br /> Check out the benefits below and make
              the final decision:
            </p>
          </div>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={ranking} alt="Improves Your Ranking" />
                <h4 className={classes.icon_title}>Improves Your Ranking</h4>
                <p>
                  Guest posting services will help you secure links from various
                  popular blogs to improve your search engine ranking.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={searchEngine} alt="Improves Your Ranking" />
                <h4 className={classes.icon_title}>
                  Domain & Search Engine Authority
                </h4>
                <p>
                  Blogger outreach services will help you build your domain name
                  and search engine authority.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={traffic} alt="Google Analytics Configuration Icon" />
                <h4 className={classes.icon_title}>Quality Traffic</h4>
                <p>
                  With guest blogging services, you can get relevant traffic on
                  your website and grow your potential customer base.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={brand} alt="Link Building Icon" />
                <h4 className={classes.icon_title}>Brand Awareness</h4>
                <p>
                  Guest blog posting services will provide wide exposure to your
                  brand by having it mentioned on various blogs.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={backlinks} alt="SEO Audits Icon" />
                <h4 className={classes.icon_title}>Link Building</h4>
                <p>
                  Our Guest posting services help companies/agencies acquire
                  backlinks through high quality link building activities.It
                  will boost your SEO ranking and increase your online
                  influence.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className={classes.item}>
              <div className={classes.icon_box}>
                <img src={credibility} alt="Content Support Icon" />
                <h4 className={classes.icon_title}>Credibility</h4>
                <p>
                  Consumers like to check the online presence and portrayal of
                  your brand. Blogger outreach services help to post blogs on
                  various websites, improving your credibility.
                </p>
              </div>
            </div>
          </Col>
          <div className="text-center">
            <button className={`btn button-primary`}>SCHEDULE A CALL</button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default GuestPostService;
