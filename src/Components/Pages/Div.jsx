import React from "react";
import CoralinaCloud from "../CoralinaCloud";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/aboutbanner.png"
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
