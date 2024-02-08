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
<<<<<<< HEAD
import logo from "../src/assets/banner/aimanlogo.png";
=======
import AboutUs from './pages/About Us';
import Footer from './components/Footer';
>>>>>>> df372287128c6ca978dc2ace28469ed6c815b809
import { useEffect, useState } from 'react';
import api from './constants/api';


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
                <div class="col-xl-2 col-lg-2 " style={{marginLeft:"-75px"}}>
                  <div class="logo">
                    <a href="/">
                    <img src={logo} alt="signature" width="800px" height="30px"/>
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
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/QuranPlayer" element={<QuranPlayer />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/NewsEdit/:id" element={<NewsEdit />} />
          <Route path="/EventsEdit/:id" element={<EventsEdit />} />
          <Route path="/Aiman Team" element={<AimaanTeam />} />
          <Route path="/services/:title" element={<Religious />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
    
       
   
      </HashRouter>
  );
}

export default App;

