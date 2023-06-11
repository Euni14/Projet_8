import Banner from "../../compenents/Banner/Banner";
import Collapse from "../../compenents/Collapse/Collapse";
import Gallery from "../../compenents/Gallery/Gallery";

function Home() {
  return (
    <div>
      <h1>Home composant</h1>
      <Collapse title="1text" text="2text" />
      <Banner />
      <Gallery />
    </div>
  );
}

export default Home;
