import React from "react";

const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Core Features</div>
          <div className="column-title ">
            Why <span className="shape-bg">Choose</span> Reflect Skin
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="la:smile"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
            Comprehensive
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            Skin and hair therapies are offered
            witha holistic approach and are 
            safe and effective.{" "}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="fluent:people-team-20-regular"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
            Qualified Team
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            By using high-quality therapeutic 
            equipment, our team delivers
            superior results.{" "}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="teenyicons:shield-tick-outline"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
            Appropriate Results
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            Each patient receives only fully-
            tested, surgical or non-surgical 
            treatments.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
