//import logo from './logo.svg';
import './App.css';
import {  Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import Home from './pages/home';
import BlogDetails from './pages/BlogDetails';
import AimaanBaithulMal from './pages/AimaanBaithulMal';
import Article from './pages/Article';
import ArticlesPage from './pages/ArticlesPage';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/AimaanBaithulMal" element={<AimaanBaithulMal />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/ArticlesPage" element={<ArticlesPage />} />
          <Route path="/Article/:title" element={<ArticlesPage />} />
          {/* Add other routes as needed */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

