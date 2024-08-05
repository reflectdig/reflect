import React, {useState, useEffect} from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { storage, db, storageRef } from '../config/Firebase'
import { collection, addDoc, getDocs, deleteDoc, updateDoc , doc, onSnapshot  } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '@mui/material';
import YoutubePlayer from 'react-youtube-player';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { upload } from '@testing-library/user-event/dist/upload';
import { FaLevelDownAlt, FaCloudUploadAlt, FaBold, FaLink, FaItalic, FaListOl, FaListUl, FaQuoteLeft, FaRedo, FaStrikethrough, FaUnderline, FaUndo } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import './styleadmin.css';
import parse from 'html-react-parser';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = prompt('Enter the URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  return (
    <div className="menuBar">
      <div>
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is_active' : ''}>
          <FaBold />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is_active' : ''}>
          <FaItalic />
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'is_active' : ''}>
          <FaUnderline />
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is_active' : ''}>
          <FaStrikethrough />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is_active' : ''}>
          <strong>H1</strong>
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is_active' : ''}>
          <strong>H2</strong>
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is_active' : ''}>
          <strong>H3</strong>
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is_active' : ''}>
          <FaListUl />
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is_active' : ''}>
          <FaListOl />
        </button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is_active' : ''}>
          <FaQuoteLeft />
        </button>
        <button onClick={addLink} className={editor.isActive('link') ? 'is_active' : ''}>
          <FaLink />
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} className="">
          <FaLevelDownAlt />
        </button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

