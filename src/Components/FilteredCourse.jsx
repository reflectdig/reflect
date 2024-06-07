
import { Tab } from "@headlessui/react";
import React from "react";

const FilteredCourse = ({ categoryData }) => {

  const cards = Object.keys(categoryData);
  
  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center  items-center mb-14"/>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel id="tab2" className="tab-content">
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {cards.map((cardId, index) => (
            <a
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group pt-6  text-center px-2
              hover:-translate-y-2"
              key={index}
              href={`/${cardId}`}
              style={{backgroundColor : "#F2E8D6",margin:"0px 20px 0px 20px",height:"250px"}}
            >
              <div style={{width: "100px",height:"100px"}} className="rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={categoryData[cardId].thumb}
                  alt=""
                  loading="lazy"
                  className=" w-full h-full object-cover rounded-full "
                />
              </div>
              <div className="course-content">
                <h4 className=" text-xl  mb-2 font-bold ">{categoryData[cardId].title}</h4>
               
              </div>
            </a>
          ))}
        </div>
          
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;
