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
                <Button aria-label='Confirm Contact Form' variant="gradient" color="amber" onClick={handleSubmit}>
                  <span>Confirm</span>
            </Button>
          </DialogFooter>
    </div>
    </>
  );
};

export default ContactForm;
