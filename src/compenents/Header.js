import LogoKasa from "../assets/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <img src={LogoKasa} alt="Logo Kasa" />
      {/*https://blog.logrocket.com/how-to-use-svgs-react/*/}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
