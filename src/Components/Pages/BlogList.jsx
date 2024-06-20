import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import image from "../../assets/images/banner/blogbanner.png"
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/Firebase';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    const fetchBlogPosts = async () => {
      try {
        const blogPostsCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogPostsCollection);
        const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogPosts(posts);
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
      <PageBanner image={image} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {blogPosts.map((post) => (
          <div key={post.id} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={post.imageURL} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '8px' }}>{post.title}</h3>
            <Link to={`/blog/${post.id}`} style={{ display: 'block', marginTop: '8px', padding: '8px 16px', backgroundColor: '#B39244', color: 'white', textAlign: 'center', borderRadius: '4px', textDecoration: 'none' }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default SingleBlog;
