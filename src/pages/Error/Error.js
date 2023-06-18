import errorPage from "../../assets/errorPage.svg";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorContainer">
      <img className="errorPage" src={errorPage} alt="page erreur" />
      <p className="errorColor">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorColor backToHome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
