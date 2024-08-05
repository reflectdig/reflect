import React from "react";
import footerLogo from "../assets/images/logo/reff.webp";
import { call, mail, map } from "../constant/images";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer style={{backgroundColor: "#2B2A28"}} className="bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a aria-label="Footer Logo" href="#" className="mb-10 block" style={{maxWidth:"200px"}}>
                <img src={footerLogo} alt="" loading="lazy" />
              </a>
              
              <ul className="flex space-x-4 pt-8">
                <li>
                  <a
                    aria-label="Youtube Icon"
                    href="https://youtube.com/@drkrishnameera?si=EHAHE5uAo0J7zv-X"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:youtube"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Instagram icon"
                    href="https://www.instagram.com/drkrishnameera?igsh=MWQ0bXp0M2EzdzhmcQ=="
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
            <h3 className="mb-8 text-2xl font-bold text-white">Consult now!</h3>           
            {/* <BookBtn /> */}
            <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
              Book Appointment
            </a>
          </div>
          <div>
          <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={mail} alt="mail us" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1 text-white">Email-Us :</h4>
                    <div className="cont-footer-content">skinreflect@gmail.com</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={call} alt="call us" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1 text-white">Call Us:</h4>
                    <div className="cont-footer-content">063801 36936</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={map} alt="locate us" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="lg:text-xl text-lg mb-1 text-white">Office :</h4>
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
