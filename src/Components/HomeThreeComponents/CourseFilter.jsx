import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { Fragment, useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const CourseFilter = ({ activeData, mainData, setFilterData, setActiveData })=>{
const [ishover , setIshover] = useState(false);
const [ishover1 , setIshover1] = useState(false);

    useEffect(() => {
        if (activeData === 0) {
            setFilterData(mainData);
        }
        const filteredData = mainData.filter((e) => e.id.includes(activeData));
        setFilterData(filteredData);
    }, [activeData, setFilterData, mainData]);

    return (
        <ul className="filter-list flex xl:space-x-[39px] space-x-4 shadow-lg rounded-lg  " style={{ textTransform: 'capitalize',padding:"10px 10px 5px 10px"  }}>
            {['skin', 'hair', 'nail', 'body', 'more'].map((item, index) => (
                <Fragment key={index}>
                    {item === "more" ? (
                        <Menu style={{border: "none"}}>
                    
                        <MenuHandler > 
                            <div style={{display:"flex",flexDirection:"row"}}>
                             <button style={{color: "#131313", fontWeight: "bolder",fontSize:"1rem"}} className='fil-treat' > More </button>
                             <div  style={{margin:" 15px 0px 0px 10px"}}> <IoIosArrowDown /> </div>
                            </div>                           
                        </MenuHandler>

                        <MenuList style={{border: "none"}} >
                            <Link to="/medicalprocedure">
                            <MenuItem  style={{border:"none",color: "#131313", padding:"5px",fontWeight: "bolder", fontFamily: "Gilroy",backgroundColor: ishover ? '#B89148' : null,color: ishover ? 'white' : null}}
                             onMouseEnter={() => setIshover(true)}
                             onMouseLeave={() => setIshover(false)}
                             >Medical Procedure</MenuItem>
                            </Link>
                            <Link to="/aestheticprocedure" style={{border: "none"}}>
                            <MenuItem style={{border: "none",color: "#131313",  padding:"5px" , fontWeight: "bolder", fontFamily: "Gilroy",backgroundColor: ishover1 ? '#B89148' : null,color: ishover1 ? 'white' : null}}
                             onMouseEnter={() => setIshover1(true)}
                             onMouseLeave={() => setIshover1(false)}>Aesthetic Procedure</MenuItem>
                            </Link>
                        </MenuList>

                        </Menu>
                        
                    ) : (
                        <li
                            className={activeData === item ? `filter fil-treat active` : "fil-treat filter"}
                            
                            onClick={() => setActiveData(item)}
                        >
                            {item}
                        </li>
                    )}

                   
                </Fragment>
            ))}
             

        </ul>
    )
}

export default CourseFilter