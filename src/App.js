//import logo from './logo.svg';
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Articles from "./pages/Articles";
// import Home from "../src/screens/pages/home/Home";
import BlogDetails from "./pages/BlogDetails";
import AimaanBaithulMal from "./pages/Aiman BaithulMal";
import AimaanTeam from "./pages/Aiman Team";
import ArticlesPage from "./pages/ArticlesPage";
import Gallery from "./pages/Gallery";
import NavMenu from "../src/components/NavMenu";
import News from "./pages/News";
import Events from "./pages/Events";
import NewsEdit from "./pages/NewsEdit";
import EventsEdit from "./pages/EventsEdit";
import Religious from "./pages/Religious";
import NewArticles from "./pages/NewArticles";
import Membership from "./pages/Membership";
import QuranPlayer from "./pages/QuranPlayer";
import logo from "../src/assets/banner/aimanlogo.png";
import AboutUs from "./pages/About Us";
import Footer from "./components/Footer";
import PastOfficeBearers from "./pages/PastOfficeBearers";
import { useEffect, useState } from "react";
import api from "./constants/api";
import ServiceSubCategory from "./pages/ServiceSubCategory";
import ContactUs from "./pages/ContactUs";
import React from "react";

function App() {
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };
  const [email, setEmail] = useState([]);

  useEffect(() => {
    // Fetch sections
    api
      .get("/content/getEmail")
      .then((res) => {
        setEmail(res.data.data[0]);
      })
      .catch(() => {
        // Handle error
      });
  }, []);
  return (
    <HashRouter>
      <div className="header-2">
        <div className="top-header">
          <div className="container">
            <div className="bg">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="top-left">
                    <ul>
                      <li>
                        <i className="flaticon-message"></i>
                        <span>{stripHtmlTags(email.description)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-4 d-flex justify-content-sm-end justify-content-center">
                  <div className="top-right">
                    <a
                      href="https://www.facebook.com/profile.php?id=100085667005902"
                      className="fb"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="flaticon-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/PenaKural"
                      className="tw"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="flaticon-twitter"></i>
                    </a>
                    <a href="#" className="ld" style={{ marginRight: "10px" }}>
                      <i className="flaticon-linkedin"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCl-FlAugZVHLXwJLWZ4C0TA"
                      className="yt"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="flaticon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="bg">
              <div className="row align-items-center">
                <div className="d-xl-none d-lg-none d-flex col-4">
                  {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="flaticon-menu-button-of-three-horizontal-lines"></i>
                  </button> */}
                </div>
                <div className="col-xl-12 col-lg-12 col-12 d-flex align-items-center">
                  <div className="logo">
                    <a href="/">
                      <img
                        src={logo}
                        alt="signature"
                        width="750px"
                        height="65px"
                        style={{ paddingLeft: "300px" }}
                      />
                    </a>
                  </div>
                </div>

                <NavMenu></NavMenu>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aiman BaithulMal" element={<AimaanBaithulMal />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/Articles/:title" element={<ArticlesPage />} />
        <Route path="/NewArticles/:title" element={<NewArticles />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/QuranPlayer" element={<QuranPlayer />} />
        <Route path="/News" element={<News />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/NewsEdit/:id" element={<NewsEdit />} />
        <Route path="/EventsEdit/:id" element={<EventsEdit />} />
        <Route path="/Aiman-Team" element={<AimaanTeam />} />
        <Route path="/services/:title" element={<Religious />} />
        <Route
          path="/services/:title/:subCategoryId"
          element={<ServiceSubCategory />}
        />
        <Route
          path="/Aiman-Past-Office-Bearers"
          element={<PastOfficeBearers />}
        />
        {/* Add other routes as needed */}
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>

      <Footer />
      {/* <Footer />

      <Footer /> */}
    </HashRouter>
  );
}

export default App;
