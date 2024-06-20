
import React from "react";
import bban from "../assets/images/banner/blog.png"
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

const BlogPost = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12 pt-10">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={bban} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <h3>
                Revitalize Your Skin: Dermatology-Based Solutions for a Radiant Complexion
                </h3>
                <p className="mt-6 blog-content">
                Glowing, healthy skin isn't just a trend; it's a reflection of your well-being. Dermatology, the field of medicine focused on skin health, offers an array of solutions to help you achieve and maintain a radiant complexion. In this blog, we'll explore the world of dermatology-based solutions and how they can transform your skin.
                </p>
               
                <p className="mt-6 blog-content">
                The desire for youthful, flawless skin has led to a surge in cosmetic dermatology. These professionals offer an array of treatments such as Botox, dermal fillers, chemical peels, and laser therapy to address concerns like fine lines, wrinkles, uneven skin tone, and more. These procedures can rejuvenate your skin and boost your confidence.
                </p>
                <p className="blog-content">
                Early detection of skin cancer is pivotal for successful treatment. Dermatologists can perform regular skin checks, identifying suspicious moles and lesions. In cases of skin cancer, they guide patients through treatment options, ensuring the best possible outcomes.
                </p>
              </div>
            </div>

           </div>


          <div className="lg:col-span-4 col-span-12 pt-20">
            <div className="sidebarWrapper space-y-[30px]">
            <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
                <h4 className=" widget-title">Contact Details</h4>
                <ul className="list space-y-6  ">
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <AiFillClockCircle size="20px" />
                      </div>
                      <div>10:00 am - 8:00 pm</div>
                    </div>
                  </li>
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "start", marginTop: "3px"}}>
                      <MdLocationPin size="20px" />
                      </div>
                      <div>Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <HiMail size="20px" />
                      </div>
                      <div>skinreflect@gmail.com</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <IoIosCall size="20px" />
                      </div>
                      <div>063801 36936</div>
                    </div>
                  </li>
                </ul>
                <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
                  Book Appointment
                </a>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;