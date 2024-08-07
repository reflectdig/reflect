import React from "react";
import { Container } from '@mui/material'

import '../../assets/css/sections/about-us.css'

const AboutUs = () => {
	return (
		<div className='intro-main'>
			<Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "85vh", padding: "20px 40px", marginBottom: "60px" }}>
				<h2 className='mb-5'>
					About&nbsp;
					<span className="text-secondary">Us</span>
				</h2>
				<div style={{ textAlign: "justify-center", textAlignLast: "center" }}>
					<span className="about-us-summary">
						Reflect Skin & Clinic, located Near PSG hospitals, Peelamedu Coimbatore is a State of Art Dermatology centre, run by Dermatologists.
						
						<br/><br/>
						
						We at Reflect, believe that Skin is a Reflect of Internal well-being. Why do we get Sun rash on one fine day or why is the acne resistant to conventional treatment methods? Unless we go on to address the underlying cause of each, there is no end to the problem. Sometimes the closure is just the diagnosis of the disease itself.

						<br/><br/>

						Dermatology has its roots in Immunology, Genetics and Endocrinology, as our mentor elegantly puts it. He goes on to say, what we see on the skin are just the leaves of this tree and the roots are deep within the above three elements! Unless we treat the Vit D deficiency, the Sun rash is going to keep coming back. We try to see this root in every patient we encounter and just not treat the Skin.
						
						The treatment of any problem involves three parties. The patient, their family and the doctor. We believe the treatment options that we provide should be right, pocket friendly, feasible to follow on a daily basis and on a long term in order to achieve desirable results. We provide that time to each patient wherein the treatment plan is explained beforehand so that they know what to expect when they come back.

						<br/><br/>

						In addition to the vast changes in the skin caused by allergies or diseases, maintaining healthy skin against the effects of ageing, sunlight, and pollution has given birth to the field of Cosmetic Dermatology. At Reflect, we enhance skin health by carefully protecting it and recommending only the necessary and evidence based treatments  to augment its beauty.

					</span>

				</div>
			</Container>
		</div>
	);
};

export default AboutUs;
