
import { call } from "../constant/images";


const ContactForm = () => {

  return (
   <div style={{textAlign: "center"}} className="p-4">
    <h3 className="p-4">TeleHealth</h3>
    <h4 className="p-4 cont-content">WE understand that factors like lack of transport and mobility often restrict access to HEALTH care.</h4>
    <h5 className="cont-content">To bridge the gap in access, we use telehealth to make sure that all our patients can get the quality care they need regardless of location. We hope that this new technology will help us to better meet the needs of new and existing patients. 
    This would also be a great opportunity to receive follow up advice and clear your doubts with just a call. And call today to BOOK AN APPOINTMENT FOR AUDIO / VIDEO CONSULTATION 
    </h5>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}} className="mt-6">
    <a aria-label="call us" style={{cursor:"pointer"}} href="tel:+063801 36936"><img loading="lazy"src={call} alt="" className="" /></a>
    <p className="cont-content"><a style={{cursor:"pointer"}} aria-label="call us" href="tel:+063801 36936">6380136936</a></p>
    </div>

   </div>
  );
};

export default ContactForm;
