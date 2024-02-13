import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../About";
import CourseBlock from "../HomeThreeComponents/CourseBlock";

import Video from "../HomeTwoComponents/Video";
import NewsLetter from "../NewsLetter";
import PageBanner from "../PageBanner";
import Platform from "../Platform";
import Team from "../HomeThreeComponents/Team";
import Topics from "../Topics";
import Intro from "../Intro";
import image from "../../assets/images/banner/aboutbanner.png"


const AboutTwo = () => {
  return (
    <>
      <Header />
      <PageBanner image={image} num={2} />
      {/* <Intro /> */}
      {/* <Platform /> */}
      {/* <CourseBlock /> */}
      {/* <Video /> */}
      <Team />
      {/* <NewsLetter /> */}
      <Footer />
    </>
  );
};

export default AboutTwo;
