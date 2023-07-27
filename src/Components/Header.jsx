import "../Styles/Header.css";
import { Link } from "react-router-dom";

import logo from "../Assets/logoHome.png";

function Header() {
  return (
    <div className="ContainerHeader">
      <div className="logo">
        <img src={logo} alt="logoHome" />
      </div>
      <div className="list">
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/Commander">
            <li>Commander</li>
          </Link>
          <Link to="/Réservation">
            <li>Réservation</li>
          </Link>
          <Link to="/Quisommesnous">
            <li>Qui sommes-nous !</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
