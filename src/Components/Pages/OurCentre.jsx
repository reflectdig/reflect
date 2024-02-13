import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { Container } from "@mui/material";
// import image from "../../assets/images/banner/centrebanner.png"
import image from "../../assets/images/banner/aboutbanner.png"
import Topics from "../Topics";
import Gallery from "../Gallery";

const OurCentre = () => {
  return (
    <>
      <Header />
      <PageBanner
        image={image}
        num={1}
      />
      <Container>
      <Topics />
      <Gallery/>
      </Container>
      <Footer />
    </>
  );
};

export default OurCentre;