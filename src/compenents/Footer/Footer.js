import "./Footer.css";
import logoFooter from "../../assets/logofooter.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Footer composant</h1>
      <img src={logoFooter} alt="Logo footer" />
      <p className="footerText">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