const Tiptap = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default function Admin() {

  //bookings
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);

  //appointment
  const [formData, setFormData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filterbystatus,setFilterbyStatus] = useState("NEW");
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  // Offers
  const [contentType,setContentType]= useState(null);
  const [offersource,setOfferSource] = useState(null);
  const [Text,setText] = useState("");
  const [image,setImage] = useState(null);
  const [videoLink,setVideoLink] = useState(null);
  const [Offers,setOffers] = useState([]);

  // Blog
  const [BlogImageUpload, setBlogImageUpload] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [BlogTitle, setBlogTitle] = useState('');
  const [BlogDescription, setBlogDescription] = useState('');
  const [BlogSubDescription, setBlogSubDescription] = useState('');
  const [BlogDate, setBlogDate] = useState(new Date().toISOString().split('T')[0]);
  const [BlogName, setBlogName] = useState('');
  const [blogNameError, setBlogNameError] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  const blogPostsCollection = collection(db, "blogs");

  const handleBlogNameChange = async (e) => {
    const name = e.target.value;
    setBlogName(name);

    try {
      const querySnapshot = await getDocs(blogPostsCollection);
      const existingBlogNames = querySnapshot.docs.map((doc) => doc.data().name);

      if (existingBlogNames.includes(name)) {
        setBlogNameError("A blog with this name already exists.");
      } else {
        setBlogNameError("");
      }
    } catch (error) {
      console.error("Error checking for duplicate blog names:", error);
    }
  };

  const BlogSubmit = async (isDraft = false) => {
    if (!BlogImageUpload || !BlogTitle || !BlogDescription || !BlogSubDescription || !BlogDate || !BlogName) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    if (blogNameError) {
      alert(blogNameError);
      return;
    }

    const imageRef = ref(storage, `blogs/${BlogImageUpload.name + uuidv4()}`);
    try {
      const snapshot = await uploadBytes(imageRef, BlogImageUpload);
      const url = await getDownloadURL(snapshot.ref);
      setImageURL(url);

      const blogPost = {
        name: BlogName,
        title: BlogTitle,
        description: BlogDescription,
        subDescription: BlogSubDescription,
        imageURL: url,
        date: BlogDate,
        published: !isDraft,
      };

      await addDoc(blogPostsCollection, blogPost);
      alert(`Blog has been ${isDraft ? "saved as draft" : "created and published"}`);
      console.log(blogPost);
      setBlogImageUpload(null);
      setImageURL('');
      setBlogTitle('');
      setBlogDescription('');
      setBlogSubDescription('');
      setBlogDate(new Date().toISOString().split('T')[0]);
      setBlogName('');

      fetchBlogPosts();
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating blog post, please try again");
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const querySnapshot = await getDocs(blogPostsCollection);
      const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const deleteBlogPost = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      fetchBlogPosts();
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const publishBlogPost = async (id) => {
    try {
      const blogDoc = doc(db, "blogs", id);
      await updateDoc(blogDoc, { published: true });
      fetchBlogPosts();
    } catch (error) {
      console.error("Error publishing blog post:", error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    let timeDifference ;
    // Convert the selected filter to milliseconds
    if(selectedFilter === 'All')
       timeDifference = 'All'
    if(selectedFilter === 'Today')
       timeDifference = 1 * 24 * 60 * 60 * 1000   
    if(selectedFilter === 'last2Days')
       timeDifference = 2 * 24 * 60 * 60 * 1000   
    if(selectedFilter === 'last7Days')
       timeDifference = 7 * 24 * 60 * 60 * 1000 
    if(selectedFilter === 'last30Days')
       timeDifference = 30 * 24 * 60 * 60 * 1000 
    if(selectedFilter === 'last60Days')
       timeDifference = 60 * 24 * 60 * 60 * 1000 
       console.log("filterby status");
      
    // Get the current date
    const currentDate = new Date();
 let filterstauts ;
 if(filterbystatus === "ALL")
      filterstauts = formData;
  else
      filterstauts = formData.filter((docu)=>{
            if(filterbystatus === docu.status){
              console.log("NEW");
              return true ;              
            }
            if(filterbystatus === docu.status){ 
              console.log("Closed");
              return true ;              
            }
     })
     let  filteredDocs ;
     if(timeDifference === "All") 
     filteredDocs = filterstauts ;    
     else
     filteredDocs = filterstauts.filter(({ timestamp }) => {
      const timestampMilliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
      return currentDate - timestampMilliseconds <= timeDifference;
    });
     
    // Update the state with the filtered documents
    setFilteredDocuments(filteredDocs);
  }, [formData, selectedFilter , filterbystatus]);

  useEffect(() => {    
    const fetchData = async () => {
      const formDataCollection = collection(db, 'formData');
      const unsubscribe = onSnapshot(formDataCollection, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFormData(data);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  // console.log("form data",filterbystatus)

  
 
  const handleBeforeImageChange = (e) => {
    if (e.target.files[0]) {
      setBeforeImage(e.target.files[0]);
    }
  };
  const handleAfterImageChange = (e) => {
    if (e.target.files[0]) {
      setAfterImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image to Firebase Storage
      const BeforeimageUrl = await uploadImage(beforeImage);
      const AfterimageUrl = await uploadImage(afterImage);
      // Add the document to Firestore
      await addDataToFirestore(BeforeimageUrl , AfterimageUrl);
      // Reset form fields
      setBeforeImage(null);
      setAfterImage(null);
      setTitle('');
    } catch (error) {
      console.error('Error adding item to Firestore: ', error);
    }
  };

  const uploadImage = async (Image) => {
    const imageRef = ref(storage, `images/${Image.name}`);
    await uploadBytes(imageRef, Image);

    // Get the download URL for the image
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  };

  const addDataToFirestore = async (beforeimageUrl,afterimageurl) => {
    // Add your Firestore document creation logic here
    // Use the db object from firebase.js
    // For example:
    const itemsRef = collection(db, 'items');
    await addDoc(itemsRef, { beforeimage: beforeimageUrl,afterimage:afterimageurl, title });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };
    fetchData();
  }, []); 

  useEffect(() => {
    offerFetchData()
  }, []); 

  const offerFetchData = ()=>{
    const fetchData = async () => {
      try {
        const itemsCollection = collection(db, 'Offers');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
         console.log("items data",itemsData);
        setOffers(itemsData);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };
    fetchData();
  }

  const handlerUpdateOfferStatus = async (itemId,status)=>{
    const itemDocRef = doc(db, 'Offers', itemId);
    await updateDoc(itemDocRef, {
      status: status
  });
  offerFetchData();
  // setFilteredDocuments((prevItems) => prevItems.filter((item) => item.id !== itemId));

  }
  const handleOfferDelete = async (itemId) => {
    try {
      const itemDocRef = doc(db, 'Offers', itemId);
      await deleteDoc(itemDocRef);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      offerFetchData();
      
    } catch (error) {
      console.error('Error deleting item from Firestore: ', error);
    }
  };

  const handlerUpdateStatus = async (itemId)=>{
    const itemDocRef = doc(db, 'formData', itemId);
    await updateDoc(itemDocRef, {
      status: "CLOSED"
  });
  setFilteredDocuments((prevItems) => prevItems.filter((item) => item.id !== itemId));

  }
  const handleDelete = async (itemId) => {
    try {
      const itemDocRef = doc(db, 'items', itemId);
      await deleteDoc(itemDocRef);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item from Firestore: ', error);
    }
  };

  const LogoutHandler = ()=>{
    // console.log("logout handler !!!!");
       localStorage.removeItem('token'); 
       window.location.reload(); 
  } 

  const statusfilterhandler = (value)=>{
    setFilterbyStatus(value)
    setSelectedFilter('All')
  }

    // console.log("filter by status ",filterbystatus);


  const ExtractyoutubevideoIDHandler = (value)=>{
    let youtubeUrl = value;
    const match = youtubeUrl.match(/[?&]v=([^&]+)/); 
    let videoID =  match && match[1];
    if(videoID){
      setOfferSource(videoID);
    }
  }

  const OfferCreateHandle = async ()=>{
    let data = {
         offerSource:offersource,
         contentType:contentType,
         Text:Text,
         status:"CLOSED"
    };
    // console.log("data",data);
    const itemsRef = collection(db, 'Offers');
    await addDoc(itemsRef, data);
    offerFetchData();

  }

  const handleimageoffer = async ()=>{
     let imageUrl = await uploadImage(image);
     setOfferSource(imageUrl);
  }
  
  useEffect( ()=>{
        if(contentType === "video"){
          ExtractyoutubevideoIDHandler(videoLink);
        }
        else{
          handleimageoffer()
         
        }
  },[videoLink , image])
  


  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
    <TabList>
        <Tab>Bookings</Tab>
        <Tab>Results</Tab>
        <Tab>Blogs</Tab>
        <Tab>Logout</Tab>
    </TabList>


    <TabPanel value={0}>
    <Tabs aria-label="Basic tabs" defaultValue={0}>
    <TabList >
       <div onClick={(e)=>{statusfilterhandler("NEW")}}><Tab>New</Tab></div> 
        <div onClick={(e)=>{statusfilterhandler("CLOSED")}}><Tab >Closed Appointment</Tab></div>
        <div onClick={(e)=>{statusfilterhandler("ALL")}} ><Tab >All</Tab></div>
    </TabList>
    <TabPanel value={0}>
    </TabPanel>
    <TabPanel value={1}>
    <label>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="All">All</option>          
          <option value="Today">Today</option>      
          <option value="last2Days">Last 2 days</option>          
          <option value="last7Days">Last 7 days</option>
          <option value="last30Days">Last 30 days</option>
          <option value="last60Days">Last 60 days</option>
        </select>
      </label>
    </TabPanel>
    <TabPanel value={2}>
    <label>
       
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="All">All</option>          
          <option value="Today">Today</option>      
          <option value="last2Days">Last 2 days</option>
          <option value="last7Days">Last 7 days</option>
          <option value="last30Days">Last 30 days</option>
          <option value="last60Days">Last 60 days</option>
        </select>
      </label>
    
    </TabPanel>
    </Tabs>
         
        <div className='bookcard-grid'>
        {filteredDocuments.length > 0 ? filteredDocuments.map((data) => (
          
                <div className="book-card" key={data.id}>
                    <div><strong>Name:</strong> {data.name}</div>
                    <div> <strong>Phone Number:</strong> {data.phoneNumber} </div>
                    <div><strong>Time Slot:</strong> {data.timeSlot}</div>
                    <div> <strong>Submission time:</strong> {data.timestamp && data.timestamp.toDate().toString()}</div>
                   {data.status === "NEW" && <div><button style={{backgroundColor:"orange",padding:"5px 5px 7px 5px ",color:"white",marginTop:"10px",borderRadius:"7px"}} onClick={()=>handlerUpdateStatus(data.id)}>Close Appointment</button></div> }
                </div>
          
            ))
            :
            <div className='text-center' style={{marginTop:"20px"}}>Data Not Available </div>
          }
            
        </div>

    </TabPanel>


    <TabPanel value={1}>

    <form onSubmit={handleSubmit}>
      <label>
        Before Image:
        <input type="file" onChange={handleBeforeImageChange} />
      </label>
      <br />
      <label>
        After Image:
        <input type="file" onChange={handleAfterImageChange} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <Button type="submit" color='success' style={{margin:"20px"}}>Add Item</Button>
    </form>
    <div className='bookcard-grid'>
        {items.map((item) => (
          <div className='book-card'  key={item.id}>
            <div>
            <img src={item.beforeimage}  alt={item.title}  />
            <img src={item.afterimage}  alt={item.title}  />
            </div>
            <p>{item.title}</p>
            <Button variant='contained' color='error' style={{margin: "20px"}} onClick={() => handleDelete(item.id)}>Delete</Button>
          </div>
        ))}
      </div>
       
    </TabPanel>
    
    <TabPanel value={2}>
      <Tabs aria-label="Blogs tabs" defaultValue={0}>
        <TabList>
          <Tab>Create Blog</Tab>
          <Tab>Blogs List</Tab>
        </TabList>
        <TabPanel value={0}>
          <div className='text-2xl p-5'>Create Blog</div>
          <div className='px-5'>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={BlogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                value={BlogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Content</label>
              <Tiptap setDescription={setBlogSubDescription} />
            </div>
            <div className="form-group">
              <label className="form-label">Preview</label>
              <div className="box">{parse(BlogSubDescription)}</div>
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                value={BlogDate}
                onChange={(e) => setBlogDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Blog Name</label>
              <input
                type="text"
                value={BlogName}
                onChange={handleBlogNameChange}
                className="form-input"
              />
              {blogNameError && <p className="error-message">{blogNameError}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="image" className="form-label">Upload Image</label>
              <input
                id="image"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setBlogImageUpload(e.target.files[0])}
              />
              <label htmlFor="image" className="form-upload">
                <FaCloudUploadAlt className="upload-icon" /> Upload file
              </label>
            </div>
            <div className="form-group">
              <button className="form-button" onClick={() => BlogSubmit(false)}>
                Create Blog
              </button>
              <button className="form-button1 ml-4" onClick={() => BlogSubmit(true)}>
                Save as Draft
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {blogPosts.map((post) => (
              <div key={post.id} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ width: '100%', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={post.imageURL} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '8px' }}>{post.title}</h3>
                <p style={{ marginTop: '8px', color: '#555' }}>{post.description}</p>
                <p style={{ marginTop: '4px', color: '#777', fontSize: '0.875rem' }}>{post.date}</p>
                {post.published ? (
                  <button
                    onClick={() => deleteBlogPost(post.id)}
                    style={{ backgroundColor: 'red', color: 'white', padding: '8px', borderRadius: '4px', marginTop: '8px', border: 'none', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => publishBlogPost(post.id)}
                    style={{ backgroundColor: 'green', color: 'white', padding: '8px', borderRadius: '4px', marginTop: '8px', border: 'none', cursor: 'pointer' }}
                  >
                    Publish
                  </button>
                )}
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>

    <TabPanel value={3}>
        <div>
          <div>Finish My Session Now </div>
          <div><Button variant='contained' color='error' onClick={LogoutHandler}>Logout</Button></div>
        </div>
    </TabPanel>
    </Tabs>
  )
}
