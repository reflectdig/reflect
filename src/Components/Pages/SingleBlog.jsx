import React from "react";
import BlogPost from "../BlogPost";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/blogbanner.png"

const SingleBlog = () => {
  return (
    <>
      <Header />
      <PageBanner image={image} />
      <BlogPost />
      <Footer />
    </>
  );
};

export default SingleBlog;
