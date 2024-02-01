//import logo from './logo.svg';
import './App.css';
import {  Route, BrowserRouter as Router ,Routes} from 'react-router-dom';

import Home from './pages/home';
import Articles from './pages/Articles';
// import Home from "../src/screens/pages/home/Home";
import BlogDetails from './pages/BlogDetails';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Events from './pages/Events';
import NewsEdit from './pages/NewsEdit';
import EventsEdit from './pages/EventsEdit';
import Religious from './pages/Religious';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/NewsEdit/:id" element={<NewsEdit />} />
          <Route path="/EventsEdit/:id" element={<EventsEdit />} />
          <Route path="/services/:title" element={<Religious />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
