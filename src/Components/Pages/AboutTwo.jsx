import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import Team from "../HomeThreeComponents/Team";
import image from "../../assets/images/banner/aboutbanner.webp";
import Topics from "../Topics";
import { Container } from "@mui/material";


const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner image={image} num={2} /> 
      <Team />   
      <Topics />
      <Footer />
    </>
  );
};

export default AboutTwo;
