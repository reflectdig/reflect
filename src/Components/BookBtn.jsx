import React, {useState} from 'react'
import { useGlobalState, closePopup, openPopup } from '../Components/State/GlobalState';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Typography
  } from "@material-tailwind/react";
import logo from "../assets/images/logo/introbg.png"
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/Firebase';


export default function BookBtn(props) {

  //bookings

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [submitted, setSubmitted] = useState(false);


  const { open, dispatch } = useGlobalState();

  const handleOpen = () => {
    if (open) {
      closePopup(dispatch);
    } else {
      openPopup(dispatch);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the document to Firestore
      await addDataToFirestore();
      setSubmitted(true);
    } catch (error) {
      console.error('Error adding data to Firestore: ', error);
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
    // Send Emails
    fetch('https://emailservice-gl9m.onrender.com/reflect/sendemail',opitons)
    .then((res)=>res.json())
    .then(response=>{
      //  console.log("response",response);
    })

    
  };
    // bookings

    return (
    
        <>
            <div className={`${props.btnclass} lg:block`} onClick={handleOpen} >
                <a className="btn btn-primary py-[15px] px-8 lg:w-auto">
                  Book Appointment
                </a>
            </div>
            <div >
              <Dialog open={open}  style={{margin: "auto auto", border: " 4px solid #b89148", width: "350px", height: "480px", marginTop: "10%", borderRadius: "30px"}}  size='xxl' >
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
                  <FormLabel id="demo-row-radio-buttons-group-label" >Select a time slot</FormLabel>
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
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="amber" onClick={handleSubmit}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
              
            </Dialog>
           
            </div>
            
        </> 
      );
    }
    