import React, { useEffect } from "react";
import Banner from "../Banner";
import CourseSection from "../HomeThreeComponents/CourseSection";
import Footer from "../Footer";
import Header from "../Header";
import Team from "../HomeThreeComponents/Team";
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
      <BLogStandard />
      <Team />
      <Footer />
    </>
  );
};

export default HomeOne;
