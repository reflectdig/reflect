import React from "react";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const Courses = ({image, categoryData}) => {
  
  return (
    <>
      <Header />
      <PageBanner image={image}  />
      <div className="nav-tab-wrapper tabs section-padding-bottom">
        <div className="container">
          <FilteredCourse
            classNameForTabTwo={
              "grid  grid-cols-1 gap-[30px]"
            }
            categoryData={categoryData}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
