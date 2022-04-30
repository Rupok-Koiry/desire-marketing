import React from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/Faq/Faq";
import HowSeoLink from "../../components/HowSeoLink/HowSeoLink";
import Partner from "../../components/Partner/Partner";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonial/Testimonial";
import MainLayout from "../Layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <Service />
      <HowSeoLink />
      <Partner />
      <Testimonial />
      <Faq />
      <Contact />
    </MainLayout>
  );
};

export default Home;
