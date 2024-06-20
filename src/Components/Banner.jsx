import React, { useEffect, useState } from "react";
import ManOne from "../assets/images/banner/man6.webp";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookBtn from "./BookBtn";
import bannerimg from '../assets/images/landing.webp';
import bannerimg1 from '../assets/images/tab-landing.webp';
import bannerimg2 from '../assets/images/mobile-landing.webp';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay,EffectFade]);

const Banner = () => {
  const [imageSrc, setImageSrc] = useState(() => {
    if (window.innerWidth <= 430) {
      return bannerimg2;
    } else if (window.innerWidth <= 750) {
      return bannerimg1;
    } else {
      return bannerimg1;
    }
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setImageSrc(bannerimg2);
        setIsMobile(true);
      } else if (window.innerWidth <= 750) {
        setImageSrc(bannerimg1);
        setIsMobile(false);
      } else {
        setImageSrc(bannerimg1);
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = isMobile
    ? {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }
    : {};

  const tabletStyles = {
    '@media (max-width: 768px)': {
      '.text-4xl': {
        fontSize: '3rem', 
      },
      '.text-6xl': {
        fontSize: '4rem', 
      },
      '.lg\\:text-lg': {
        fontSize: '1.25rem', 
      },
    },
  };
  // const navigationPrevRef = React.useRef(null)
  // const navigationNextRef = React.useRef(null)
  return (
    <>
      <div className="relative h-screen w-full bg-cover bg-center flex items-center">
        <img src={imageSrc} alt="bannerimg" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-start px-8 lg:px-16">
          <div className="text-left text-white px-2" style={{ ...tabletStyles, ...mobileStyles }}>
            <h1 className="ban-contone-heading-v pb-6" style={{ lineHeight: '1' }}>
              Your Skin <br />Deserves the Best
            </h1>
            <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
              Book Appointment
            </a>
          </div>
        </div>
      </div>

    {/* <Swiper
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
    </Swiper> */}
    </>
  );
};

export default Banner;