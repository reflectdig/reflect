import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState , useEffect } from 'react';
import Cookies from 'js-cookie';
import { GlobalStateProvider } from "./Components/State/GlobalState";
import HomeOne from "./Components/Home/HomeOne";
import HomeThree from "./Components/Home/HomeThree";
import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";
import {data} from "./constant/dummyData"
import Skin from "./Components/Pages/Skin";
import Hair from "./Components/Pages/Hair";
import Body from "./Components/Pages/Body";
import Nail from "./Components/Pages/Nail";
import Aest from "./Components/Pages/Aest";
import Medi from "./Components/Pages/Medi";
import Mer from "./Components/Pages/Mer";
import Div from "./Components/Pages/Div";
import OurCentre from "./Components/Pages/OurCentre";
import Login from "./Components/Pages/Login";
import Admin from "./Admin/Admin";
import AdminLogin from "./Admin/Login";


function App() {
 // Retrieve the JSON string from localStorage
const storedTokenString = localStorage.getItem('token');
  
// Parse the JSON string to get the original token object
const storedToken = JSON.parse(storedTokenString);
  
const [isloggedon,setIsloggedon] = useState(storedToken || false)
  
//  console.log(isloggedon.Login)

  

  return (
    <GlobalStateProvider>

    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={"/reflect"} />}
          />
          <Route path="/reflect" element={<HomeOne />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/body" element={<Body />} />
          <Route path="/nail" element={<Nail />} />
          <Route path="/medicalprocedure" element={<Medi />} />
          <Route path="/aestheticprocedure" element={<Aest />} />
          <Route path="/:cardId" element={<EventSingle />} />
          <Route path="/krishnameera" element={<Mer />} />
          <Route path="/divya" element={<Div />} />
          <Route path="/ourcentre" element={<OurCentre />} />
          {/* <Route path="/login" element={<Login />} /> */}
          
          { isloggedon.Login ? <Route path="/admin" element={<Admin/>} /> : <Route path="/login" element={<AdminLogin />} /> }
          
          {isloggedon.Login ? <Route path="/login" element={<Navigate to="/admin"/>} /> : <Route path="/admin" element={<Navigate to="/login"/>} /> }
           
          <Route
            path="/react-templates/edumim/home-two"
            element={<HomeTwo />}
          />
          <Route
            path="/react-templates/edumim/home-three"
            element={<HomeThree />}
          />
          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/about"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />
          <Route
            path="/react-templates/edumim/courses-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/react-templates/edumim/single-course"
            element={<SingleCourse />}
          />
          <Route
            path="/results"
            element={<BLogStandard />}
          />
          <Route
            path="/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/contact"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/:category"
            render={({ match }) => (
              <EventSingle category={match.params.category} data={data} />
            )}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </GlobalStateProvider>

  );
}

export default App;
