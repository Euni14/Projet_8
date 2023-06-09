import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../compenents/Carrousel/Carrousel";
import Collapse from "../../compenents/Collapse/Collapse";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import "./Location.css";

function Location() {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState({});
  const ratebase = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/location.json");
      const currLocation = await response.json();
      const concernedLocation = currLocation.filter((l) => l.id === id);
      setCurrentLocation(concernedLocation[0]);
    })().finally((e) => {
      if (currentLocation === undefined) {
        console.log(currentLocation);
        return navigate("/error");
      }
    });
  }, [id, currentLocation, navigate]);

  return (
    <div>
      {/* <h1>Location composant {currentLocation.title}</h1>
      {console.log(currentLocation)}*/}
      <Carrousel
        key={["picture-", id].join("-")}
        photos={currentLocation?.pictures}
        title={currentLocation?.title}
      />
      <div className="generalInformation">
        <div className="leftInformation">
          <h1 className="styleOne">{currentLocation?.title}</h1>
          <h4 className="styleFour">{currentLocation?.location}</h4>
          <div className="globalTag">
            {currentLocation?.tags?.map((tag) => (
              <span key={tag} className="tagLocation">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rightInformation">
          <div className="rating">
            {currentLocation &&
              ratebase.map((rate) => {
                if (rate <= currentLocation?.rating) {
                  return <img src={starActive} key={rate} />;
                } else {
                  return <img src={starInactive} key={rate} />;
                }
              })}
          </div>
          <div className="owner">
            <p className="managerName">{currentLocation?.host?.name}</p>
            <img
              className="managerImage"
              src={currentLocation?.host?.picture}
            ></img>
          </div>
        </div>
      </div>
      <div className="collapsedInformation">
        <Collapse
          key="123"
          title="Description"
          text={currentLocation?.description}
        />
        <Collapse
          key="1234"
          title="Equipement"
          text={currentLocation?.equipments}
        />
      </div>
    </div>
  );
}

export default Location;
