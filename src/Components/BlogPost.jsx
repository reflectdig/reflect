import React, { useEffect, useState } from 'react';
import bban from "../assets/images/banner/blog.png"
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blogData = await getDoc(blogDoc);
      if (blogData.exists()) {
        setBlogPost(blogData.data());
      } else {
        console.error("No such blog post!");
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12 pt-10">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={blogPost.imageURL} alt={blogPost.title}style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }} />
              <div className="px-10 pb-10">
                <h3>
                {blogPost.title}
                </h3>
                <p className="mt-6 blog-content">
                {blogPost.description}
                </p>
                {blogPost.subtitles.map((subtitle, index) => (
                  <div key={index}>
                    <h3>{subtitle.title}</h3>
                    <p className="mt-6 blog-content">{subtitle.description}</p>
                  </div>
                ))}
              </div>
            </div>
           </div>


          <div className="lg:col-span-4 col-span-12 pt-20">
            <div className="sidebarWrapper space-y-[30px]">
            <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
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
                <a href="/contact" className="btn font-bold btn-primary py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
                  Book Appointment
                </a>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;