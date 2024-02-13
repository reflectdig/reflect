/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/ref.png";
import { fbIcon, twIcon, pnIcon, insIcon } from "../constant/images";

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showBlogMenu, setShowBlogMenu] = useState(false);
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
  const handleShowBlogMenu = () => {
    setShowBlogMenu(!showBlogMenu);
  };
  const handleShowCourseMenu = () => {
    setShowCourseMenu(!showCourseMenu);
  };
  return (
    <>
      <div className="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu">
        <div className="flex justify-between px-6 flex-none">
          <Link
            to={"/"}
            className="brand-logo flex-none mr-10 "
          >
            <img src={logo} alt="logo" style={{width: "150px"}}/>
          </Link>
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
              <a href="/">Home</a>
              
            </li>
            <li
              className={`menu-item ${showPageMenu ? "open" : ""}`}
              onClick={handleShowPageMenu}
            >
              <a href="/about">Our Doctor</a>
              
            </li>
            <li
              className={`menu-item ${showPageMenu ? "open" : ""}`}
              onClick={handleShowPageMenu}
            >
              <a href="/ourcentre">About</a>
              
            </li>
            <li
              className={`menu-item-has-children ${
                showCourseMenu ? "open" : ""
              }`}
              onClick={handleShowCourseMenu}
            >
              <a href="#">Treatments</a>
              <ul
                className="sub-menu"
                style={
                  showCourseMenu ? { display: "block" } : { display: "none" }
                }
              >
                <li>
                  <Link to={"/skin"}>Skin</Link>
                </li>
                <li>
                  <Link to={"/hair"}>
                    Hair
                  </Link>
                </li>
                <li>
                  <Link to={"/nail"}>
                    Nail
                  </Link>
                </li>
                <li>
                  <Link to={"/body"}>
                    Body
                  </Link>
                </li>
                
              </ul>
            </li>

            <li
              className={`menu-item-has-children ${
                showCourseProducerMenu ? "open" : ""
              }`}
              onClick={handleShowProducerMenu}
            >
              <a href="#">Procedure</a>
              <ul
                className="sub-menu"
                style={
                  showCourseProducerMenu ? { display: "block" } : { display: "none" }
                }
              >
                
               
                
                
                <li>
                  <Link to={"/aestheticprocedure"}>
                  Aesthetic Procedure
                  </Link>
                </li>
                <li>
                  <Link to={"/medicalprocedure"}>
                  Medical Procedure
                  </Link>
                </li>
                
              </ul>
            </li>
            <li
              className={`menu-item ${showBlogMenu ? "open" : ""}`}
              onClick={handleShowBlogMenu}
            >
              <a href="/blog">Blog</a>
             
            </li>
            <li>
              <Link to={"/contact"}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className=" flex-none pb-4">
          <div className=" text-center text-black font-semibold mb-2">
            Follow Us
          </div>
          <ul className="flex space-x-4 justify-center ">
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={fbIcon} alt="fbIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={twIcon} alt="twiter" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={pnIcon} alt="pnIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
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
