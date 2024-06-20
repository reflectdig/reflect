import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/aboutbanner.webp"

const OurCentre = () => {
  return (
    <>
      <Header />
      <PageBanner
        image={image}
        num={1}
      />
      
      <Footer />
    </>
  );
};

export default OurCentre;