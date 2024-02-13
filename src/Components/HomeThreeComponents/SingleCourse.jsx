/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { clock, file, star } from '../../constant/images'

const SingleCourse = ({ data }) => {
    return (
        
            <div className="cat-2 cat-3 grid-item course-home-page-box t-card">
                <a
                    className=" bg-white shadow-box2 rounded-[8px] transition duration-100 
                    hover:shadow-sm block   mb-5 h-[350px]  "
                    href={data.link}
                >
                    <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                        <img
                            src={data.img}
                            alt=""
                            className=" w-full h-full object-cover rounded-t-[8px]"
                        />
                        
                    </div>
                    <div className="course-content p-8">
                        {/* <div className="text-secondary font-bold text-2xl mb-3">
                            {data.price}
                        </div> */}
                        <p className="text-secondary card-head" >
                            {data.post}
                        </p>
                        <h4 className=" text-xl mt-6 mb-3 card-content">
                            {/* {data.title} {"..."} */}
                        </h4>
                        <div className="flex justify-between  space-x-3">
                            <span className=" flex items-center space-x-2">
                                {/* <img src={file} alt="" /> */}
                                {/* <span>Read more</span> */}
                            </span>
                            {/* <span className=" flex items-center space-x-2">
                                <img src={clock} alt="" />
                                <span>4h 30m</span>
                            </span>
                            <span className=" flex items-center space-x-2">
                                <img src={star} alt="" />
                                <span>4.8</span>
                            </span> */}
                        </div>
                    </div>
                </a>
            </div>
        
    )
}

export default SingleCourse