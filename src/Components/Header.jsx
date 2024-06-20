import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo/logo2.webp";
import MobileMenu from "./MobileMenu";


const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {    
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <a aria-label='logo...'
                href={"/"}
                className="brand-logo flex-none  md:w-auto  "
              >
                <img src={logo} loading="lazy" alt="logo"  className="logo-head" />
              </a>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative ">
                  <ul className="menu-active-classNamees">
                  
                    <li className={`menu-item`}>
                      <a aria-label='Go to Home...' href="/">Home</a>
                        
                    </li>
                    <li className="menu-item">
                      <a aria-label='go to about' href="/about">About</a>
                    </li>

                    <li className={`menu-item`}>
                      <a aria-label='go to our blogs' href="/blogs">Blogs</a>
                    </li>

                    <li className="menu-item-has-children">
                      <a aria-label='Trements Menu' href="#" style={{marginRight:"7px"}}>Treatments</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">                          
                          <a aria-label='Go to Skin' href="/skin"> Skin</a>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li >
                              <a aria-label='Go to Acne' href={"/acne"}>Acne</a>
                            </li>
                            <li >
                              <a aria-label='Go to Skin Infection' href={"/skininfection"}>Skin Infection</a>
                            </li>
                            <li >
                              <a aria-label='Go to Skin Allergies and Urticaria' href={"/skinallergiesandurticaria"}>Skin Allergies and Urticaria</a>
                            </li>
                            <li >
                              <a aria-label='Go to Skin Growths' href={"/skingrowths"}>Skin Growths</a>
                            </li>
                            <li >
                              <a aria-label='Go to Pigmentation' href={"/pigmentation"}>Pigmentation</a>
                            </li>
                            <li >
                              <a aria-label='Go to Vitiligo' href={"/vitiligo"}>Vitiligo</a>
                            </li>
                            <li >
                              <a aria-label='Go to Psoriasis' href={"/psoriasis"}>Psoriasis</a>
                            </li>
                            <li >
                              <a aria-label='Go to Chronic Ulcers' href={"/chroniculcers"}>Chronic Ulcers</a>
                            </li>
                            <li >
                              <a aria-label='Go to Pcos and Skin' href={"/pcosandskin"}>Pcos and Skin</a>
                            </li>
                            <li >
                              <a aria-label='Go to Uneven Skin Tone' href={"/unevenskintone"}>Uneven Skin Tone</a>
                            </li>
                            <li >
                              <a aria-label='Go to Open Pores' href={"/openpores"}>Open Pores</a>
                            </li>
                            <li >
                              <a aria-label='Go to Skintags ' href={"/skintags"}>Skintags</a>
                            </li>
                            <li >
                              <a aria-label='Go to Vaginal Discharge' href={"/vaginaldischarge"}>Vaginal Discharge</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a aria-label='Go to Hair' href={"/hair"}>
                            Hair
                          </a>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <a aria-label='Go to Dandruff ' href={"/dandruff"}>Dandruff</a>
                            </li>
                            <li>
                              <a aria-label='Go to Hair Loss' href={"/hairloss"}>Hair Loss</a>
                            </li>
                            <li>
                              <a aria-label='Go to Damaged Hair ' href={"/damagedhair"}>Damaged Hair</a>
                            </li>
                            <li>
                              <a aria-label='Go to Premature Greying of Hair' href={"/prematuregreyingofhair"}>Premature Greying of Hair</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a aria-label='go to  Body' href={"/body"}>
                            Body
                          </a>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <a aria-label='go to Excessive Sweating' href={"/excessivesweating"}>Excessive Sweating</a>
                            </li>
                            <li>
                              <a aria-label='go to Excessive Body Hair' href={"/excessivebodyhair"}>Excessive Body Hair</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a aria-label='go to Nail' href={"/nail"}>
                            Nail
                          </a>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                            <li>
                              <a aria-label='go to Nail Infection' href={"/nailinfection"}>Nail Infection</a>
                            </li>
                            <li>
                              <a aria-label='go to Dystrophy' href={"/dystrophy"}>Dystrophy</a>
                            </li>
                            <li>
                              <a aria-label='go to Ingrown Toe Nail' href={"/ingrowingtoenail"}>Ingrown Toe Nail</a>
                            </li>
                          </ul>
                        </li>
                        
                        
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a aria-label='go to Procedures' href="#" style={{marginRight:"7px"}}>Procedures</a>
                      <ul className="sub-menu">
                       
                        <li className="menu-item-has-children" >
                          <a aria-label='go to Aesthetic Procedure' href={"/aestheticprocedure"} style={{fontSize:"15px"}} >
                            Aesthetic Procedure
                          </a>
                          <ul className="sub-menu " style={{backgroundColor:"white",borderRadius:'10px'}}>
                           <li > 
                          <a aria-label='go to Chemical Peeling' href={"/chemicalpeeling"}>
                            Chemical Peeling
                          </a>
                          </li>
                          <li>
                          <a aria-label='go to Laser Skin Toning and Rejuvenation ' href={"/laserskintoningandrejuvenation"}>
                            Laser Skin Toning and Rejuvenation
                          </a>
                          </li>
                          <li>
                          <a aria-label='go to Microneedling' href={"/microneedling"}>
                            Microneedling
                          </a>
                          </li>  
                          <li>
                          <a aria-label='go to PRP' href={"/prp"}>
                            PRP
                          </a>
                          </li>    
                          <li> 
                          <a aria-label='go to Excessive Body Hair - Removal With Laser' href={"/excessivebodyhairremovalwithlaser"}>
                            Excessive Body Hair - Removal With Laser
                          </a>
                          </li> 
                          <li> 
                          <a aria-label='go to Skin Tag , Mole ,Wart Treatment' href={"/skintagmolewarttreatment"}>
                            Skin Tag , Mole ,Wart Treatment
                          </a>
                          </li> 
                          <li> 
                          <a aria-label='go to Microder Mabrasion' href={"/microdermabrasion"}>
                            Microder Mabrasion
                          </a>
                          </li>   
                          <li > 
                          <a aria-label='go to Hydrafacial' href={"/hydrafacial"}>
                          Hydrafacial
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Medi Facials' href={"/medifacials"}>
                          Medi Facials
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Acne Scar and Pore Treatments' href={"/acnescarandporetreatments"}>
                          Acne Scar and Pore Treatments
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Tattoo Removal' href={"/tattooremoval"}>
                          Tattoo Removal
                          </a>
                          </li>
                          
                          <li > 
                          <a aria-label='go to Moles and Freckles' href={"/molesandfreckles"}>
                          Moles and Freckles
                          </a>
                          </li>                    
                          </ul>
                        </li>
                        
                        <li className="menu-item-has-children" >
                          <a aria-label='go to Moles and Freckles' href={"/medicalprocedure"} style={{fontSize:"15px"}}>
                            Medical Procedure
                          </a>
                          <ul className="sub-menu" style={{backgroundColor:"white",borderRadius:'10px'}}>
                           <li > 
                          <a aria-label='go to Comedone Extraction' href={"/comedoneextraction"}>
                            Comedone Extraction
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Biopsies' href={"/biopsies"}>
                            Biopsies
                          </a>
                          </li>
                         
                          <li > 
                          <a aria-label='go to Procedure For Ingrown Toe Nails' href={"/procedureforingrowntoenails"}>
                            Procedure For Ingrown Toe Nails
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Keloids' href={"/keloids"}>
                            Keloids
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Scar Treatment' href={"/scartreatment"}>
                            Scar Treatment
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Corn Wart Treatment' href={"/cornwarttreatment"}>
                          Corn Wart Treatment
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Lipoma Removal' href={"/lipomaremoval"}>
                          Lipoma Removal
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Vitiligo Surgeries' href={"/vitiligosurgeries"}>
                          Vitiligo Surgeries
                          </a>
                          </li>
                          <li > 
                          <a aria-label='go to Ear Lobe Repair' href={"/earloberepair"}>
                          Ear Lobe Repair
                          </a>
                          </li>
                          
                        
                          </ul>
                          </li>
                      </ul>
                    </li>
                    
                   
                    
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                
                <div className={`hidden lg:block`}  >
                <a aria-label='go to Contact' href={"/contact"} className="btn font-bold btn-primary py-[15px] px-8 lg:w-auto">
                 Contact
                </a>
               </div>
                  
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                      aria-label="open mobile aside Menu"
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
