import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/aboutbanner.webp"
import DivComp from "../DivComp";

const Div = () => {
  return (
    <>
      <Header />
      <PageBanner
        image={image}
        num={1}
      />
      <DivComp />
      <Footer />
    </>
  );
};

export default Div;
