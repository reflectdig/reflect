import React from "react";
import { call, mail, map } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import contact from "../../assets/images/banner/contact.webp";
import BookBtn from "../BookBtn";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner image={contact}/>
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className=" grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <h1 className="mini-title">Contact Us</h1>
              <h2 className="column-title ">
              We're Just a <span className="text-secondary">Click</span> Away. 
              </h2>
              
              {/* <div className="mt-10">
              <BookBtn btnclass={"hidden"} /> 
              </div> */}
              <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={mail} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className=" lg:text-xl text-lg mb-1">Email-Us :</h3>
                    <div className="cont-content"  >skinreflect@gmail.com</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={call} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className=" lg:text-xl text-lg mb-1">Call Us:</h3>
                    <div className="cont-content">063801 36936</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={map} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-xl text-lg mb-1">Office :</h3>
                    <div className="cont-content">Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <div className="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
