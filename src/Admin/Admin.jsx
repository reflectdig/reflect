import React, {useState, useEffect} from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { storage, db, storageRef } from '../config/Firebase'
import { collection, addDoc, getDocs, deleteDoc, updateDoc , doc, onSnapshot  } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import YoutubePlayer from 'react-youtube-player';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { upload } from '@testing-library/user-event/dist/upload';
import { v4 as uuidv4 } from 'uuid';
import './styleadmin.css'

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
    const [Subtitle1, setSubtitle1] = useState('');
    const [SubtitleDescription1, setSubtitleDescription1] = useState('');
    const [Subtitle2, setSubtitle2] = useState('');
    const [SubtitleDescription2, setSubtitleDescription2] = useState('');
    const [blogPosts, setBlogPosts] = useState([]);
  
    const blogPostsCollection = collection(db, "blogs");
  
    const BlogSubmit = async () => {
      if (!BlogImageUpload || !BlogTitle || !BlogDescription || !Subtitle1 || !SubtitleDescription1 || !Subtitle2 || !SubtitleDescription2) {
        alert("Please fill in all fields and select an image.");
        return;
      }
  
      const imageRef = ref(storage, `blogs/${BlogImageUpload.name + uuidv4()}`);
      
      try {
        const snapshot = await uploadBytes(imageRef, BlogImageUpload);
        const url = await getDownloadURL(snapshot.ref);
        setImageURL(url);
  
        const blogPost = {
          title: BlogTitle,
          description: BlogDescription,
          imageURL: url,
          subtitles: [
            { title: Subtitle1, description: SubtitleDescription1 },
            { title: Subtitle2, description: SubtitleDescription2 }
          ]
        };
  
        await addDoc(blogPostsCollection, blogPost);
        alert("Blog has been created and image uploaded");
  
        // Reset form fields
        setBlogImageUpload(null);
        setImageURL('');
        setBlogTitle('');
        setBlogDescription('');
        setSubtitle1('');
        setSubtitleDescription1('');
        setSubtitle2('');
        setSubtitleDescription2('');
  
        // Update the blog posts list after submission
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
        console.log('Fetched Blog Posts:', posts); // Console log the fetched data
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
                <label className="form-label">Enter Title</label>
                <input
                  type="text"
                  value={BlogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Enter Description</label>
                <textarea
                  value={BlogDescription}
                  onChange={(e) => setBlogDescription(e.target.value)}
                  className="form-textarea"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Enter Subtitle 1</label>
                <input
                  type="text"
                  value={Subtitle1}
                  onChange={(e) => setSubtitle1(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Enter Subtitle 1 Description</label>
                <textarea
                  value={SubtitleDescription1}
                  onChange={(e) => setSubtitleDescription1(e.target.value)}
                  className="form-textarea"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Enter Subtitle 2</label>
                <input
                  type="text"
                  value={Subtitle2}
                  onChange={(e) => setSubtitle2(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Enter Subtitle 2 Description</label>
                <textarea
                  value={SubtitleDescription2}
                  onChange={(e) => setSubtitleDescription2(e.target.value)}
                  className="form-textarea"
                />
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
                <button
                  className="form-button"
                  onClick={BlogSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {blogPosts.map((post) => (
                <div key={post.id} className='p-4 border rounded-lg shadow-md'>
                  <div style={{ width: '100%', height: '10rem', backgroundColor: '#E5E7EB', borderRadius: '0.375rem', overflow: 'hidden' }}>
                    <img src={post.imageURL} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 className='text-xl font-semibold mt-2'>{post.title}</h3>
                  <button
                    onClick={() => deleteBlogPost(post.id)}
                    className='delete-button' // Apply the CSS class here
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </TabPanel>

    {/* <TabPanel value={2}>
    <Tabs aria-label="Basic tabs" defaultValue={0}>
    <TabList>
        <Tab>Create Offers</Tab>
        <Tab>Offers List</Tab>
       
    </TabList>
    <TabPanel value={0}>
    <div className='text-2xl p-5'>Create Offers</div>

<div className='px-5'>
  <div>
    Enter Text
  </div>
  <div className='mb-5'>
    <input type="text" onChange={(e)=>setText(e.target.value)} />
  </div>
  <div>
    Select Content Type is Video Or image
  </div>
  <div>
     <div><input type="radio" name="content" onChange={()=>{setContentType("image")}} /> Image</div>
     <div><input type="radio" name="content" onChange={()=>{setContentType("video")}} /> Video</div>
  </div>
  
  {
    contentType === "video" || contentType === "image" ?
  <div>
  {
    contentType === "image"  ?        
  <div style={{padding:"10px 0px 10px 0px"}}>
     Uplaod Image<br/><br/>
      <label htmlFor="image" >
       <span className='flex items-center justify-center' style={{ border:"2px solid gray ",width:"200px",borderRadius:"20px"}}><FaCloudUploadAlt /> Upload file</span>
      </label>
      <input id="image" type="file" style={{display:"none"}} onChange={(e)=>setImage(e.target.files[0])} />
  </div>
  :
  <div style={{padding:"10px 0px 10px 0px"}}>           
      <label htmlFor="video" style={{margin:"10px 0px 10px 0px"}} >
      Enter Video Link
      </label>
      <input id="video" type="text" onChange={(e)=>setVideoLink(e.target.value)} />
      {
    videoLink ?        
       <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='m-auto' sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 240 }}
                  // image={img}
                  title="green iguana"
              >
                <YoutubePlayer
              videoId={offersource}
              playbackState='unstarted'
              height='100%'
              width='100%'
              configuration={
                  {
                      showinfo: 1,
                      controls: 1
                  }
              }
          />
              </CardMedia>
             
              
          </Card>
          :
          null
  }
  </div>
  }
  </div>
  :
  null
}
  
 
 {offersource && Text && contentType ?
   <div style={{margin:"10px 0px 10px 0px"}}>
   <button style={{backgroundColor:"green",color:'white',fontWeight:"bold",padding:"5px",borderRadius:'10px'}}
    onClick={()=>OfferCreateHandle()}>Confirm</button>
 </div>
 :
 null
 } 
</div>
    </TabPanel>
    <TabPanel value={1}>
    <div className='bookcard-grid'>
        {Offers.map((item) => (
         <div className="book-card" key={item.id}>
            <div>
            {
              item.contentType === "image" ?
            
             <img src={item.offerSource}  alt={item.title}  />            
            :
             <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='m-auto' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 240 }}
                        // image={img}
                        title="green iguana"
                    >
                      <YoutubePlayer
                    videoId={item.offerSource}
                    playbackState='unstarted'
                    height='100%'
                    width='100%'
                    configuration={
                        {
                            showinfo: 1,
                            controls: 1
                        }
                    }
                />
                    </CardMedia>
                   
                    
                </Card>
            }
            </div>
            <p>{item.Text}</p>
            <div className='flex '>
            <Button variant='contained' color='error' style={{margin: "20px"}} onClick={() => handleOfferDelete(item.id)}>Delete</Button>
            {item.status === "OPEN" ?<Button variant='contained' style={{margin: "20px",backgroundColor:'green'}} onClick={() => handlerUpdateOfferStatus(item.id ,"CLOSED")}>Able</Button> : <Button variant='contained' color='error' style={{margin: "20px",backgroundColor:'orange'}} onClick={() => handlerUpdateOfferStatus(item.id,"OPEN")}>Disable</Button>}
            </div>
          </div>
        ))}
      </div>
    </TabPanel>
    </Tabs>
      
    
           bk
    </TabPanel > */}

    <TabPanel value={3}>
        <div>
          <div>Finish My Session Now </div>
          <div><Button variant='contained' color='error' onClick={LogoutHandler}>Logout</Button></div>
        </div>
    </TabPanel>


    
    </Tabs>
  )
}
