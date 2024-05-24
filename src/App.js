import './App.css';
import SlideShow from './components/slideshow';

function App() {
  return (
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
        </div>
      </header>
      <SlideShow />
      incspace reloaded, coming soon!
    </div>
  );
}

export default App;
