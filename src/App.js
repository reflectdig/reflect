import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from 'react';
import { GlobalStateProvider } from "./Components/State/GlobalState";
import Loading from "./Components/Loading";

const HomeOne = lazy(() => import("./Components/Home/HomeOne"));
const ErrorPage = lazy(() => import("./Components/Pages/404Page"));
const AboutTwo = lazy(() => import("./Components/Pages/AboutTwo"));
const ContactUs = lazy(() => import("./Components/Pages/ContactUs"));
const EventSingle = lazy(() => import("./Components/Pages/EventSingle"));
const Blogs = lazy(() => import("./Components/Pages/SingleBlog"));
const BlogsList = lazy(() => import("./Components/Pages/Blog-Standard"));
const Skin = lazy(() => import("./Components/Pages/Skin"));
const Hair = lazy(() => import("./Components/Pages/Hair"));
const Body = lazy(() => import("./Components/Pages/Body"));
const Nail = lazy(() => import("./Components/Pages/Nail"));
const Aest = lazy(() => import("./Components/Pages/Aest"));
const Medi = lazy(() => import("./Components/Pages/Medi"));
const Mer = lazy(() => import("./Components/Pages/Mer"));
const Div = lazy(() => import("./Components/Pages/Div"));
const Admin = lazy(() => import("./Admin/Admin"));
const AdminLogin = lazy(() => import("./Admin/Login"));

function App() {
  // Retrieve the JSON string from localStorage
  const storedTokenString = localStorage.getItem('token');
  
  const parseStoredToken = (tokenString) => {
    try {
      const parsedToken = JSON.parse(tokenString);
      if (parsedToken && typeof parsedToken === 'object') {
        return parsedToken;
      } else {
        console.error("Parsed token is not an object:", parsedToken);
        return false;
      }
    } catch (error) {
      console.error("Error parsing stored token:", error);
      return false;
    }
  };

  const [isloggedon, setIsloggedon] = useState(() => parseStoredToken(storedTokenString));

  return (
    <GlobalStateProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
            <Routes>
              <Route path="/" element={<HomeOne />} />
              <Route path="/skin" element={<Skin />} />
              <Route path="/hair" element={<Hair />} />
              <Route path="/body" element={<Body />} />
              <Route path="/nail" element={<Nail />} />
              <Route path="/blogs" element={<BlogsList />} />
              <Route path="/blog/:name1" element={<Blogs />} />
              <Route path="/medicalprocedure" element={<Medi />} />
              <Route path="/aestheticprocedure" element={<Aest />} />
              <Route path="/:cardId" element={<EventSingle />} />
              <Route path="/krishnameera" element={<Mer />} />
              <Route path="/divya" element={<Div />} />
              <Route path="*" element={<ErrorPage />} />

              {isloggedon.Login ? (
                <>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/login" element={<Navigate to="/admin" />} />
                </>
              ) : (
                <>
                  <Route path="/admin" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<AdminLogin />} />
                </>
              )}

              <Route path="/about" element={<AboutTwo />} />
              <Route path="/contact" element={<ContactUs />} />
              
              <Route
                path="/:category"
                element={<EventSingle />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </GlobalStateProvider>
  );
}

export default App;
