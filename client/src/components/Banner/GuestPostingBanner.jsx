import React from "react";
import classes from "./GuestPostingBanner.module.css";

const GuestPostingBanner = () => {
  return (
    <section className={classes.guest_posting_banner}>
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-7">
            <div className={classes.content}>
              <h1>
                Link Building Services <br /> Made Easy
              </h1>
              <p>
                As a link building services company, we help brands create
                growth-driven link building strategies. This enables brands to
                draw great backlinks from high DA websites and reach the right
                audience. Increase your search engine ranking with our white hat
                link building services via blogger outreach, resource link
                building, brand mentions and infographic submission. Our link
                building strategy can boost your website's overall SEO
                performance with our experts’ high-quality link building.
              </p>
              <p>
                As a link building services company, we make efforts to publish
                excellent and helpful content and ensure that it reaches the
                right audience using the proper channels. Our link building
                services and amplification proposition develop brand awareness,
                build long-lasting relations and better business outcomes.
              </p>
              <button className="btn button-secondary">
                Request A Callback
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.banner_form_container}>
              <h2>Want to kickstart your first Link Building Project?</h2>
              <p>(no contracts, no commitments)</p>
              <form action="" className={classes.banner_form}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Name*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Work Email*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="phone"
                    className="form-control"
                    id="phoneInput"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="formMessage"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn button-primary fw-bold">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestPostingBanner;
