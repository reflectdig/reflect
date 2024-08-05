import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import Team from "../HomeThreeComponents/Team";
import image from "../../assets/images/banner/aboutbanner.webp";
import Topics from "../Topics";
import { Container } from "@mui/material";
import HelmetWrapper from '../../HelmetWrapper';
import { Helmet } from 'react-helmet';


const AboutTwo = () => {
  return (
    <>
      <Header />
      <HelmetWrapper
        title="About Us - Reflect Clinic"
        description="Experience the ultimate in skin and hair care at Reflect Clinic. Let our skilled professionals enhance your natural beauty and boost your confidence."
      />
      <PageBanner image={image} num={2} /> 
      <Team />   
      <Topics />
      <Footer />
    </>
  );
};

export default AboutTwo;
