import React, { useState } from "react";
import { courseData } from "../../constant/dummyData";
import CourseFilter from "./CourseFilter";
import SingleCourse from "./SingleCourse";

const CourseSection = () => {
  const [activeData, setActiveData] = useState("skin");
  const [filterData, setFilterData] = useState([]);
  return (
    <div className=" section-padding  bg-cover bg-no-repeat" style={{padding:"0"}}>
      <div className="container">
        <div className="serv-tabs">
          <div className="serv-tone">
            <h2 className="mini-title">Treatments</h2>
            <div className="column-title ">
            Comprehensive <span className="text-secondary">Dermatology</span> Solutions
            </div>
          </div>
          <div className="serv-ttwo">
            <CourseFilter
              mainData={courseData}
              activeData={activeData}
              setActiveData={setActiveData}
              setFilterData={setFilterData} />
          </div>
        </div>
        <div className="course-home-page">
          {filterData?.length > 0 ? (
            filterData.map((data, index) => (
              <SingleCourse key={index} data={data} />
            ))
          ) : (
            <h2 style={{ textAlign: "center" }}>Not Found Any Data</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
