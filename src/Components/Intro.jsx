import { Container } from '@mui/material'
import React from 'react';
import ref from "../assets/images/logo/introbg.webp"

export default function Intro() {
    return (
        <div className='intro-main'>
            <Container style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "85vh", padding: "20px 40px",marginBottom:"60px"}}>
                <div className='text-cont-int' style={{textAlign: "justify-center", textAlignLast: "center"}}>
                <img src={ref} loading="lazy" style={{margin: "20px auto"}} alt='banner-image' className='intro-img' />
                    Skin is an interface between the body and the environment. Understanding the structure and function of this barrier is key to a healthy skin. Dermatology is the scientific study of skin functions and skin diseases. And has its roots in Immunology, Genetics and Endocrinology, as our mentor elegantly puts it. He goes on to say, what we see on the skin are just the leaves of this tree and the roots are deep within the above three elements! 
                    We at Reflect make sure to go all the way to the cause and address it. 

                    In addition to the vast changes in the skin caused by allergies or diseases, maintaining healthy skin against the effects of aging, sunlight, and pollution has given birth to the field of Cosmetic Dermatology. At Reflect, we enhance skin health by carefully protecting it and recommending only the necessary and feasible steps to augment its beauty.
                </div>
            </Container>
        </div>
    )
}
