import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { Container } from "@mui/material";
import image from "../../assets/images/banner/aboutbanner.webp"
import Topics from "../Topics";

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
      </Container>
      <Footer />
    </>
  );
};

export default OurCentre;