import LogoKasa from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <img src={LogoKasa} alt="Logo Kasa" />
      {/*https://blog.logrocket.com/how-to-use-svgs-react/*/}
      <nav className="navlink">
        <Link to="/" className="">
          Accueil
        </Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
