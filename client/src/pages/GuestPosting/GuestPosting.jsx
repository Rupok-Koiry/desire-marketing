import React from "react";
import GuestPostingBanner from "../../components/Banner/GuestPostingBanner";
import Experts from "../../components/Experts/Experts";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import GuestPostService from "../../components/GuestPostService/GuestPostService";
import Header from "../../components/Header/Header";
import Help from "../../components/Help/Help";
import Pricing from "../../components/Pricing/Pricing";
import SampleLink from "../../components/SampleLink/SampleLink";
import WhatGuestPosting from "../../components/WhatGuestPosting/WhatGuestPosting";
import MainLayout from "../Layouts/MainLayout";

const GuestPosting = () => {
  return (
    <MainLayout className="page_gap">
      <Header />
      <GuestPostingBanner />
      <WhatGuestPosting />
      <GuestPostService />
      <SampleLink />
      <Help />
      <Experts />
      <Pricing />
      <Faq />
    </MainLayout>
  );
};

export default GuestPosting;
