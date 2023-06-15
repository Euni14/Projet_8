import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Gallery.css";

function Gallery() {
  const [dataLocation, setdataLocation] = useState([]);
  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:3000/location.json");
      setdataLocation(await response.json());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  return (
    <div className="galleryList">
      {dataLocation.map((location) => (
        <Card key={location.id} location={location}></Card>
      ))}
    </div>
  );
}

export default Gallery;
