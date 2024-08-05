import React, { Fragment, useEffect, useState } from 'react';
import YoutubePlayer from 'react-youtube-player';
import CardMedia from '@mui/material/CardMedia';
import { IoCloseCircle } from "react-icons/io5";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
    Card,
  } from "@material-tailwind/react";
 
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9998,
  };
  

const OfferPopup = () => {
    const [isopenModel, setIsOpenModel] = useState(false);
    const [offers, setOffers] = useState([]);


     useEffect(() => {
        const fetchData = async () => {
          try {
            const itemsCollection = collection(db, 'Offers');
            const itemsSnapshot = await getDocs(itemsCollection);
            const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            
            setOffers(itemsData);
          } catch (error) {
          
          }
        };
        fetchData();
      }, []); 

    useEffect(()=>{
        HandleOpen()  
    },[offers]);

const HandleOpen =()=>{    
    if(offers.length >0){
        offers.map((item,index)=>{
    if(item.status  === "OPEN"){
    if (sessionStorage.getItem('offerPopup') == undefined ){
        sessionStorage.setItem('offerPopup', 'true');
        if (sessionStorage.getItem('offerPopup') === 'true') 
        setTimeout(()=>{
            setIsOpenModel(true);       
        },10000)
    }   
    else if (sessionStorage.getItem('offerPopup') === 'true') {
        setTimeout(()=>{
            setIsOpenModel(true);       
        },10000)
    } 
   }
})
}
}          

const HandleClose = ()=>{
     if (sessionStorage.getItem('offerPopup') === 'true') { 
        sessionStorage.setItem('offerPopup', 'false');
        if (sessionStorage.getItem('offerPopup') === 'false')
            setIsOpenModel(false);        
    }
}

  return (
    <Fragment>
        {
        isopenModel ?
        <div style={overlayStyle} >
              <div className='offer-model' style={{padding:'10px 10px',position:'relative',borderRadius:"20px",height:"auto",backgroundColor:"white"}}>
             <div style={{position:"absolute" ,right:10,display:"flex",alignItems:"center",justifyContent:"end",marginBottom:'10px'}}>
              <IoCloseCircle style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>{HandleClose()}} />
              </div>     
                   {
                    offers.length >0 && offers.map((item,index)=>
                    <div>
                    {
                       item.status === "OPEN" ?
                    
                    <div className='offer-card'>
                    <div className='media'>
                    { 
                   item.contentType === "image" ?
                    <img src={item.offerSource} style={{ width:"100%" }} alt="image"/>
                    :
                    <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='m-auto' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 240 }}
                        title="green iguana"
                    >
                      <YoutubePlayer
                    videoId={item.offerSource}
                    playbackState='unstarted'
                    height='100%'
                    width='100%'
                    configuration={
                        {
                            showinfo: 1,
                            controls: 1
                        }
                    }
                />
                    </CardMedia>
                   
                    
                    </Card>
                   }
                </div>
                 <div 
                 className='text-title'
                 style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    padding:"10px 0px 10px 0px",
                    fontWeight:"bolder"
                    }}>
                    {item.Text}
                </div>
                    </div>
                    :
                    null
                    }
                    </div>
                    )
                   }
                   
                
        
       
      
                 
              </div>
        </div>
        :
        null
      }
        
    </Fragment>
  )
}

export default OfferPopup