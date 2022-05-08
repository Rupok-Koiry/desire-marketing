import React from "react";
import classes from "./Pricing.module.css";
const Pricing = () => {
  return (
    <section className={`${classes.package} section_gap section_padding`}>
      <div className="container">
        <div className={`section_heading text-center`}>
          <h2>Guest Posting Packages*</h2>
          <p>
            Reach out to us for customized requirements such as country specific
            domain, traffic improvement, etc.
            <br /> *We provide a special discount on bulk orders (more than 50
            links per month).
          </p>
        </div>
        <div className="row">
          <div className={`col-sm-4 ${classes.price_list}`}>
            <h4>
              Domain Authority <br />
              Range
            </h4>
            <ul>
              <li>11 to 20</li>
              <li>21 to 30</li>
              <li>31 to 50</li>
              <li>51 to 70</li>
              <li>70+</li>
            </ul>
          </div>
          <div className={`col-sm-4 ${classes.price_list}`}>
            <h4>
              Without Content <br />
              (USD)
            </h4>
            <ul>
              <li>$50</li>
              <li>$80</li>
              <li>$180</li>
              <li>$350</li>
              <li>$650</li>
            </ul>
          </div>
          <div className={`col-sm-4 ${classes.price_list}`}>
            <h4>
              With Content
              <br />
              (USD)
            </h4>
            <ul>
              <li>$75</li>
              <li>$100</li>
              <li>$250</li>
              <li>$420</li>
              <li>$850</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          {" "}
          <button className="btn button-primary me-3">
            Download Sample Report
          </button>{" "}
          <button className="btn button-secondary">Schedule a Call</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
