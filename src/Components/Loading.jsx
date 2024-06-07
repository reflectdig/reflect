import React from 'react';
import reflectlogo from "../assets/images/logo/logo1.webp";
import loader from "../assets/images/logo/loader.svg";

const Loading = () => {
    let loadingStyle={
        display:"flex",
        height:"100vh",
        alignItems:"center",
        justifyContent:"center",
        width:'100%',
        flexDirection: "column",
        gap:"10px",
       }
  return (
    <div style={loadingStyle}>
       <img src={reflectlogo} alt="Logo" style={{width:"150px"}} />
       <img src={loader} alt="loader" style={{width:"100px"}} />
    </div>
  )
}

export default Loading