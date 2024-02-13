/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/reff.png";
import BookBtn from "./BookBtn";
import { call, mail, map } from "../constant/images";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer style={{backgroundColor: "#2B2A28"}} className="bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block" style={{maxWidth:"200px"}}>
                <img src={footerLogo} alt="" />
              </a>
              {/* <p>
                
               Offering expert general dermatology, cosmetic treatments, skin allergy testing, and discreet care for vaginal health, promoting wellness through comprehensive dermatological services.
              </p> */}
              <ul className="flex space-x-4 pt-8">
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:facebook"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:twitter"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:instagram"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Consult now!</h4>
            {/* <div className="mb-8">
            Over <span className="text-primary underline">800+</span>{" "}
              individuals have sought our expert care
            </div> */}
           
            <BookBtn />
          </div>
          <div>
          <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1 text-white">Email-Us :</h4>
                    <div className="cont-footer-content">skinreflect@gmail.com</div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1 text-white">Call Us:</h4>
                    <div className="cont-footer-content">063801 36936</div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={map} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="lg:text-xl text-lg mb-1 text-white">Office :</h4>
                    <div className="cont-footer-content">Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | Reflect Skin | All Rights Reserved | <a href="https://www.thedottech.in/" target="_blank">Crafted By TheDot Tech</a> 
      </div>
    </footer>
  );
};

export default Footer;
