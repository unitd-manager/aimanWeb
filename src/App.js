//import logo from './logo.svg';
import './App.css';
import { HashRouter, Route ,Routes} from 'react-router-dom';
import Home from './pages/home';
import Articles from './pages/Articles';
// import Home from "../src/screens/pages/home/Home";
import BlogDetails from './pages/BlogDetails';
import AimaanBaithulMal from './pages/AimaanBaithulMal';
import ArticlesPage from './pages/ArticlesPage';
import Gallery from './pages/Gallery';
import NavMenu from '../src/components/NavMenu'
import News from './pages/News';
import Events from './pages/Events';
import NewsEdit from './pages/NewsEdit';
import EventsEdit from './pages/EventsEdit';
import Religious from './pages/Religious';
import Membership from './pages/Membership';
import QuranPlayer from './pages/QuranPlayer';

function App() {
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
                        <span>youremailhere@gmail.com</span>
                      </li>
                      <li>
                        <i class="flaticon-phone-call"></i>
                        <span>+008 1234 56789</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-5">
                  <div class="top-right">
                    <div class="language">
                      <div class="select-lang">
                        <div
                          id="demo"
                          data-input-name="country"
                          data-selected-country="US"
                          data-scrollable-height="250px"
                        ></div>
                      </div>
                    </div>
                    <div class="try-btn">
                      <a href="/">FREE TRY</a>
                    </div>
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
                <div class="col-xl-1 col-lg-1 col-4">
                  <div class="logo">
                    <a href="/">
                      <img src="assets/images/United Logo.png" alt="LOGO" />
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
          <Route path="/AimaanBaithulMal" element={<AimaanBaithulMal />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/ArticlesPage" element={<ArticlesPage />} />
          <Route path="/Articles/:title" element={<ArticlesPage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/QuranPlayer" element={<QuranPlayer />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/NewsEdit/:id" element={<NewsEdit />} />
          <Route path="/EventsEdit/:id" element={<EventsEdit />} />
          <Route path="/services/:title" element={<Religious />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
    
      </HashRouter>
  );
}

export default App;

