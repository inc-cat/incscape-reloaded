import './home.css';
import SlideShow from '../slideshow';

function Home() {
  const KnowledgeGrid = function (props) {
    return <div class="grid-container">{props.children}</div>;
  };

  const Knowledge = function (props) {
    let { logo, label } = props;

    return (
      <div class="grid-item flex-thing">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="label">{label}</div>
      </div>
    );
  };

  return (
    <>
      <SlideShow />
      incspace reloaded, coming soon!
      <KnowledgeGrid>
        <Knowledge logo="icons/fl.png" label="FL Studio" />
        <Knowledge logo="icons/protools.png" label="Pro Tools" />
      </KnowledgeGrid>
    </>
  );
}

export default Home;
