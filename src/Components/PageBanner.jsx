import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ image, title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="breadcrumbs  bg-cover bg-center bg-no-repeat" style={{backgroundColor: "#F2E8D6",height:"0px",padding:"120px 10px"}}>
      <div className="container text-center" style={{display: "flex", justifyContent: "center"}}>
        <img src={image} style={{ width:"200px" }} />
      </div>
    </div>
  );
};

export default PageBanner;
