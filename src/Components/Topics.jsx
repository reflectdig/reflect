
import React, { Fragment } from "react";
import { topicsData } from "../constant/dummyData";

const Topics = () => {
  const [open, setOpen] = React.useState(false); 
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <h1 className="mini-title">Discover Our Advanced Tools and Techniques</h1>
          <div className="column-title ">
          Cutting-Edge  <span className="text-secondary">Technologies</span> 
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {topicsData.map((item, index) => (
            <a
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group   text-center px-6
            py-[65px] hover:-translate-y-2"
              key={index}
              onClick={handleOpen}
              style={{backgroundColor : "#F2E8D6"}}
            >
              <div style={{width: "100px",height:'100px'}} className="w-[100px] h-[100px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={item.logo}
                  alt=""
                  loading="lazy"
                  className="rounded-full object-cover"
                  style={{width: "100px",height:'100px'}}
                />
              </div>
              <div className="course-content">
                <h4 className=" text-2xl  mb-2 font-bold ">{item.title}</h4>
                <p className="tech-text">{item.quantity}</p>
              </div>
            </a>
          ))}
        </div>
       
      </div>
     
    </div>
   
    </Fragment>

  );
};

export default Topics;
