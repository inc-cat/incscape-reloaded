import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar">
          <a href="/">Home</a>
          <div class="dropdown">
            <a href="/">Music</a>
            <div class="dropdown-content">
              <a href="https://anwarlouis.bandcamp.com/">Bandcamp</a>
              <a href="https://www.last.fm/user/championanwar">Last FM</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="/">Code</a>
            <div class="dropdown-content">
              <a href="https://github.com/inc-cat">GitHub</a>
            </div>
          </div>
          <a href="/">Art</a>
        </div>
      </header>
      incspace reloaded, coming soon!
    </div>
  );
}

export default App;
