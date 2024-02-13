/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { courseData } from "../constant/dummyData";
import Course from "./Course";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  singleIns,
  counter1,
  counter2,
  counter3,
} from "../constant/images";
import mer from "../assets/images/team/mer.png"

const CoralinaCloud = () => {
  return (
    <div className="section-padding  bg-contain   bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-0 gap-[30px]">
          <div className="lg:col-span-4 col-span-12 ">
            <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
              <div className="h-[400px] mb-2">
                <img
                  src={mer}
                  alt=""
                  className="w-full h-full block object-cover rounded-t-md"
                />
              </div>
              <div className="px-8 pb-8">
                <h5 className=" text-2xl font-bold text-black mb-4 mt-4">
                Dr. M.S KRISHNA MEERA
                </h5>
                
                <ul className=" space-y-[19px]">
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:envelope"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">skinreflect@gmail.com</span>
                  </li>
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:phone"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">063801 36936</span>
                  </li>
                  {/* <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</span>
                  </li> */}
                </ul>
                {/* <div className=" text-xl text-black mt-8 mb-4">
                  Follow Me On:
                </div>
                <ul className="flex space-x-4 ">
                  {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                    <li key={indx}>
                      <a href="#" className="flex h-10 w-10">
                        <img src={item} alt="" />
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="mb-10">
              <h2>Dr. M.S KRISHNA MEERA</h2>
              <span className=" inline-block text-primary">Dermatologist</span>
            </div>
            <div className="team-dettext">
            Dr. Krishna Meera, believes that skin as an organ reflects the internal wellbeing of an individual. Dermatology, though currently perceived as a field of enhancing beauty standards of an individual, is truly way more than that.
              <br /> <br /> 
              She obtained her Masters in Dermatology, Venereology and Leprosy [MD(DVL)] from Coimbatore Medical College, after graduating MBBS from the prestigious Madras Medical College (Rajiv Gandhi medical college and hospital), both on merit.
              <br /> <br />
              Her fields of interests are general dermatology, paediatric dermatology , dermato surgery and cosmetic dermatology. Compassionate, she likes to put the patient at ease by explaining the true nature of the problem or disease.
            </div>
            {/* <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-24">
              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter1}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">82</span>
                  k+
                </h4>
                <p>Enrolled Students</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter2}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">460</span>+
                </h4>
                <p>Academic Programs</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter3}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">20</span>+
                </h4>
                <p>Certified Students</p>
              </div>
            </div> */}
            {/* <div className="mt-20 mb-14">
              <div className="mini-title">Courses By Coralina</div>
              <div className="column-title ">
                Courses By <span className="shape-bg">Coralina</span>
              </div>
            </div> */}
            {/* <div className=" grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-[30px]">
              {courseData.map((course, index) => (
                <Course course={course} key={index} index={index} />
              ))}
            </div> */}
            {/* <div className="text-center lg:pt-14 pt-8">
              <a href="#" className=" btn btn-primary">
                View All Courses
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralinaCloud;
