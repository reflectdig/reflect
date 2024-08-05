import React, { useEffect, useState } from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import HelmetWrapper from '../HelmetWrapper';
import { getDocs, collection } from 'firebase/firestore';
import parse from 'html-react-parser';
import './BlogPost.css'; 
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { name1 } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogPosts = async () => {
    try {
      const blogPostsCollection = collection(db, "blogs");
      const querySnapshot = await getDocs(blogPostsCollection);
      const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredPost = posts.find(post => post.name === name1 && post.published); // Only get published post
      setBlogPost(filteredPost);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [name1]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="nav-tab-wrapper tabs section-padding">
      <HelmetWrapper
        title={`${blogPost.title} | Reflect Clinic`}
        description={blogPost.description}
      />
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12 pt-10">
            <div className="bg-[#F8F8F8] rounded-md">
              <img 
                src={blogPost.imageURL} 
                alt={blogPost.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }} 
              />
              <div className="px-10 pb-10 blog-content"> 
                <h1 className='mini-title'>{blogPost.title}</h1>
                <div>{blogPost.description}</div>
                <div>{parse(blogPost.subDescription)}</div>
              </div>
            </div>
            <a href="/contact" className="btn font-bold btn-primary mt-4 py-3 px-8 lg:px-10 lg:text-lg lg:py-4">
              Book Appointment
            </a>
          </div>
          <div className="lg:col-span-4 col-span-12 pt-20">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
                <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
                  <div className="widget custom-text space-y-5">
                    <h4 className="widget-title">Contact Details</h4>
                    <ul className="list space-y-6">
                      <li className="flex space-x-3">
                        <div className="flex-1 space-x-3 flex">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <AiFillClockCircle size="20px" />
                          </div>
                          <div>10:00 am - 8:00 pm</div>
                        </div>
                      </li>
                      <li className="flex space-x-3">
                        <div className="flex-1 space-x-3 flex">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "start", marginTop: "3px" }}>
                            <MdLocationPin size="20px" />
                          </div>
                          <div>Ekaparnika Towers, First Floor, Ram Lakshman Nagar, GV Residency Link Road Near National Model School, Sowripalayam, Post, Coimbatore, Tamil Nadu 641028</div>
                        </div>
                      </li>
                      <li className="flex space-x-3">
                        <div className="flex-1 space-x-3 flex">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <HiMail size="20px" />
                          </div>
                          <div>skinreflect@gmail.com</div>
                        </div>
                      </li>
                      <li className="flex space-x-3">
                        <div className="flex-1 space-x-3 flex">
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
