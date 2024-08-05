import React from 'react';
import gallery1 from "../assets/images/all-img/about1.png";
import gallery2 from "../assets/images/all-img/about2.png";
import gallery3 from "../assets/images/all-img/about3.png";
import gallery4 from "../assets/images/all-img/about4.png";

let gallery = [
    {
    src:gallery1,
    title:"Default Title for Gallery card 1"
  },
  {
    src:gallery2,
    title:"Default Title for Gallery card 1"
  },
  {
    src:gallery3,
    title:"Default Title for Gallery card 1"
  },
  {
    src:gallery4,
    title:"Default Title for Gallery card 1"
  },
  ]

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
    zIndex: 9999,
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };
 

const Gallery = () => {
  const [openImage, setOpenImage] = React.useState(false);
  const [image, setImage] = React.useState(null); 

  const handleOpenImage = () =>setOpenImage(true);
  const handleCloseImage = () =>setOpenImage(false);
  return (
    <div className=" " style={{padding:"0px 0px 80px 0px"}}>

         <div className="container" style={{marginTop:"20px"}}>
        <div className="text-center">
        
          <div className="column-title ">
            Gallery 
       
          </div>
        </div>
          
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {gallery.map((item, index) => (
            <a
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group   text-center px-0
            py-[20px] hover:-translate-y-2"
              key={index}
              onClick={()=>{handleOpenImage();setImage(item.src)}}
              style={{backgroundColor : "#F2E8D6"}}
            >
              <div style={{width: "100%"}} className=" bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={item.src}
                  className='rounded-t-[8px]'
                />
              </div>
              <div className="course-content">
                <h6 className=" text-xl mb-2 font-bold " style={{paddingBottom:"20px"}}>{item.title}</h6>
         
              </div>
            </a>
          ))}
       
        </div>
        
       
      </div>
      {
        openImage ?
        <div style={overlayStyle} onClick={handleCloseImage}>
        <img src={image} alt="Overlay Image" style={imgStyle} />
        </div>
        :
        null
      }
    
      
    </div>
  )
}

export default Gallery