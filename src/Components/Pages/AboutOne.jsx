import React from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import Accordion from "../HomeThreeComponents/Accordion";
import Team from "../HomeThreeComponents/Team";
import About from "../HomeTwoComponents/About";
import Counter from "../HomeTwoComponents/Counter";
import PageBanner from "../PageBanner";
import Testimonials from "../Testimonials";
import image from "../../assets/images/banner/aboutbanner.png"

const AboutOne = () => {
  return (
    <>
      <Header />
      <PageBanner image={image} num={1} />
      <About />
      <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <Accordion />
      <Footer />
    </>
  );
};

export default AboutOne;
