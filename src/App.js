//import logo from './logo.svg';
import './App.css';
import { HashRouter, Route ,Routes} from 'react-router-dom';
import Home from './pages/home';
import Articles from './pages/Articles';
// import Home from "../src/screens/pages/home/Home";
import BlogDetails from './pages/BlogDetails';
import AimaanBaithulMal from './pages/Aiman BaithulMal';
import AimaanTeam from './pages/Aiman Team';
import ArticlesPage from './pages/ArticlesPage';
import Gallery from './pages/Gallery';
import NavMenu from '../src/components/NavMenu'
import News from './pages/News';
import Events from './pages/Events';
import NewsEdit from './pages/NewsEdit';
import EventsEdit from './pages/EventsEdit';
import Religious from './pages/Religious';
import NewArticles from './pages/NewArticles';
import Membership from './pages/Membership';
import QuranPlayer from './pages/QuranPlayer';
import logo from "../src/assets/banner/aimanlogo.png";
import AboutUs from './pages/About Us';
import Footer from './components/Footer';
import PastOfficeBearers from './pages/PastOfficeBearers';
import { useEffect, useState } from 'react';
import api from './constants/api';
import ServiceSubCategory from './pages/ServiceSubCategory';
import ContactUs from './pages/ContactUs';


function App() {
  const stripHtmlTags = (htmlString) => {

    const doc = new DOMParser().parseFromString(htmlString,'text/html');
    return doc.body.textContent ||'';
    
    
    }
  const [email, setEmail] = useState([]);
  useEffect(() => {
    // Fetch sections
    api.get('/content/getEmail')
      .then((res) => {
        setEmail(res.data.data[0]);
      })
      .catch(() => {
        // Handle error
      });

  
  }, []); 
  return (
    <HashRouter>
    <div class="header-2">
        <div class="top-header">
          <div class="container">
            <div class="bg">
              <div class="row justify-content-between align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-7">
                  <div class="top-left">
                    <ul>
                      <li>
                        <i class="flaticon-message"></i>
                        <span>{stripHtmlTags(email.description)}</span>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-4 d-flex justify-content-sm-end justify-content-center">
    <div class="top-right">
        <a href="https://www.facebook.com/profile.php?id=100085667005902" class="fb" style={{ marginRight: '10px' }}><i class="flaticon-facebook"></i></a>
        <a href="https://twitter.com/PenaKural" class="tw" style={{ marginRight: '10px' }}><i class="flaticon-twitter"></i></a>
        <a href="#" class="ld" style={{ marginRight: '10px' }}><i class="flaticon-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCl-FlAugZVHLXwJLWZ4C0TA" class="yt" style={{ marginRight: '10px' }}><i class="flaticon-youtube"></i></a>
    </div>
</div>


              </div>
            </div>
          </div>
        </div>
        <div class="bottom-header">
          <div class="container">
            <div class="bg">
              <div class="row align-items-center">
                <div class="d-xl-none d-lg-none d-flex col-4">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="flaticon-menu-button-of-three-horizontal-lines"></i>
                  </button>
                </div>
                <div class="col-xl-12 col-lg-12 col-12 d-flex align-items-center">
                  <div class="logo">
                    <a href="/">
                    <img src={logo} alt="signature" width="750px" height="65px" style={{paddingLeft:"300px"}}/>
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
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/NewsEdit/:id" element={<NewsEdit />} />
          <Route path="/EventsEdit/:id" element={<EventsEdit />} />
          <Route path="/Aiman-Team" element={<AimaanTeam />} />
          <Route path="/services/:title" element={<Religious />} />
          <Route path="/services/:title/:subCategoryId" element={<ServiceSubCategory />} />
          <Route path="/Aiman-Past-Office-Bearers" element={<PastOfficeBearers />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        
    
        {/* <div class="footer">
        <div class="container">
            <div class="main-footer">
                <div class="row justify-content-between">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="about-txt">
                            <h3>About Us Company</h3>
                            <p>There are many variations of passage of Lorem Ipsum available, but the maj ority have suffered alteration</p>
                            <ul>
                                <li><span><i class="flaticon-pin"></i></span>Demo Address #8901 Marmora Road Chi Minh City, Vietnam</li>
                                <li><span><i class="flaticon-phone-call"></i></span>0800-123456 (24/7 Support Line)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-6">
                        <div class="link">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="service-details.html">Business</a></li>
                                <li><a href="service-details.html">Marketing</a></li>
                                <li><a href="service-details.html">Management</a></li>
                                <li><a href="service-details.html">Accounting</a></li>
                                <li><a href="service-details.html">Training</a></li>
                                <li><a href="service-details.html">Consultation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-6">
                        <div class="link">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="blog-l-bar.html">Blog</a></li>
                                <li><a href="/">Client Area</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="/">Newsletter</a></li>
                                <li><a href="/">Events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="newsletter">
                            <h3>Newsletter</h3>
                            <p>Subscribe our newsletter to get our latest update all blog & news</p>
                            <form>
                                <input type="email" placeholder="Your Email Address" required />
                                <button><i class="flaticon-send"></i></button>
                            </form>
                            <div class="social">
                                <a href="/" class="fb"><i class="flaticon-facebook"></i></a>
                                <a href="/" class="tw"><i class="flaticon-twitter"></i></a>
                                <a href="/" class="ggl"><i class="flaticon-google-plus-logo"></i></a>
                                <a href="/" class="ld"><i class="flaticon-linkedin"></i></a>
                                <a href="/" class="yt"><i class="flaticon-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <p>Copyright &copy; 2021 Theme All Rights Reserved</p>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="link">
                            <a href="about.html">About</a>
                            <a href="/">Privacy Policy</a>
                            <a href="faq.html">FAQs</a>
                            <a href="/">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    {/* </div> */}
        <Footer />
    
       
   
      </HashRouter>
  );
}

export default App;

