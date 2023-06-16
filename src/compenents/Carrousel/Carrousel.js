import { useState, useEffect } from "react";
import "./Carrousel.css";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Carrousel(props) {
  const [dataPictures, setdataPictures] = useState([props.photos]);

  const [current, setCurrent] = useState(0);  

  const nextSlide = () => {
    setCurrent(current === dataPictures?.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? dataPictures?.length - 1 : current - 1);
  };

  useEffect(() => {
    setdataPictures(props.photos);
  }, [props.photos]);

  return (
    <div className="banner">
      
        {dataPictures?.map((slide, index) => {          
            if(index === current){
            return <img className="banner-img" src={slide} alt="Banner Print-it" />;
             }          
        })}
      
      {dataPictures && (
        <div className="dots" id="dotscontainer">
          { current + 1} / {dataPictures?.length}
        </div>)}

      <a id="arrowleft" className="arrow arrow_left" onClick={prevSlide} >
        <img src={arrowLeft} alt="Previous" />
      </a>
      <a id="arrowright" className="arrow arrow_right" onClick={nextSlide} >
        <img src={arrowRight} alt="Next" />
      </a>
    </div>
  );
}

export default Carrousel;
