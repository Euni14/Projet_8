import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const locationPath = "/location/";
  return (
    <div>
      <img className="" src={props.location.cover} alt={props.location.title} />
      <Link to={locationPath + props.location.id} className="">
        <h4>{props.location.title}</h4>
      </Link>
    </div>
  );
}

export default Card;
