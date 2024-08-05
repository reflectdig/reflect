import React from "react";
import CoralinaCloud from "../CoralinaCloud";
import DivComp from "../DivComp";

const Team = () => {
  return (
    <div className=" my-8">
      <div className="container">
        <div className="text-center">
          <div className="m-0 p-0">
            <h2>Our Expert <span className="text-secondary">Consultants</span></h2>
          </div>
        </div>
        <CoralinaCloud />
        <DivComp />        
      </div>
    </div>
  );
};

export default Team;
