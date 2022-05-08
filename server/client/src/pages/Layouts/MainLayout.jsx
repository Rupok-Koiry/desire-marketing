import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MainLayout = ({ children, className }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={className}>{children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
