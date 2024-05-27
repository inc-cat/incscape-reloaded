import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            <a href="/">Home</a>
            <div className="dropdown">
              <a href="/">Music</a>
              <div className="dropdown-content">
                <a href="https://anwarlouis.bandcamp.com/">Bandcamp</a>
                <a href="https://www.last.fm/user/championanwar">Last FM</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="/">Code</a>
              <div className="dropdown-content">
                <a href="https://github.com/inc-cat">GitHub</a>
              </div>
            </div>
            <a href="/">Art</a>
            <Link to="/blog">Blog</Link>
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
