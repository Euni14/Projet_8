import { useState, useEffect } from "react";

function Carrousel(props) {
  const [dataPictures, setdataPictures] = useState([props.photos]);
  useEffect(() => {
    setdataPictures(props.photos);
  }, [props.photos]);
  return (
    <div>
      Composant Carrousel
      {/*  {dataPictures?.map((dt) => (
        // <img src={dataPictures[0]} alt="" />
      ))}{" "} */}
    </div>
  );
}

export default Carrousel;
