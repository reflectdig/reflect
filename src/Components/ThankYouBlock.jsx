import React, { useState } from 'react'
import { useGlobalState, closePopup, openPopup } from './State/GlobalState';
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
import { FaRegCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ThankYouBlock = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [timeSlot, setTimeSlot] = useState('10am - 4pm');

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

        window.location.reload();
    };

    const addDataToFirestore = async () => {
        const formData = {
            name,
            phoneNumber,
            timeSlot,
            status: "NEW",
            timestamp: serverTimestamp(),
        };


        const formDataRef = collection(db, 'formData');
        await addDoc(formDataRef, formData);

        let opitons = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }

        fetch('https://serveremail-1.onrender.com/reflect/sendemail', opitons)
            .then((res) => res.json())
            .then(response => {
            })
    };

    return (
        <>
            <div
                style={{ textAlign: "center", color: "black" }} className="p-4"
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    <FaRegCheckCircle 
                        style={{
                            fontSize: "60px",
                            color: "#b89148"
                        }}
                    />

                    <p style={{
                        fontSize: "44px",
                        fontWeight: "700",
                        marginTop: "15px"
                    }}>
                        Thank&nbsp;<span style={{ color: "#b89148"}}>You</span>
                    </p>

                    <span
                        style={{
                            fontSize: "1.2em",
                            padding: "0 15px",
                            marginTop: "35px"
                        }}
                    >
                        For booking your appointment. Please click the below button to book another appointment.
                    </span>
                </div>

                <button
                    // type="submit"
                    className='w-full rounded-md py-2 mt-6'
                    style={{
                        background: '#b89148',
                        color: '#FFFFFF'
                    }}
                >
                    <Link
                        to="/contact"
                    >
                        Book Another Appointment
                    </Link>
                </button>
            </div>
        </>
    );
};

export default ThankYouBlock;
