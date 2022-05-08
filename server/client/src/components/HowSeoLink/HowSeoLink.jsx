import React from "react";
import { Container } from "react-bootstrap";
import classes from "./HowSeoLink.module.css";
const HowSeoLink = () => {
  return (
    <section className={`${classes.how_seo_link} section_gap`}>
      <Container>
        <div className="section_heading">
          <h2>How Our SEO Link Building Agency Helps Your Business</h2>
        </div>
        <div className={classes.seo_link_container}>
          <p>
            At Globex Outreach, we don’t just talk but actually help you
            outclass competitors by securing high-quality and relevant links and
            brand mentions on authority sites that improve rankings, drive
            qualified traffic, and establish you as an authority. Our vast
            client base of 1000+ agencies and businesses proves that what we are
            doing, we are doing it right.
          </p>
          <p>
            We understand that engaging customers, generating convertible leads,
            increasing revenue, and topping SEPRs are hard to fit into one box.
            That’s why we have a hand-picked team of experts that manually
            outreach top tire, real blogs for the link placement that drives
            proven results. We are passionate about making your brand’s voice
            heard, so we never compromise on the quality of links and criteria
            for the site selection. That’s why our clients call us the best link
            building company – we can prove it to you too!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HowSeoLink;
