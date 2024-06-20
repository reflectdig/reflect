import React, {useState} from 'react'
import { useGlobalState, closePopup, openPopup } from '../Components/State/GlobalState';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/Firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
 

  const { open, dispatch } = useGlobalState();

  // const handleOpen = () => {
  //   if (open) {
  //     closePopup(dispatch);
  //   } else {
  //     openPopup(dispatch);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
     
      await addDataToFirestore();
     
    } catch (error) {
     
    }

    setName('');
    setPhoneNumber('');
    setTimeSlot('')

    closePopup(dispatch);
  };

  const addDataToFirestore = async () => {
    const formData = {
      name,
      phoneNumber,
      timeSlot,
      status:"NEW",
      timestamp: serverTimestamp(),
    };

    const formDataRef = collection(db, 'formData');
    await addDoc(formDataRef, formData);

    let opitons = {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    }
  
    fetch('https://serveremail-1.onrender.com/reflect/sendemail',opitons)
    
    .then((res)=>res.json())
    .then(response=>{
     
    })
    
  };

  return (
    <>
    <div style={{textAlign: "center", color: "black"}} className="p-4">
    <DialogHeader style={{textAlign: "center"}}>Book your appointment now!</DialogHeader>
              <DialogBody>               
              <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">                
                <div className="mb-1 flex flex-col gap-6">                  
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    size="lg"
                    placeholder="phone number"
                    type='number'
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  </div>
                  <br />
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{color: "black"}}>Select a time slot</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <FormControlLabel value="10am - 4pm"  control={<Radio />} label="10am - 4pm"  />
                    <FormControlLabel value="4pm - 7pm"  control={<Radio />} label="4pm - 7pm"  />
                    
                  </RadioGroup>

                  </form>
              </DialogBody>
              <DialogFooter>
                {/* <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                  aria-label='Cancel Contact Form'
                >
                  <span>Cancel</span>
                </Button> */}
                <Button aria-label='Confirm Contact Form' variant="gradient" color="amber" onClick={handleSubmit}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
      {/* <h4 className="p-4 cont-content">WE understand that factors like lack of transport and mobility often restrict access to HEALTH care.</h4>
      <h5 className="cont-content">To bridge the gap in access, we use telehealth to make sure that all our patients can get the quality care they need regardless of location. We hope that this new technology will help us to better meet the needs of new and existing patients. 
      This would also be a great opportunity to receive follow up advice and clear your doubts with just a call. And call today to BOOK AN APPOINTMENT FOR AUDIO / VIDEO CONSULTATION 
      </h5>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}} className="mt-6">
        <a aria-label="call us" style={{cursor:"pointer"}} href="tel:+063801 36936"><img loading="lazy"src={call} alt="" className="" /></a>
        <p className="cont-content"><a style={{cursor:"pointer"}} aria-label="call us" href="tel:+063801 36936">6380136936</a></p>
      </div> */}
    </div>
    </>
  );
};

export default ContactForm;
