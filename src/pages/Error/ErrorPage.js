import errorPage from "../../assets/errorPage.svg";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorContainer">
      <img className="errorPage" src={errorPage} alt="page erreur" />
      <div className="errorColor">
        <p>Oups! La page que&nbsp;</p> <p>vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="errorColor backToHome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
