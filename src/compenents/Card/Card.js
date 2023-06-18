import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const locationPath = "/location/";
  return (
    <div className="cardBox">
      <Link to={locationPath + props.location.id}>
        <img
          className="cardImage"
          src={props.location.cover}
          alt={props.location.title}
        />
        <h4 className="cardLink">{props.location.title} </h4>
      </Link>
    </div>
  );
}

export default Card;
