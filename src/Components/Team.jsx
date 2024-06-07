import React from "react";
import div from "../assets/images/team/divya.webp";
import mer from "../assets/images/team/meera.webp";


const Team = () => {
  return (
    <div className="pt-8 pb-8">
      <div className="container">
        <div className="text-center">
          <div className="column-title ">
            Our Expert <span className="text-secondary">Consultants</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 pt-8">
          <div>
            <div
              className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
            >
              <div className="cons-img rounded-full  relative mx-auto mb-8">
                <img
                  src={mer}
                  loading="lazy"
                  alt=""
                  className=" w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="course-content">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                DR. M.S KRISHNA MEERA
                </h4>
                <div>MBBS</div>
                <ul className="space-x-4 flex justify-center pt-6">
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:facebook"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white"
                    >
                      <iconify-icon icon="bxl:twitter"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white"
                    >
                      <iconify-icon icon="bxl:linkedin"></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div>    
          <div className="flex-1">
              <div className="cons-textn">
              <span className="cons-high">Dr. Krishna Meera</span>, believes that skin as an organ reflects the internal wellbeing of an individual. Dermatology, though currently perceived as a field of enhancing beauty standards of an individual is truly way more than that. It’s the scientific study of skin functions and skin diseases. And has its roots in immunology, genetics and endocrinology,  as our mentor elegantly puts it. He goes on to say, what we see on the skin are just the leaves of this tree and the roots are deep within the above three elements! We at Reflect make sure to go all the way down and address it.
              </div>
              </div>
          </div>    
        </div>
          <div className="cons-textn" style={{marginTop: "50px" }}>
            She obtained her Masters in Dermatology, Venereology and Leprosy [MD(DVL)] from Coimbatore Medical College, after graduating MBBS from the prestigious Madras Medical College (Rajiv Gandhi medical college and hospital), both on merit.
          </div>
          <div className="cons-textn" style={{marginTop: "30px", marginBottom: "100px"}}>
            Her fields of interests are general dermatology, paediatric dermatology , dermatosurgery and cosmetic dermatology. Compassionate, she likes to put the patient at ease by explaining the true nature of the problem or disease.
          </div>
        </div>

      <div className="container">
        <div className="text-center">
          
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10" style={{marginTop: "120px"}}>
          <div>
            <div
              className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
            >
              <div className="cons-img rounded-full  relative mx-auto mb-8">
                <img
                  src={div}
                  alt=""
                  loading="lazy"
                  className=" w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="course-content">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                DR. DIVYA
                </h4>
                <div>MBBS </div>
                <ul className="space-x-4 flex justify-center pt-6">
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:facebook"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white"
                    >
                      <iconify-icon icon="bxl:twitter"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white"
                    >
                      <iconify-icon icon="bxl:linkedin"></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div>  
          <div className="flex-1">
            <div className="cons-textn">
            <span className="cons-high">Dr. Divya</span> is an enthusiastic young Dermatologist who has obtained her Masters in Dermatology, Venereology and Leprosy [MD(DVL)] from Coimbatore Medical College, after graduating MBBS from the prestigious Madras Medical College (Rajiv Gandhi medical college and hospital)
            </div>
            </div>
            <div className="cons-textn">
            She strongly believes that every skin is unique and every skin deserves to be cared for. She is all ears to the patient's needs, spends time with them to analyse the root cause and comes out with the best possible treatment plan.  
            </div>
          </div>
          
        </div>
        <div className="cons-textn" style={{marginTop: "50px", marginBottom: "100px"}}>
          Her utmost priority is the well being of her patients and she incorporates her academic supremacy to assure the same. We at Reflect skin clinic strive to positively impact the quality of life through advancement in the science of dermatology and cosmetology.
          </div>
      </div>
      
    </div>
  );
};

export default Team;
