import React, { useState } from 'react'
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
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [timeSlot, setTimeSlot] = useState('10am - 4pm');

    const { open, dispatch } = useGlobalState();
    const navigate = useNavigate();


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

        navigate('/thank-you')

        // window.location.reload();
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
                <span
                    style={{
                        fontSize: "32px",
                        color: "#0C1327",
                        fontWeight: "bold",
                    }}
                >
                    Book your appointment now!
                </span>
                <form
                    style={{
                        marginTop: "25px"
                    }}
                    onSubmit={handleSubmit}
                >
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="name"
                            style={{
                                textAlign: "left"
                            }}
                        >
                            Name *
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2"
                            for="number"
                            style={{
                                textAlign: "left"
                            }}
                        >
                            Phone Number *
                        </label>
                        <input
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number"
                            type="number"
                            placeholder="Phone Number"
                            style={{
                                MozAppearance: "textfield",

                            }}
                            required
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>

                    <label class="block text-gray-700 text-sm font-bold mt-6 mb-2"
                        for="number"
                        style={{
                            textAlign: "left"
                        }}
                    >
                        Select Time Slot *
                    </label>

                    <div class="flex items-center mb-2">
                        <input
                            id="default-radio-1"
                            type="radio"
                            value="10am - 4pm"
                            name="default-radio"
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 "
                            onChange={(event) => setTimeSlot(event.target.value)}
                        />
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-2">10 a.m - 4 p.m</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            id="default-radio-2"
                            type="radio"
                            value="4pm - 7pm"
                            name="default-radio"
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-[#000000] focus:ring-2"
                            onChange={(event) => setTimeSlot(event.target.value)}
                        />
                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-2">4 p.m - 7 p.m</label>
                    </div>

                    <button
                        type="submit"
                        className='w-full rounded-md py-2 mt-6'
                        style={{
                            background: '#b89148',
                            color: '#FFFFFF'
                        }}
                    >
                        Book Appointment
                    </button>

                </form>
            </div>
        </>
    );
};

export default ContactForm;
