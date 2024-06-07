
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import aboutOne from "../assets/images/all-img/adv1.png";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src={aboutOne} alt="aboutOne" className=" mx-auto" />
          </div>
          <div>
            <div className="mini-title">About Reflect Skin</div>
            <h4 className="column-title ">
            Advanced Dermatology Solutions for a {" "}
              <span className="shape"><br/>Radiant Complexion</span>
            </h4>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Mission</h4>
                  <div>
                  Our skin clinic is dedicated to providing the highest quality 
                  dermatological care, emphasizing patient well-being and
                  satisfaction.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Vision</h4>
                  <div>
                  We aspire to be a leading innovator in skincare solutions,
                  continuously advancing our expertise and technologies to
                  enhance the lives of our patients.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
