
import React, {useEffect } from "react";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase";
import ReactCompareImage from 'react-compare-image';



import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const BLogStandard = () => {

  const [items, setItems] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData);
      } catch (error) {
         
      }
    };

    fetchData();
  }, []);
 

  return (
    <>
        <div className="container section-padding">
        <div className="md:flex gap-10">
        <div className="flex items-start mb-3  justify-center" style={{flexDirection:"column"}}>
        <h2 className="mini-title ">Results</h2>
        <div className="column-title  ">
            Before and After <span className="text-secondary"> Treatments</span>
        </div>
        <div className="team-dettext">Experience transformative skincare journeys. Witness stunning before and after results, as confidence and radiant skin emerge at Reflect Clinic</div>
        </div>
      <div style={{margin:"auto"}} >
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
      >
        {items.map((item) => (
        <SwiperSlide  key={item.id}>
          <div style={{position:"relative"}}>
          <h2 style={{textAlign:"center",marginBottom:"20px"}} className="res-head">{item.title}</h2>
          <div style={{position:"absolute" ,zIndex:"999",top:"0px" }} className="res-txt">before</div>
         <div style={{position:"absolute",zIndex:"999",top:"0px" , right:"0px" }} className="res-txt">after</div>
          <ReactCompareImage
            leftImage={item.beforeimage}
            rightImage={item.afterimage}
          />
                  
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
