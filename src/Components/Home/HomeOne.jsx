import React, { useEffect } from "react";
import Banner from "../Banner";
import CourseSection from "../HomeThreeComponents/CourseSection";
import AboutUs from "../HomeThreeComponents/AboutUs";
import Footer from "../Footer";
import Header from "../Header";
import Team from "../HomeThreeComponents/Team";
import Intro from "../Intro";
import BLogStandard from "../Pages/BLogStandard";
import HelmetWrapper from '../../HelmetWrapper';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';

const HomeOne = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            <DocumentTitle title='Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic.'>
                
            </DocumentTitle>
            {/* <HelmetWrapper
                title="Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic"
                description="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!"
            /> */}
            {/* <Head>
                <title>Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic</title>
                <meta name="description" content="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!" />
            </Head> */}
            <head>
                <meta name='title' content='Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic' />
                <meta name="description" content="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!" />
            </head>

            <Helmet>
                <title>Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic</title>
                <meta name="description" content="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!" />
            </Helmet>
            <Header />
            <Banner />
            <Intro />
            <CourseSection />
            <BLogStandard />
            <AboutUs />
            <Team />
            <Footer />
        </>
    );
};

export default HomeOne;
