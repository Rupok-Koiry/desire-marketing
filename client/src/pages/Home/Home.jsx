import React from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HowSeoLink from "../../components/HowSeoLink/HowSeoLink";
import Partner from "../../components/Partner/Partner";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <Banner />
      <Service />
      <Faq />
      <HowSeoLink />
      <Partner />
      <Testimonial />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
