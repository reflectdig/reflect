import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { Fragment, useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const CourseFilter = ({ activeData, mainData, setFilterData, setActiveData })=>{
    const [ishover , setIshover] = useState(false);
    const [ishover1 , setIshover1] = useState(false);
    const [ismenuopen , setIsmenuopen] = useState(false);

    useEffect(() => {
        if (activeData === 0) {
            setFilterData(mainData);
        }
        const filteredData = mainData.filter((e) => e.id.includes(activeData));
        setFilterData(filteredData);
    }, [activeData, setFilterData, mainData]);

    return (
        <div className="filter-container">
            <ul className="filter-list flex xl:space-x-[39px] space-x-4 shadow-lg rounded-lg" style={{ textTransform: 'capitalize', padding: "10px 10px 5px 10px" }}>
                {['skin', 'hair', 'nail', 'body', 'more'].map((item, index) => (
                    <Fragment key={index}>
                        {item === "more" ? (
                            <li onClick={()=>{setIsmenuopen(!ismenuopen)}}>
                              <div role="menu" aria-label="Procedures main Menu" style={{ border: "none" }}>
                                <div  role="menuitem" >
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <button aria-label='View More procedures' style={{ color: "#131313", fontWeight: "bolder", fontSize: "1rem" }} className='fil-treat' > More </button>
                                        <div style={{ margin: " 5px 0px 0px 10px" }}> <IoIosArrowDown /> </div>
                                    </div>
                                </div>
                                {
                                    ismenuopen ?
                                
                                <div role="none" aria-label="Procedures Menu" style={{ border: "none",position:'absolute',backgroundColor:"white",border:"2px solid gray",borderRadius:"10px" }}>
                                    <a href="/medicalprocedure">
                                        <div role="menuitem" aria-label="Medical Procedure" style={{ border: "none", color: "#131313", padding: "5px", fontWeight: "bolder", fontFamily: "Gilroy", backgroundColor: ishover ? '#B89148' : null, color: ishover ? 'white' : null ,borderRadius:"10px" }}
                                            onMouseEnter={() => setIshover(true)}
                                            onMouseLeave={() => setIshover(false)}
                                        >Medical Procedure</div>
                                    </a>
                                    <a href="/aestheticprocedure">
                                        <div role="menuitem" aria-label="Aesthetic Procedure" style={{ border: "none", color: "#131313", padding: "5px", fontWeight: "bolder", fontFamily: "Gilroy", backgroundColor: ishover1 ? '#B89148' : null, color: ishover1 ? 'white' : null,borderRadius:"10px" }}
                                            onMouseEnter={() => setIshover1(true)}
                                            onMouseLeave={() => setIshover1(false)}>Aesthetic Procedure</div>
                                    </a>
                                </div>
                                :
                                null
                            }
                            </div>


                            </li>
                        ) : (
                            <li className={activeData === item ? `filter fil-treat active` : "fil-treat filter"} onClick={() => setActiveData(item)}>
                                {item}
                            </li>
                        )}
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}

export default CourseFilter;
