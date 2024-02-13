import React, { useEffect  } from "react";
import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { categoryData, categoryDataAest, categoryDataBody, categoryDataHair, categoryDataMedi, categoryDataNail } from "../../constant/dummyData";

import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  mainEvent,
  circleClock,
  rc1,
  rc2,
  target,
  call,
  clock
} from "../../constant/images";
import { Link, useParams } from "react-router-dom";

import {IoIosCall} from "react-icons/io"
import {HiMail} from "react-icons/hi"
import {MdLocationPin} from "react-icons/md";
import {AiFillClockCircle} from "react-icons/ai"
import BookBtn from "../BookBtn";


const EventSingle = ({category}) => {
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
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <img src={card.image} alt="" className=" lg:mb-10 mb-6 block w-full" />
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <h3>{card.title}</h3>
            {card.qanda.map((item, index) => (
              <div className="lg:my-6 my-4" key={index}>
              <h5 className="font-bold" style={{fontSize: "1.3em", marginBottom: "10px"}}>{item.quest}</h5>
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
            {/* <div className="bg-secondary text-white p-10 rounded-md">
              <div
                id="timer"
                className="md:flex space-y-4 md:space-y-0 justify-between text-center "
              > */}
                {/* <div className="text-[44px] font-bold">
                  {days}
                  <div className="text-lg font-medium mt-2 capitalize">
                    days
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {hours}
                  <div className="text-lg font-medium mt-2 capitalize">
                    hours
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {minutes}
                  <div className="text-lg font-medium mt-2 capitalize">
                    minutes
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {seconds}
                  <div className="text-lg font-medium mt-2 capitalize">
                    seconds
                  </div>
                </div> */}
              {/* </div>
            </div> */}
            {/* <div className=" py-6">
              Among the major reasons why Python is “slow”, it really boils down
              to 2 — Python is interpreted as opposed to compiled, ultimately
              leading to slower execution times; and the fact that it is
              dynamically typed. Take, for example, TensorFlow, a Machine
              Learning library available in Python. These libraries were
              actually written in C++ and made available in Python, sort of
              forming a Python implementation. The same goes for Numpy and, to
              an extent, even Caer.
            </div> */}
            {/* <div className="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
              <div className=" text-black font-semibold">Previous</div>
              <ul className="flex space-x-3 lg:justify-end items-center  ">
                {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                  <li key={indx}>
                    <a href="#" className="flex h-8 w-8">
                      <img src={item} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              {/* <div className="wdiget custom-text space-y-5 ">
                <h4 className=" widget-title">Contact Details</h4>
                <ul className="list space-y-6  ">
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <AiFillClockCircle size="20px" />
                      </div>
                      <div>10:00 am - 8:00 pm</div>
                    </div>
                  </li>
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "start", marginTop: "3px"}}>
                      <MdLocationPin size="20px" />
                      </div>
                      <div>Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <HiMail size="20px" />
                      </div>
                      <div>skinreflect@gmail.com</div>
                    </div>
                  </li>

                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <IoIosCall size="20px" />
                      </div>
                      <div>063801 36936</div>
                    </div>
                  </li>
                </ul>
                <BookBtn />
              </div> */}

              <div className="wdiget">
                <h4 className=" widget-title">Other treatments</h4>
                {
                   treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail"      ?
                
                <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Skin Treatments</h5>
                  <div>
                 <Link to="/acne">
                  <span className=" text-primary font-semibold">
                   Acne
                  </span>
                  </Link>
                  </div>
                  <div>
                 <Link to="/skininfection">
                  <span className=" text-primary font-semibold">
                   Skin Infection
                  </span>
                  </Link>
                  </div>
                 <div>
                  <Link to='/skinallergiesandurticaria'>
                  <span className=" text-primary font-semibold">
                   Skin Allergies and Urticaria
                  </span>
                  </Link>
                  </div>
                 <div>
                  <Link to="/skingrowths">
                  <span className=" text-primary font-semibold">
                  Skin Growths
                  </span>
                  </Link>
                  </div>
                 <div>
                  <span className=" text-primary font-semibold">
                    <Link to="/pigmentation">
                      Pigmentation
                    </Link>
                  </span>
                  </div>
                 <div>
                  <Link to="/vitiligo">
                  <span className=" text-primary font-semibold">
                  Vitiligo
                  </span>
                  </Link>
                </div>
                <div>
                  <Link to="/psoriasis">
                  <span className=" text-primary font-semibold">
                  Psoriasis
                  </span>
                  </Link>
                </div>
                <div>
                  <Link to="/chroniculcers">
                  <span className=" text-primary font-semibold">
                  Chronic Ulcers
                  </span>
                  </Link>
                </div>
                <div>
                  <Link to="/pcosandskin">
                  <span className=" text-primary font-semibold">
                  PCOS and Skin
                  </span>
                  </Link>
                </div>
                <div >
                <Link to={"/unevenskintone"}>
                <span className=" text-primary font-semibold">
                  Uneven Skin Tone
                </span>
                </Link>
                </div>
                <div >
                <Link to={"/openpores"}>
                <span className=" text-primary font-semibold">
                  Open Pores
                  </span>
                </Link>
                </div>
                <div >
                <Link to={"/skintags"}>
                <span className=" text-primary font-semibold">
                  Skintags
                </span>
                  </Link>
                </div>
                <div>
                  <Link to="/vaginaldischarge">
                  <span className=" text-primary font-semibold">
                  Vaginal Discharge
                  </span>
                  </Link>
                </div>
               

                  <hr />
                </ul>
                :
                null
                 }

                {
                 treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Hair</h5>
                 <div>
                  <Link to="/dandruff">
                  <span className=" text-primary font-semibold">
                        Dandruff
                  </span>
                  </Link>
                  </div>
                 <div>
                  <Link to="/hairloss" >
                  <span className=" text-primary font-semibold">
                    Hair Loss
                  </span>
                  </Link>
                  </div>
                 <div>
                  <Link to='/damagedhair'>
                  <span className=" text-primary font-semibold">
                        Damaged Hair
                  </span>
                  </Link>
                  
                  </div>
                 <div>
                  <Link to="/prematuregreyingofhair">
                  <span className=" text-primary font-semibold">
                     Premature Greying of Hair
                  </span>
                  </Link>
                  </div>
                 
                  <hr />

                </ul>
                :
                null
                }

               {
                 treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Body</h5>
                  <div>
                  <Link to="/excessivesweating">
                  <span className=" text-primary font-semibold">
                    Excessive Sweating
                  </span>
                  </Link>
                  </div><div>
                  <Link to="/excessivebodyhair">
                  <span className=" text-primary font-semibold">
                   Excessive Body Hair
                  </span>
                  </Link>
                  </div>
                  <hr/>
                  </ul>
                  :
                  null
                  }
                  {
                    treatment === "Skin" || treatment === "Hair" || treatment === "Body" || treatment === "Nail" ?
                  <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Nail</h5>
                  <div>
                  <Link to="/nailinfection">
                  <span className=" text-primary font-semibold">
                   Nail Infection
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/dystrophy">
                  <span className=" text-primary font-semibold">
                  Dystrophy
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/ingrowingtoenail">
                  <span className=" text-primary font-semibold">
                   Ingrown Toe Nail
                  </span>
                  </Link>
                  </div>
                  <hr/>
                  </ul>
                  :
                  null
                  }
                   {
                   treatment === "AProducer" || treatment === "MProducer" ?
                  <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Aesthetic Procedure</h5>
                  <div>
                  <Link to="/chemicalpeeling">
                  <span className=" text-primary font-semibold">
                  Chemical Peeling
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/laserskintoningandrejuvenation">
                  <span className=" text-primary font-semibold">
                  Laser Skin Toning and Rejuvenation
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/microneedling">
                  <span className=" text-primary font-semibold">
                   Microneedling
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/prp">
                  <span className=" text-primary font-semibold">
                   PRP
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/excessivebodyhairremovalwithlaser">
                  <span className=" text-primary font-semibold">
                  Excessive Body Hair - Removal With Laser
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/skintagmolewarttreatment">
                  <span className=" text-primary font-semibold">
                  Skin Tag, Mole, Wart Treatment
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/microdermabrasion">
                  <span className=" text-primary font-semibold">
                   Microdermabrasion
                  </span>
                  </Link>
                  </div>
                  <div > 
                   <Link to={"/hydrafacial"}>
                  <span className=" text-primary font-semibold">
                      Hydrafacial
                      </span>
                   </Link>
                  </div>
                  <div > 
                  <Link to={"/medifacials"}>
                  <span className=" text-primary font-semibold">
                        Medi Facials
                  </span>
                  </Link>
                  </div>
                   <div > 
                   <Link to={"/acnescarandporetreatments"}>
                  <span className=" text-primary font-semibold">
                    Acne Scar and Pore Treatments
                  </span>
                   </Link>
                   </div>
                   <li > 
                    <Link to={"/tattooremoval"}>
                     <span className=" text-primary font-semibold">
                      Tattoo Removal
                      </span>
                    </Link>
                   </li>
                  
                   {/* <li > 
                    <Link to={"/miliaandskintagremoval"}>
                  <span className=" text-primary font-semibold">
                      Milia and Skin Tag Removal
                  </span>
                     </Link>
                    </li> */}
                    <li > 
                      <Link to={"/molesandfreckles"}>
                       <span className=" text-primary font-semibold">
                        Moles and Freckles
                        </span>
                      </Link>
                    </li>
                  <hr/>
                  </ul>
                  :
                  null
                  }
                  {
                    treatment === "MProducer" || treatment === "AProducer"  ?
                  <ul className="list space-y-2">
                  <hr />
                  <h5 style={{fontWeight: "bolder"}}>Medical Procedure</h5>
                  <div>
                  <Link to="/comedoneextraction">
                  <span className=" text-primary font-semibold">
                  Comedone Extraction
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/biopsies">
                  <span className=" text-primary font-semibold">
                  Biopsies
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/procedureforingrowntoenails">
                  <span className=" text-primary font-semibold">
                   Procedure for Ingrown Toe Nails
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/keloids">
                  <span className=" text-primary font-semibold">
                   Keloids
                  </span>
                  </Link>
                  </div>
                  <div>
                  <Link to="/scartreatment">
                  <span className=" text-primary font-semibold">
                   Scar Treatment
                  </span>
                  </Link>
                  </div>
                  <div > 
                    <Link to={"/cornwarttreatment"}>
                     <span className=" text-primary font-semibold">
                          Corn Wart Treatment
                      </span>
                    </Link>
                  </div>
                  <div > 
                     <Link to={"/lipomaremoval"}>
                        <span className=" text-primary font-semibold">
                        Lipoma Removal
                        </span>
                     </Link>
                  </div>
                  <div > 
                    <Link to={"/vitiligosurgeries"}>
                    <span className=" text-primary font-semibold">
                          Vitiligo Surgeries
                    </span>
                    </Link>
                  </div>
                  <div > 
                    <Link to={"/earloberepair"}>
                    <span className=" text-primary font-semibold">
                          Ear Lobe Repair
                    </span>
                    </Link>
                  </div>
                  {/* <div > 
                    <Link to={"/removekeloidsandscars"}>
                    <span className=" text-primary font-semibold">
                          Remove Keloids and Scars
                    </span>
                    </Link>
                  </div> */}
                  <hr/>
                  </ul>
                  :
                  null
                  }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <Footer />
    </>
  );
};

export default EventSingle;
