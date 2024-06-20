
import React, { useState } from "react";
import logo from "../assets/images/logo/ref.webp";
import { fbIcon, twIcon, pnIcon, insIcon } from "../constant/images";

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showCourseMenu, setShowCourseMenu] = useState(false);
  const [showCourseProducerMenu, setShowCourseProducerMenu] = useState(false);
  const handleShowHomeMenu = () => {
    setShowHomeMenu(!showHomeMenu);
  };
  const handleShowProducerMenu = () => {
    setShowCourseProducerMenu(!showCourseProducerMenu);
  };
  const handleShowPageMenu = () => {
    setShowPageMenu(!showPageMenu);
  };
 
  const handleShowCourseMenu = () => {
    setShowCourseMenu(!showCourseMenu);
  };
  return (
    <>
      <div className="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu">
        <div className="flex justify-between px-6 flex-none">
          <a 
            aria-label="go to home"
            href={"/"}
            className="brand-logo flex-none mr-10 "
          >
            <img src={logo} alt="logo" style={{width: "150px"}}/>
          </a>
          <span
            className=" text-3xl text-black cursor-pointer rt-mobile-menu-close"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <iconify-icon icon="fe:close"></iconify-icon>
          </span>
        </div>
        <div className="mobile-menu mt-6 flex-1 ">
          <ul className="menu-active-classNamees">
            <li
              className={`menu-item ${showHomeMenu ? "open" : ""}`}
              onClick={handleShowHomeMenu}
            >
              <a aria-label="Go to Home" href="/">Home</a>
              
            </li>
            <li
              className={`menu-item ${showPageMenu ? "open" : ""}`}
              onClick={handleShowPageMenu}
            >
              <a aria-label="Go to About" href="/about">About</a>
              
            </li>
            <li
              className={`menu-item ${showPageMenu ? "open" : ""}`}
              onClick={handleShowPageMenu}
            >
              <a aria-label="Go to Our Doctor" href="/blogs">Blogs</a>
              
            </li>
            <li
              className={`menu-item-has-children ${
                showCourseMenu ? "open" : ""
              }`}
              onClick={handleShowCourseMenu}
            >
              <a aria-label="Go to Treatments" href="#">Treatments</a>
              <ul
                className="sub-menu"
                style={
                  showCourseMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <a aria-label="Go to Skin" href={"/skin"}>Skin</a>
                </li>
                <li>
                  <a aria-label="Go to Hair" href={"/hair"}>
                    Hair
                  </a>
                </li>
                <li>
                  <a aria-label="Go to Nail" href={"/nail"}>
                    Nail
                  </a>
                </li>
                <li>
                  <a aria-label="Go to Body" href={"/body"}>
                    Body
                  </a>
                </li>
                
              </ul>
            </li>

            <li
              className={`menu-item-has-children ${
                showCourseProducerMenu ? "open" : ""
              }`}
              onClick={handleShowProducerMenu}
            >
              <a aria-label="Go to Procedure" href="#">Procedure</a>
              <ul
                className="sub-menu"
                style={
                  showCourseProducerMenu ? { display: "block" } : { display: "none" }
                }
              >
                
               
                
                
                <li>
                  <a aria-label="Go to Aesthetic Procedure" href={"/aestheticprocedure"}>
                  Aesthetic Procedure
                  </a>
                </li>
                <li>
                  <a aria-label="Go to Medical Procedure" href={"/medicalprocedure"}>
                  Medical Procedure
                  </a>
                </li>
                
              </ul>
            </li>
            
            <li>
              <a aria-label="Go to Contacts" href={"/contact"}>Contacts</a>
            </li>
          </ul>
        </div>
        <div className=" flex-none pb-4">
          <div className=" text-center text-black font-semibold mb-2">
            Follow Us
          </div>
          <ul className="flex space-x-4 justify-center ">
            <li>
              <a aria-label="facebook icon" href="#" className="flex h-10 w-10">
                <img src={fbIcon} alt="fbIcon" />
              </a>
            </li>
            <li>
              <a aria-label="twitter icon" href="#" className="flex h-10 w-10">
                <img src={twIcon} alt="twiter" />
              </a>
            </li>
            <li>
              <a aria-label="printrest icon" href="#" className="flex h-10 w-10">
                <img src={pnIcon} alt="pnIcon" />
              </a>
            </li>
            <li>
              <a aria-label="instagram icon" href="#" className="flex h-10 w-10">
                <img src={insIcon} alt="insIcon" />
              </a>
            </li>
          </ul>
        </div> 
      </div>{" "}
      <div className={`rt-mobile-menu-overlay ${activeMenu && "active"}`}></div>
    </>
  );
};

export default MobileMenu;
