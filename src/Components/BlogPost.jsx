
import React from "react";
import {
  
  user3,
  
  calender,
  clockIcon,
  
} from "../constant/images";
import bban from "../assets/images/banner/blog.png"
import bbanc from "../assets/images/banner/blogin.png"
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import BookBtn from "./BookBtn";

const BlogPost = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={bban} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>Reflect Skin</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span>3 21 oct, 23</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>3 Min Read</span>
                  </a>
                </div>
                <h3>
                Revitalize Your Skin: Dermatology-Based Solutions for a Radiant Complexion
                </h3>
                <p className="mt-6 blog-content">
                Glowing, healthy skin isn't just a trend; it's a reflection of your well-being. Dermatology, the field of medicine focused on skin health, offers an array of solutions to help you achieve and maintain a radiant complexion. In this blog, we'll explore the world of dermatology-based solutions and how they can transform your skin.
                </p>
               
                <p className="mt-6 blog-content">
                The desire for youthful, flawless skin has led to a surge in cosmetic dermatology. These professionals offer an array of treatments such as Botox, dermal fillers, chemical peels, and laser therapy to address concerns like fine lines, wrinkles, uneven skin tone, and more. These procedures can rejuvenate your skin and boost your confidence.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={bbanc} alt="" />
                  <img src={bbanc} alt="" />
                </div>
                
                <p className="blog-content">
                Early detection of skin cancer is pivotal for successful treatment. Dermatologists can perform regular skin checks, identifying suspicious moles and lesions. In cases of skin cancer, they guide patients through treatment options, ensuring the best possible outcomes.
                </p>
                
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Skin care
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        dermatology
                      </a>
                    </li>
                    
                  </ul>
                 
                </div>

              </div>
            </div>

           </div>


          <div className="lg:col-span-4 col-span-12">
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
                <BookBtn />
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
