import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../compenents/Carrousel/Carrousel";

function Location() {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/location.json");
        const currLocation = await response.json();
        const concernedLocation = currLocation.filter((l) => l.id === id);
        setCurrentLocation(concernedLocation[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Location composant {currentLocation.title}</h1>
      {console.log(currentLocation)}
      <Carrousel
        key={["picture-", id].join("-")}
        photos={currentLocation.pictures}
        title={currentLocation.title}
      />
    </div>
  );
}

export default Location;
