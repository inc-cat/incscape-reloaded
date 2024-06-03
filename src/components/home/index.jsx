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
        <div className="logo">{logo}</div>
        <div className="label">{label}</div>
      </div>
    );
  };

  return (
    <>
      <SlideShow />
      incspace reloaded, coming soon!
      <KnowledgeGrid>
        <Knowledge logo="FL Studio Logo" label="FL Studio" />
        <Knowledge logo="Pro Tools Logo" label="Pro Tools" />
        <Knowledge logo="Reason Logo" label="Reason" />
        <Knowledge logo="Cubase Logo" label="Cubase" />
      </KnowledgeGrid>
    </>
  );
}

export default Home;
