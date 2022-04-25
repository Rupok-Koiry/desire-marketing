import React from "react";

const GuestPostingBanner = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="content">
              <h1>Link Building Services Made Easy</h1>
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
              <button>Request A Callback</button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bannerform">
              <div className="defaultForm">
                <div className="heading-content">
                  <h2 className="title">
                    Want to kickstart your first Link Building Project?
                  </h2>
                  <p>(no contracts, no commitments)</p>
                </div>
                <form id="enquiry-form" method="post">
                  <input
                    type="hidden"
                    name="action"
                    value="enquiry_form_ajax"
                  />
                  <input
                    type="hidden"
                    name="page_title"
                    value="Professional SEO Services Company | Best SEO Company"
                  />
                  <div className="row justify-content-center">
                    <div className="col-sm-12">
                      <div className="form-group ">
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Name*"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group ">
                        <input
                          type="Email"
                          name="email"
                          placeholder="Work Email*"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group ">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group ">
                        <textarea
                          placeholder="Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="submit-btn">
                        <input type="submit" value="submit" />
                        <div className="form-loader" style="display: none;">
                          <img
                            src="https://web.archive.org/web/20220301193233im_/https://www.uplers.com/wp-content/themes/uplers/assets/images/loader.svg"
                            alt="loader"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="ajax-message"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestPostingBanner;
