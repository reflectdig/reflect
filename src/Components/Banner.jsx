import React from "react";
import mailIcon from "../assets/images/icon/mail.svg";
import ManOne from "../assets/images/banner/man5.png";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade , } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookBtn from "./BookBtn";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination, Autoplay ,EffectFade]);

const Banner = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <Swiper
      spaceBetween={30}
      // navigation
      effect={'fade'}
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
     onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }}      
    >    
      <div ref={navigationPrevRef} className="prev-swiper-button" style={{width:"30px",position:"absolute",top:'50%',zIndex:"999",right:"20px",cursor:"pointer"}} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      </div>
      <div ref={navigationNextRef} style={{width:"30px",position:"absolute",top:'50%',zIndex:"999",left:"20px",cursor:"pointer"}}  >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-1 h-1">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
       </svg>
      </div>

        <SwiperSlide style={{backgroundColor:"white",height:"100vh"}}>
          <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading-v" style={{lineHeight:"1"}}>
              General Dermatology
              </h1>
           <div className="team-dettext">            
           Every Skin has a Story. Know yours
            </div>
              <div className="plain-text text-gray leading-[30px] r-txtn">
              
              </div>
              
                <div className="flex-none">
                <BookBtn />
                </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} alt="manOne" className="ban-img"/>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor:"white",height:"100vh"}}>
          <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading-v" style={{lineHeight:"1"}}>
              Cosmetic Dermatology
              </h1>
              <div className="team-dettext">  
              Elevate Your Beauty
              Discover the art of cosmetic dermatology!
            </div>
              {/* <div className="plain-text text-gray leading-[30px] r-txtn">
              Elevate Your Beauty <br />
              Discover the art of cosmetic dermatology!
              </div> */}
              <div className="flex-none">
              <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} alt="manOne" className="ban-img"/>
            </div>
          </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide style={{backgroundColor:"white",height:"100vh"}} >
          <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading">
              Skin allergy testing
              </h1>
              <div className="plain-text text-gray leading-[30px] r-txtn">
              Allergy Relief Starts Here <br />
              Precise skin allergy testing for lasting comfort!
              </div>
              <div className="flex-none">
              <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} alt="manOne" className="ban-img"/>
            </div>
          </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide style={{backgroundColor:"white",height:"100vh"}} >
          <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading-v" style={{lineHeight:"1.2"}}>
              Vaginal Discharge <br /> (or) Leucorrhoea
              </h1>
              <div className="team-dettext"> 
              know the exact cause of your white discharge before getting treated.
            </div>
              <div className="plain-text text-gray leading-[30px] r-txtn">
              
              </div>
              <div className="flex-none" style={{padding:"0px",marginTop:"0px"}}>
              <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} alt="manOne" className="ban-img"/>
            </div>
          </div>
          </div>
        </SwiperSlide>
    
    </Swiper>

  );
};

export default Banner;


    // <section
    //   className={`xl:min-h-screen bg-[url('../images/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden`}
    // >
    //   <div className="container relative">
    //     <div className="ban-contone">
    //       <h1>
    //         Your skin{" "}
    //         <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
    //           deserves
    //         </span>{" "}
    //         <br/>the best
    //       </h1>
    //       <div className=" plain-text text-gray leading-[30px] r-txtn">
    //       Maintain flawless skin and preserve your youthful appearance.
    //       Let's get started on achieving beautiful, healthy skin today
    //       </div>
           
    //         <div className="flex-none">
    //           <button className="btn btn-primary w-full lg:w-auto">
    //             Book Appointment
    //           </button>
    //         </div>
    //     </div>
    //     <div className="ban-conttwo">
    //       <img src={ManOne} alt="manOne" className="ban-img"/>
    //     </div>
    //   </div>
    // </section>