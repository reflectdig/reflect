import React, { useState, useEffect } from 'react';
import PageBanner from "../PageBanner";
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import Footer from "../Footer";
import Header from "../Header";
import image from "../../assets/images/banner/blogbanner.png";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/Firebase';
import { Link } from 'react-router-dom';
import HelmetWrapper from '../../HelmetWrapper';

const BlogStandard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    try {
      const blogPostsCollection = collection(db, "blogs");
      const querySnapshot = await getDocs(blogPostsCollection);
      const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const publishedPosts = posts.filter(post => post.published);
      setBlogPosts(publishedPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <Header />
      <HelmetWrapper
        title="Blogs | Reflect Clinic"
        description="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!"
      />
      <PageBanner image={image} />
      <div className="nav-tab-wrapper tabs section-padding">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-1 gap-[30px]">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13">
                    <Link to={`/blog/${post.name}`}>
                      <div className="course-thumb h-[420px] rounded-t-[8px] relative">
                        <img
                          src={post.imageURL}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-t-[8px]"
                        />
                      </div>
                      <div className="course-content p-8">
                        <h2 className="">
                          <Link
                            to={`/blog/${post.name}`}
                            className="hover:text-primary transition duration-150"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p>{post.description}</p>
                        <p>{post.date}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 pt-20">
              <div className="sidebarWrapper space-y-[30px]">
                <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
                  <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
                    <div className="wdiget custom-text space-y-5">
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
      <Footer />
    </>
  );
};

export default BlogStandard;
