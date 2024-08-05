import React, { useEffect  } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { categoryData, categoryDataAest, categoryDataBody, categoryDataHair, categoryDataMedi, categoryDataNail } from "../../constant/dummyData";
import {  useParams } from "react-router-dom";
import ErrorPage from "./404Page";


const EventSingle = () => {
  let treatment = "";

  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime(); // Update the count down every 1 second

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Display the result in the element with id="demo"

        document.getElementById("timer").innerHTML =
          "<div class='text-[44px] font-bold'>" +
          days +
          "<div class=' text-lg font-medium mt-2 capitalize'>days</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          hours +
          "<div class='text-lg font-medium mt-2 capitalize'>hours</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          minutes +
          "<div class='text-lg font-medium mt-2 capitalize'>minutes</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          seconds +
          "<div class='text-lg font-medium mt-2 capitalize'>seconds</div></div>"; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }, []);
  const { cardId } = useParams();
  let card;

  if (["acne", "skininfection", "skinallergiesandurticaria", "skingrowths", "pigmentation", "vitiligo", "psoriasis", "chroniculcers", "pcosandskin", "unevenskintone","openpores","skintags","vaginaldischarge"].includes(cardId)) {
    card = categoryData[cardId];
    treatment = 'Skin';
  } else if (["dandruff", "hairloss", "damagedhair", "prematuregreyingofhair"].includes(cardId)) {
    card = categoryDataHair[cardId];
    treatment='Hair';
  } else if (["excessivesweating", "excessivebodyhair"].includes(cardId)) {
    card = categoryDataBody[cardId];
    treatment = 'Body';
  } else if (["nailinfection", "dystrophy", "ingrowingtoenail"].includes(cardId)) {
    card = categoryDataNail[cardId];
    treatment = 'Nail';
  } else if (["chemicalpeeling", "laserskintoningandrejuvenation", "microneedling", "prp", "excessivebodyhairremovalwithlaser", "skintagmolewarttreatment", "microdermabrasion","hydrafacial","medifacials","acnescarandporetreatments","tattooremoval","miliaandskintagremoval","molesandfreckles"].includes(cardId)) {
    card = categoryDataAest[cardId];
    treatment = 'AProducer';
  } else if (["comedoneextraction", "biopsies", "procedureforingrowntoenails", "keloids", "scartreatment","cornwarttreatment","lipomaremoval","vitiligosurgeries","earloberepair","removekeloidsandscars"].includes(cardId)) {
    card = categoryDataMedi[cardId];
    treatment = 'MProducer';

  }


  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

  return (
    <>
    <Header />
    {
      card ?
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container mt-5">
        <img src={card?.image} loading={'eager'} alt={card.title} className=" lg:mb-10 mb-6 block w-full" />
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <h1 className='column-title'>{card.title}</h1>
            {card.qanda.map((item, index) => (
              <div className="lg:my-6 my-4" key={index}>
              <h4 className="font-bold" style={{fontSize: "1.3em", marginBottom: "10px"}}>{item.quest}</h4>
               {Array.isArray(item.ans) ? 
               <ul type="1">
                 {
                  item.ans.map((point,index)=>
                  <li key={index} style={{marginBottom:"10px"}}>
                    {index +1 }. &nbsp; {point}
                  </li>)
                 }
               </ul>
                : item.ans
                }
            </div>
            ))}
            <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
              Book Appointment
            </a>
          </div>
          <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
         
              <div className="wdiget">
                <h4 className=" widget-title">Other treatments</h4>
                {
                   treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail"      ?
                
                <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Skin Treatments</h5>
                  <div>
                 <a href="/acne">
                  <span className=" text-primary font-semibold">
                   Acne
                  </span>
                  </a>
                  </div>
                  <div>
                 <a href="/skininfection">
                  <span className=" text-primary font-semibold">
                   Skin Infection
                  </span>
                  </a>
                  </div>
                 <div>
                  <a href='/skinallergiesandurticaria'>
                  <span className=" text-primary font-semibold">
                   Skin Allergies and Urticaria
                  </span>
                  </a>
                  </div>
                 <div>
                  <a href="/skingrowths">
                  <span className=" text-primary font-semibold">
                  Skin Growths
                  </span>
                  </a>
                  </div>
                 <div>
                  <span className=" text-primary font-semibold">
                    <a href="/pigmentation">
                      Pigmentation
                    </a>
                  </span>
                  </div>
                 <div>
                  <a href="/vitiligo">
                  <span className=" text-primary font-semibold">
                  Vitiligo
                  </span>
                  </a>
                </div>
                <div>
                  <a href="/psoriasis">
                  <span className=" text-primary font-semibold">
                  Psoriasis
                  </span>
                  </a>
                </div>
                <div>
                  <a href="/chroniculcers">
                  <span className=" text-primary font-semibold">
                  Chronic Ulcers
                  </span>
                  </a>
                </div>
                <div>
                  <a href="/pcosandskin">
                  <span className=" text-primary font-semibold">
                  PCOS and Skin
                  </span>
                  </a>
                </div>
                <div >
                <a href={"/unevenskintone"}>
                <span className=" text-primary font-semibold">
                  Uneven Skin Tone
                </span>
                </a>
                </div>
                <div >
                <a href={"/openpores"}>
                <span className=" text-primary font-semibold">
                  Open Pores
                  </span>
                </a>
                </div>
                <div >
                <a href={"/skintags"}>
                <span className=" text-primary font-semibold">
                  Skintags
                </span>
                  </a>
                </div>
                <div>
                  <a href="/vaginaldischarge">
                  <span className=" text-primary font-semibold">
                  Vaginal Discharge
                  </span>
                  </a>
                </div>
               

                  <hr />
                </div>
                :
                null
                 }

                {
                 treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Hair</h5>
                 <div>
                  <a href="/dandruff">
                  <span className=" text-primary font-semibold">
                        Dandruff
                  </span>
                  </a>
                  </div>
                 <div>
                  <a href="/hairloss" >
                  <span className=" text-primary font-semibold">
                    Hair Loss
                  </span>
                  </a>
                  </div>
                 <div>
                  <a href='/damagedhair'>
                  <span className=" text-primary font-semibold">
                        Damaged Hair
                  </span>
                  </a>
                  
                  </div>
                 <div>
                  <a href="/prematuregreyingofhair">
                  <span className=" text-primary font-semibold">
                     Premature Greying of Hair
                  </span>
                  </a>
                  </div>
                 
                  <hr />

                </div>
                :
                null
                }

               {
                 treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Body</h5>
                  <div>
                  <a href="/excessivesweating">
                  <span className=" text-primary font-semibold">
                    Excessive Sweating
                  </span>
                  </a>
                  </div><div>
                  <a href="/excessivebodyhair">
                  <span className=" text-primary font-semibold">
                   Excessive Body Hair
                  </span>
                  </a>
                  </div>
                  <hr/>
                  </div>
                  :
                  null
                  }
                  {
                    treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                  <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Nail</h5>
                  <div>
                  <a href="/nailinfection">
                  <span className=" text-primary font-semibold">
                   Nail Infection
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/dystrophy">
                  <span className=" text-primary font-semibold">
                  Dystrophy
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/ingrowingtoenail">
                  <span className=" text-primary font-semibold">
                   Ingrown Toe Nail
                  </span>
                  </a>
                  </div>
                  <hr/>
                  </div>
                  :
                  null
                  }
                   {
                   treatment === "AProducer" || treatment === "MProducer" ?
                  <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Aesthetic Procedure</h5>
                  <div>
                  <a href="/chemicalpeeling">
                  <span className=" text-primary font-semibold">
                  Chemical Peeling
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/laserskintoningandrejuvenation">
                  <span className=" text-primary font-semibold">
                  Laser Skin Toning and Rejuvenation
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/microneedling">
                  <span className=" text-primary font-semibold">
                   Microneedling
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/prp">
                  <span className=" text-primary font-semibold">
                   PRP
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/excessivebodyhairremovalwithlaser">
                  <span className=" text-primary font-semibold">
                  Excessive Body Hair - Removal With Laser
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/skintagmolewarttreatment" aria-label=" Skin Tag, Mole, Wart Treatment">
                  <span className=" text-primary font-semibold">
                  Skin Tag, Mole, Wart Treatment
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/microdermabrasion" aria-label="Microdermabrasion">
                  <span className=" text-primary font-semibold">
                   Microdermabrasion
                  </span>
                  </a>
                  </div>
                  <div > 
                   <a href={"/hydrafacial"} aria-label="Hydrafacial">
                  <span className=" text-primary font-semibold">
                      Hydrafacial
                      </span>
                   </a>
                  </div>
                  <div > 
                  <a href={"/medifacials"}>
                  <span className=" text-primary font-semibold">
                        Medi Facials
                  </span>
                  </a>
                  </div>
                   <div > 
                   <a href={"/acnescarandporetreatments"}>
                  <span className=" text-primary font-semibold">
                    Acne Scar and Pore Treatments
                  </span>
                   </a>
                   </div>
                   <div > 
                    <a href={"/tattooremoval"}>
                     <span className=" text-primary font-semibold">
                      Tattoo Removal
                      </span>
                    </a>
                   </div>
                  
                  
                    <div > 
                      <a href={"/molesandfreckles"}>
                       <span className=" text-primary font-semibold">
                        Moles and Freckles
                        </span>
                      </a>
                    </div>
                  <hr/>
                  </div>
                  :
                  null
                  }
                  {
                    treatment === "MProducer" || treatment === "AProducer"  ?
                  <div className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Medical Procedure</h5>
                  <div>
                  <a href="/comedoneextraction">
                  <span className=" text-primary font-semibold">
                  Comedone Extraction
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/biopsies">
                  <span className=" text-primary font-semibold">
                  Biopsies
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/procedureforingrowntoenails">
                  <span className=" text-primary font-semibold">
                   Procedure for Ingrown Toe Nails
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/keloids">
                  <span className=" text-primary font-semibold">
                   Keloids
                  </span>
                  </a>
                  </div>
                  <div>
                  <a href="/scartreatment">
                  <span className=" text-primary font-semibold">
                   Scar Treatment
                  </span>
                  </a>
                  </div>
                  <div > 
                    <a href={"/cornwarttreatment"}>
                     <span className=" text-primary font-semibold">
                          Corn Wart Treatment
                      </span>
                    </a>
                  </div>
                  <div > 
                     <a href={"/lipomaremoval"}>
                        <span className=" text-primary font-semibold">
                        Lipoma Removal
                        </span>
                     </a>
                  </div>
                  <div > 
                    <a href={"/vitiligosurgeries"}>
                    <span className=" text-primary font-semibold">
                          Vitiligo Surgeries
                    </span>
                    </a>
                  </div>
                  <div > 
                    <a href={"/earloberepair"}>
                    <span className=" text-primary font-semibold">
                          Ear Lobe Repair
                    </span>
                    </a>
                  </div>
                  
                  <hr/>
                  </div>
                  :
                  null
                  }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <ErrorPage/>
    }


      <Footer />
    </>
  );
};

export default EventSingle;
