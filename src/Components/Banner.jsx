import React, { useEffect, useState } from "react";
import bannerimg from '../assets/images/landing.webp';
import bannerimg1 from '../assets/images/tab-landing.webp';
import bannerimg2 from '../assets/images/mobile-landing.webp';

const Banner = () => {
  const [imageSrc, setImageSrc] = useState(() => (window.innerWidth <= 430 ? bannerimg2 : window.innerWidth <= 770 ? bannerimg1 : bannerimg));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setImageSrc(bannerimg2);
        setIsMobile(true);
      } else if (window.innerWidth <= 770) {
        setImageSrc(bannerimg1);
        setIsMobile(false);
      } else {
        setImageSrc(bannerimg);
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = isMobile ? {
    position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', fontWeight: 'bold', fontSize: '1.8rem'
  } : {};
  
  return (
    <div className="relative h-screen w-full bg-cover bg-center flex items-center">
      <img src={imageSrc} alt="bannerimg" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="container" style={{ width: '1200px', maxWidth: '100%', margin: '0 auto', textAlign: 'left', padding: '0 1rem', ...mobileStyles }}>
          <h1 className="ban-contone-heading-v pb-6" style={{ lineHeight: '1' }}>
            Your Skin <br />Deserves the Best
          </h1>
          <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;