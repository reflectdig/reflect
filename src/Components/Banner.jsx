import React from "react";
import ManOne from "../assets/images/banner/man6.webp";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookBtn from "./BookBtn";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);

const Banner = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <Swiper
      spaceBetween={30}
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
      style={{ width: '100%', height: '115vh' }} 
    >
      <div ref={navigationPrevRef} style={{ width: '30px', position: 'absolute', top: '50%', zIndex: '999', right: '20px', cursor: 'pointer' }} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div ref={navigationNextRef} style={{ width: '30px', position: 'absolute', top: '50%', zIndex: '999', left: '20px', cursor: 'pointer' }}  >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-1 h-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>

      <SwiperSlide style={{ backgroundColor: "white", height: "115vh" }}>
        <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">

              <h1 className="ban-contone-heading-v" style={{ lineHeight: "1" }}>
                General Dermatology
              </h1>
              <div className="team-dettext">
                Every Skin Has A Story. Know Yours.
              </div>
              <div className="plain-text text-gray leading-[30px] r-txtn">

              </div>

              <div className="flex-none">
                <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} width={"100%"} height={"100%"} alt="manOne" className="ban-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ backgroundColor: "white", height: "115vh" }}>
        <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading-v" style={{ lineHeight: "1" }}>
                Cosmetic Dermatology
              </h1>
              <div className="team-dettext">
                Elevate Your Beauty Discover the Art of Cosmetic Dermatology!
              </div>
              <div className="flex-none">
                <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} width={"100%"} height={"100%"} alt="manOne" className="ban-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundColor: "white", height: "115vh" }}>
        <div className={`xl:min-h-screen cl-bg bg-cover bg-no-repeat bg-center overflow-hidden slider-content`}>
          <div className="container ban-cont">
            <div className="ban-contone">
              <h1 className="ban-contone-heading-v" style={{ lineHeight: "1.2" }}>
                Vaginal Discharge<br/>
                (or) Leucorrhoea
              </h1>
              <div className="team-dettext">
              Know the Exact Cause of White Discharge Before Getting Treated
              </div>
              <div className="flex-none">
                <BookBtn />
              </div>
            </div>
            <div className="ban-conttwo">
              <img src={ManOne} width={"100%"} height={"100%"} alt="manOne" className="ban-img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;