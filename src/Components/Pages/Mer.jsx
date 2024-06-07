import React from "react";
import CoralinaCloud from "../CoralinaCloud";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/aboutbanner.webp"

const Mer = () => {
  return (
    <>
      <Header />
      <PageBanner
        image={image}
        num={1}
      />
      <CoralinaCloud />
      <Footer />
    </>
  );
};

export default Mer;
