/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect } from "react";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import ReactCompareImage from 'react-compare-image';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../assets/css/resultSlider.css';



import {
  bThumb1,
  bThumb2,
  bThumb3,
  calender,
  clockIcon,
  insIcon1,
  insIcon2,
  insIcon3,
  insIcon4,
  insIcon5,
  insIcon6,
  rc1,
  rc2,
  rc3,
  search,
} from "../../constant/images";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import bban from "../../assets/images/banner/blog.png";
import image from "../../assets/images/banner/resultbanner.png"
import lhr from "../../assets/images/results/test.png";

const BLogStandard = () => {

  const [items, setItems] = useState([]);
  const [title,c] = useState(0);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchData();
  }, []);
  console.log("items",items);

  return (
    <>
    
        <div className="container section-padding">
        <div className="md:flex gap-10">
          <div className="flex items-start mb-3  justify-center" style={{flexDirection:"column"}}>
        <div className="mini-title ">Results</div>
        <div className="column-title  ">
            Before and After <span className="text-secondary"> Treatments</span>
        </div>
        <div className="team-dettext">Experience transformative skincare journeys. Witness stunning before and after results, as confidence and radiant skin emerge at Reflect Clinic</div>
        {/* <h4 style={{textAlign:"Left"}} className="res-head">Experience transformative skincare journeys. Witness stunning before and after results, as confidence and radiant skin emerge at Reflect Clinic</h4> */}
        </div>
           
          <div style={{margin:"auto"}} >
            {/* <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div className="res-txt">Before</div>
              <div className="res-txt">After</div>
            </div> */}
        
      <div className="flex item-center justify-center my-swiper" >
      

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        allowTouchMove={false}
        navigation={true}
        // modules={[ Navigation ]}
       
      >
        {items.map((item) => (
        <SwiperSlide  key={item.id}>
          <div style={{position:"relative"}}>
          <h4 style={{textAlign:"center"}} className="res-head">{item.title}</h4>
          <div style={{position:"absolute" ,zIndex:"999",top:"0px" }} className="res-txt">before</div>
         <div style={{position:"absolute",zIndex:"999",top:"0px" , right:"0px" }} className="res-txt">after</div>
          <ReactCompareImage
            leftImage={item.beforeimage}
            rightImage={item.afterimage}
          />
                    {/* <ImgComparisonSlider>
             <img slot="first" src={item.beforeimage} alt={item.title} />
              <img slot="second" src={item.afterimage} alt={item.title} />
            </ImgComparisonSlider> */}
          {/* <img  src={item.image} alt={item.title} /> */}
          </div>
        </SwiperSlide>
         ))}
       
      </Swiper>
      </div>

            </div>
        </div>
            </div>
    </>
  );
};

export default BLogStandard;
