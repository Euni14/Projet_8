import "./Footer.css";
import logoFooter from "../../assets/logofooter.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="imageFooter" src={logoFooter} alt="Logo footer" />
      <p className="footerText">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
