import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { call } from "../constant/images";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [webAdress, setWebAdress] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const naviget = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      name: name,
      email: email,
      webAdress: webAdress,
      message: message,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_ns6jxe8",
        "template_oxnjbzr",
        templateParams,
        "VrrYupDuebtgZisdc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setMessage("");
          naviget("/react-templates/edumim/thanks");
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log("FAILED...", err);
        }
      );
  };
  return (
   <div style={{textAlign: "center"}} className="p-4">
    <h3 className="p-4">TeleHealth</h3>
    <h5 className="p-4 cont-content">WE understand that factors like lack of transport and mobility often restrict access to HEALTH care.</h5>
    <h5 className="cont-content">To bridge the gap in access, we use telehealth to make sure that all our patients can get the quality care they need regardless of location. We hope that this new technology will help us to better meet the needs of new and existing patients. 
    This would also be a great opportunity to receive follow up advice and clear your doubts with just a call. And call today to BOOK AN APPOINTMENT FOR AUDIO / VIDEO CONSULTATION 
    </h5>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}} className="mt-6">
    <a style={{cursor:"pointer"}} href="tel:+063801 36936"><img src={call} alt="" className="" /></a>
    <p className="cont-content"><a style={{cursor:"pointer"}} href="tel:+063801 36936">6380136936</a></p>
    </div>

   </div>
  );
};

export default ContactForm;
