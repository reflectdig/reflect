import React from "react";
import mer from "../assets/images/team/mer.webp"

const CoralinaCloud = () => {
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
                  alt="Dr. M.S KRISHNA MEERA"
                  className="w-full h-full block object-cover rounded-t-md"
                />
              </div>
              <div className="px-8 pb-8">
                <h2 className=" text-2xl font-bold text-black mb-4 mt-4">
                Dr. M.S KRISHNA MEERA
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
              <h2>Dr. M.S KRISHNA MEERA</h2>
              <span className=" inline-block text-primary">Dermatologist</span>
            </div>
            <div className="team-dettext">
            Dr. Krishna Meera, believes that skin as an organ reflects the internal wellbeing of an individual. Dermatology, though currently perceived as a field of enhancing beauty standards of an individual, is truly way more than that.
              <br /> <br /> 
              She obtained her Masters in Dermatology, Venereology and Leprosy [MD(DVL)] from Coimbatore Medical College, after graduating MBBS from the prestigious Madras Medical College (Rajiv Gandhi medical college and hospital), both on merit.
              <br /> <br />
              Her fields of interests are general dermatology, paediatric dermatology , dermato surgery and cosmetic dermatology. Compassionate, she likes to put the patient at ease by explaining the true nature of the problem or disease.
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralinaCloud;
