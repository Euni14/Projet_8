import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const locationPath = "/location/";
  return (
    <Link to={locationPath + props.location.id}>
      <div className="cardBox">
        <img
          className="cardImage"
          src={props.location.cover}
          alt={props.location.title}
        />
        <h4 className="cardLink">{props.location.title} </h4>
      </div>
    </Link>
  );
}

export default Card;
