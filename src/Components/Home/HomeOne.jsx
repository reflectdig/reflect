import React, { useEffect } from "react";
import About from "../About";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Brands from "../Brands";
import CourseSection from "../HomeThreeComponents/CourseSection";
import Courses from "../Courses";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import NewsLetter from "../NewsLetter";
import Platform from "../Platform";
import Team from "../HomeThreeComponents/Team";
import Testimonials from "../Testimonials";
import Topics from "../Topics";
import Intro from "../Intro";
import BLogStandard from "../Pages/BLogStandard";

const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Intro />
      <CourseSection />
      {/* <Platform />
      <NewsLetter />
      <Topics /> */}
      {/* <Testimonials /> */}
      <BLogStandard />
      <Team />
      <Footer />
    </>
  );
};

export default HomeOne;
