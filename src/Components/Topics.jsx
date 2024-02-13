/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { topicsData } from "../constant/dummyData";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MdOutlineClose } from "react-icons/md";
import ex from "../assets/images/logo/ex.png";




const Topics = () => {
  const [open, setOpen] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);
  const [image, setImage] = React.useState(null);
 
  const handleOpen = () => setOpen(!open);
  const handleOpenImage = () =>setOpenImage(true);
  const handleCloseImage = () =>setOpenImage(false);

  return (
    <Fragment>
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Discover Our Advanced Tools and Techniques</div>
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
