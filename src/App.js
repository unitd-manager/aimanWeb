//import logo from './logo.svg';
import './App.css';
import {  Route, BrowserRouter as Router ,Routes} from 'react-router-dom';

import Home from './pages/home';
import Article from './pages/Article';
// import Home from "../src/screens/pages/home/Home";
import BlogDetails from './pages/BlogDetails';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Gallery" element={<Gallery />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
