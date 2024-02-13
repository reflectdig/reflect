/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  clock,
  file,
  review,
  star,
} from "../constant/images";

const FilteredCourse = ({ classNameForTabOne, classNameForTabTwo, categoryData }) => {
  const listIcon = [
    "ant-design:unordered-list-outlined",
  ];
  const cards = Object.keys(categoryData);
  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center  items-center mb-14">
        
      </div>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel id="tab2" className="tab-content">
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {cards.map((cardId, index) => (
            <Link
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group pt-6  text-center px-2
              hover:-translate-y-2"
              key={index}
              to={`/${cardId}`}
              style={{backgroundColor : "#F2E8D6",margin:"0px 20px 0px 20px",height:"250px"}}
            >
              <div style={{width: "100px",height:"100px"}} className="rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={categoryData[cardId].thumb}
                  alt=""
                  className=" w-full h-full object-cover rounded-full "
                />
              </div>
              <div className="course-content">
                <h4 className=" text-xl  mb-2 font-bold ">{categoryData[cardId].title}</h4>
                {/* <p className="tech-text">{item.quantity}</p> */}
              </div>
            </Link>
          ))}
        </div>
          {/* <div className={classNameForTabTwo}>
          {cards.map((cardId) => (
              <Link
                className=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
            hover:shadow-box6  p-8 space-x-6 category-card"
                to={`/${cardId}`}
                key={cardId}
              >
                <div className="flex-none">
                  <div className="w-[159px] h-[159px]  rounded  relative cat-cardimg">
                    <img
                      src={categoryData[cardId].thumb}
                      alt=""
                      className=" w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="course-content flex-1">
                  <h3>{categoryData[cardId].title}</h3>
                  <h4 className=" text-lg leading-[36px] mb-4 font-medium singlecard-prev inprev-des">
                  {categoryData[cardId].desPreview}{"..."}
                  </h4>
                  <div className="flex   space-x-6">
                    <span className=" flex items-center space-x-2">
                      <img src="assets/images/svg/file2.svg" alt="" />
                      <span>Read more</span>
                    </span>
                   
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;
