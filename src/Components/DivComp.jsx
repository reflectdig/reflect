
import React from "react";
import mer from "../assets/images/team/div.webp"

const DivComp = () => {
  return (
    <div className="section-padding  bg-contain   bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-0 gap-[30px]">
          <div className="lg:col-span-4 col-span-12 ">
            <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
              <div className="h-[400px] mb-2">
                <img
                  src={mer}
                  loading="lazy"
                  alt=" Dr. Divya"
                  className="w-full h-full block object-cover rounded-t-md"
                />
              </div>
              <div className="px-8 pb-8">
                <h2 className=" text-2xl font-bold text-black mb-4 mt-4">
                Dr. Divya
                </h2>
                
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
                  <li>
                    <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
                      Book Appointment
                    </a>
                  </li>
                  
                </ul>
                
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="mb-10">
              <h2>Dr. Divya</h2>
              <span className=" inline-block text-primary">Dermatologist</span>
            </div>
            <div className="team-dettext">
            Dr.Divya is an enthusiastic young Dermatologist who has obtained her Masters in Dermatology, Venereology and Leprosy [MD(DVL)] from Coimbatore Medical College, after graduating MBBS from the prestigious Madras Medical College (Rajiv Gandhi medical college and hospital). 

              <br /> <br /> 
              She strongly believes that every skin is unique and every skin deserves to be cared for. She is all ears to the patient's needs, spends time with them to analyse the root cause and comes out with the best possible treatment plan. Her utmost priority is the well being of her patients and she incorporates her academic supremacy to assure the same. We at Reflect skin clinic strive to positively impact the quality of life through advancement in the science of dermatology and cosmetology. 



            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivComp;