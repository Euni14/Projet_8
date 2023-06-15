import errorPage from "../../assets/errorPage.svg";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1> Error composant</h1>
      <img className="errorPage" src={errorPage} alt="page erreur" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
