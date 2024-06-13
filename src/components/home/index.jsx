import './home.css';
import SlideShow from '../slideshow';
import ManageBio from './manageBio';

function Home() {
  const KnowledgeGrid = function (props) {
    return <div class="grid-container">{props.children}</div>;
  };

  const Knowledge = function (props) {
    let { logo, label, url } = props;

    return (
      <div class="grid-item flex-thing">
        <div className="logo">
          <a href={url}>
            {' '}
            <img src={logo} />{' '}
          </a>
        </div>
        <div className="label">{label}</div>
      </div>
    );
  };

  return (
    <>
      <SlideShow />
      <ManageBio />

      <h1 className="headings">Music</h1>
      <KnowledgeGrid>
        <Knowledge
          logo="icons/fl.png"
          label="FL Studio"
          url="https://www.image-line.com/"
        />
        <Knowledge
          logo="icons/protools.png"
          label="Pro Tools"
          url="https://www.avid.com/pro-tools"
        />
      </KnowledgeGrid>
      <h1 className="headings">Programming</h1>
      <KnowledgeGrid>
        <Knowledge
          logo="icons/js.png"
          label="JavaScript"
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Knowledge
          logo="icons/python.png"
          label="Python"
          url="https://www.python.org/"
        />
        <Knowledge
          logo="icons/html5.png"
          label="HTML5"
          url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <Knowledge
          logo="icons/react.png"
          label="React"
          url="https://react.dev/"
        />
      </KnowledgeGrid>
    </>
  );
}

export default Home;
