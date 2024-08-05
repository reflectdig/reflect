import React from 'react'

const SingleCourse = ({ data }) => {
    return (        
            <div className="cat-2 cat-3 grid-item course-home-page-box t-card">
                <a
                    className=" bg-white shadow-box2 rounded-[8px] transition duration-100 
                    hover:shadow-sm block   mb-5 h-[350px]  "
                    href={data.link}
                    aria-label={`go to ${data.post}`}
                >
                    <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                        <img
                            src={data.img}
                            alt=''
                            loading="lazy" 
                            className=" w-full h-full object-cover rounded-t-[8px]"
                        />            
                    </div>
                    <div className="course-content p-8">
                        <p className="text-secondary card-head" >
                            {data.post}
                        </p>
                    </div>
                </a>
            </div>        
    )
}

export default SingleCourse