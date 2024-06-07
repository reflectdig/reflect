import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState ,lazy ,Suspense } from 'react';
import { GlobalStateProvider } from "./Components/State/GlobalState";
import Loading from "./Components/Loading";
const HomeOne = lazy(() => import("./Components/Home/HomeOne"));
const ErrorPage = lazy(() => import("./Components/Pages/404Page"));
const AboutTwo = lazy(() => import("./Components/Pages/AboutTwo"));
const ContactUs = lazy(() => import("./Components/Pages/ContactUs"));
const EventSingle = lazy(() => import("./Components/Pages/EventSingle"));
const { data } = lazy(() => import("./constant/dummyData"));
const Skin = lazy(() => import("./Components/Pages/Skin"));
const Hair = lazy(() => import("./Components/Pages/Hair"));
const Body = lazy(() => import("./Components/Pages/Body"));
const Nail = lazy(() => import("./Components/Pages/Nail"));
const Aest = lazy(() => import("./Components/Pages/Aest"));
const Medi = lazy(() => import("./Components/Pages/Medi"));
const Mer = lazy(() => import("./Components/Pages/Mer"));
const Div = lazy(() => import("./Components/Pages/Div"));
const OurCentre = lazy(() => import("./Components/Pages/OurCentre"));
const Admin = lazy(() => import("./Admin/Admin"));
const AdminLogin = lazy(() => import("./Admin/Login"));

function App() {
 // Retrieve the JSON string from localStorage
const storedTokenString = localStorage.getItem('token');
  
// Parse the JSON string to get the original token object
const storedToken = JSON.parse(storedTokenString);
  
const [isloggedon,setIsloggedon] = useState(storedToken || false)
  

  

  return (
    <GlobalStateProvider>
    <Suspense fallback={<Loading/>}>
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
          <Route path="*" element={<ErrorPage />} />

          
          { isloggedon.Login ? <Route path="/admin" element={<Admin/>} /> : <Route path="/login" element={<AdminLogin />} /> }
          
          {isloggedon.Login ? <Route path="/login" element={<Navigate to="/admin"/>} /> : <Route path="/admin" element={<Navigate to="/login"/>} /> }
           
         
          <Route
            path="/about"
            element={<AboutTwo />}
          />
          <Route
            path="/contact"
            element={<ContactUs />}
          />
          
          <Route
            path="/:category"
            render={({ match }) => (
              <EventSingle category={match.params.category} data={data} />
            )}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
    </GlobalStateProvider>
    

  );
}

export default App;
