import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/ref.png";
import MobileMenu from "./MobileMenu";
import BookBtn from "./BookBtn";import OfferPopup from "./OfferPopup";
;

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      {/* <OfferPopup/> */}
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/reflect"}
                className="brand-logo flex-none  md:w-auto  "
              >
                <img src={logo} alt="logo" className="logo-head" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative ">
                  <ul className="menu-active-classNamees">
                  
                    <li className={`menu-item`}>
                      <a href="/">Home</a>
                        {/* <li>
                          <Link to={"/react-templates/edumim"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-three"}>
                            Home Three
                          </Link>
                        </li> */}
                    </li>
                    <li className={`menu-item`}>
                      <a href="/about">Our&nbsp;Doctor</a>
                        {/* <li>
                          <Link to={"/react-templates/edumim"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-three"}>
                            Home Three
                          </Link>
                        </li> */}
                    </li>
                    <li className="menu-item">
                      <a href="/ourcentre">About</a>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/about"}>
                            About 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            About 2
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor-two"}>
                            Instructor 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/react-templates/edumim/instructor-details"}
                          >
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event-single"}>
                            Event Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/error"}>404</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" style={{marginRight:"7px"}}>Treatments</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link to={"/skin"}>
                            Skin
                          </Link>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                          <li >
                              <Link to={"/acne"}>Acne</Link>
                            </li>
                            <li >
                              <Link to={"/skininfection"}>Skin Infection</Link>
                            </li>
                            <li >
                              <Link to={"/skinallergiesandurticaria"}>Skin Allergies and Urticaria</Link>
                            </li>
                            <li >
                              <Link to={"/skingrowths"}>Skin Growths</Link>
                            </li>
                            <li >
                              <Link to={"/pigmentation"}>Pigmentation</Link>
                            </li>
                            <li >
                              <Link to={"/vitiligo"}>Vitiligo</Link>
                            </li>
                            <li >
                              <Link to={"/psoriasis"}>Psoriasis</Link>
                            </li>
                            <li >
                              <Link to={"/chroniculcers"}>Chronic Ulcers</Link>
                            </li>
                            <li >
                              <Link to={"/pcosandskin"}>Pcos and Skin</Link>
                            </li>
                            <li >
                              <Link to={"/unevenskintone"}>Uneven Skin Tone</Link>
                            </li>
                            <li >
                              <Link to={"/openpores"}>Open Pores</Link>
                            </li>
                            <li >
                              <Link to={"/skintags"}>Skintags</Link>
                            </li>
                            <li >
                              <Link to={"/vaginaldischarge"}>Vaginal Discharge</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to={"/hair"}>
                            Hair
                          </Link>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <Link to={"/dandruff"}>Dandruff</Link>
                            </li>
                            <li>
                              <Link to={"/hairloss"}>Hair Loss</Link>
                            </li>
                            <li>
                              <Link to={"/damagedhair"}>Damaged Hair</Link>
                            </li>
                            <li>
                              <Link to={"/prematuregreyingofhair"}>Premature Greying of Hair</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to={"/body"}>
                            Body
                          </Link>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <Link to={"/excessivesweating"}>Excessive Sweating</Link>
                            </li>
                            <li>
                              <Link to={"/excessivebodyhair"}>Excessive Body Hair</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to={"/nail"}>
                            Nail
                          </Link>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <Link to={"/nailinfection"}>Nail Infection</Link>
                            </li>
                            <li>
                              <Link to={"/dystrophy"}>Dystrophy</Link>
                            </li>
                            <li>
                              <Link to={"/ingrowingtoenail"}>Ingrown Toe Nail</Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <Link to={"/aestheticprocedure"}>
                            Aesthetic Procedure
                          </Link>
                        </li>
                        <li>
                          <Link to={"/medicalprocedure"}>
                            Medical Procedure
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to={"/react-templates/edumim/courses"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/courses-sidebar"}>
                            Courses Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-course"}>
                            Single Course
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" style={{marginRight:"7px"}}>Procedure</a>
                      <ul className="sub-menu">
                       
                        <li className="menu-item-has-children" >
                          <Link to={"/aestheticprocedure"} style={{fontSize:"15px"}} >
                            Aesthetic Procedure
                          </Link>
                          <ul className="sub-menu " style={{backgroundColor:"white",borderRadius:'10px'}}>
                           <li > 
                          <Link to={"/chemicalpeeling"}>
                            Chemical Peeling
                          </Link>
                          </li>
                          <li>
                          <Link to={"/laserskintoningandrejuvenation"}>
                            Laser Skin Toning and Rejuvenation
                          </Link>
                          </li>
                          <li>
                          <Link to={"/microneedling"}>
                            Microneedling
                          </Link>
                          </li>  
                          <li>
                          <Link to={"/prp"}>
                            PRP
                          </Link>
                          </li>    
                          <li> 
                          <Link to={"/excessivebodyhairremovalwithlaser"}>
                            Excessive Body Hair - Removal With Laser
                          </Link>
                          </li> 
                          <li> 
                          <Link to={"/skintagmolewarttreatment"}>
                            Skin Tag , Mole ,Wart Treatment
                          </Link>
                          </li> 
                          <li> 
                          <Link to={"/microdermabrasion"}>
                            Microder Mabrasion
                          </Link>
                          </li>   
                          <li > 
                          <Link to={"/hydrafacial"}>
                          Hydrafacial
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/medifacials"}>
                          Medi Facials
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/acnescarandporetreatments"}>
                          Acne Scar and Pore Treatments
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/tattooremoval"}>
                          Tattoo Removal
                          </Link>
                          </li>
                          {/* <li > 
                          <Link to={"/miliaandskintagremoval"}>
                          Milia and Skin Tag Removal
                          </Link>
                          </li> */}
                          <li > 
                          <Link to={"/molesandfreckles"}>
                          Moles and Freckles
                          </Link>
                          </li>                    
                          </ul>
                        </li>
                        
                        <li className="menu-item-has-children" >
                          <Link to={"/medicalprocedure"} style={{fontSize:"15px"}}>
                            Medical Procedure
                          </Link>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                           <li > 
                          <Link to={"/comedoneextraction"}>
                            Comedone Extraction
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/biopsies"}>
                            Biopsies
                          </Link>
                          </li>
                         
                          <li > 
                          <Link to={"/procedureforingrowntoenails"}>
                            Procedure For Ingrown Toe Nails
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/keloids"}>
                            Keloids
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/scartreatment"}>
                            Scar Treatment
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/cornwarttreatment"}>
                          Corn Wart Treatment
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/lipomaremoval"}>
                          Lipoma Removal
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/vitiligosurgeries"}>
                          Vitiligo Surgeries
                          </Link>
                          </li>
                          <li > 
                          <Link to={"/earloberepair"}>
                          Ear Lobe Repair
                          </Link>
                          </li>
                          {/* <li > 
                          <Link to={"/removekeloidsandscars"}>
                          Remove Keloids and Scars
                          </Link>
                          </li> */}
                        
                          </ul>
                          </li>
                      </ul>
                    </li>
                    
                   
                    {/* <li>
                      <Link to={"/contact"}>
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                
                <div className={`hidden lg:block`}  >
                <Link to={"/contact"} className="btn btn-primary py-[15px] px-8 lg:w-auto">
                 Contact
                </Link>
               </div>
                  {/* <BookBtn btnclass={"hidden"} /> */}
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
