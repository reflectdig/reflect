
import React from "react";
import { error404 } from "../../constant/images";
import Footer from "../Footer";
import Header from "../Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen bg-[url('../images/all-img/404-bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center justify-center min-h-screen px-4">
          <img src={error404} alt="" className="mb-14" />
          <h2 className=" mb-6">Page not found</h2>
          <div className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </div>
          <a href={"/"} className="btn btn-primary">
            Back To Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
