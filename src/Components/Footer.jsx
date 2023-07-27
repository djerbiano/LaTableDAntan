import "../Styles/Footer.css";

import { GiPositionMarker, GiPhone } from "react-icons/gi";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <div className="ContainerFooter">
      <div className="adresse">
        <p>La Table d'Antan</p>

        <p>
          <GiPositionMarker size={24} />1 rue Autrefois
        </p>
        <p>29200 Brest</p>
      </div>
      <div className="contact">
        <p>
          <a href="mailto:contact@LaTabledAntan.com">
            <GoMail /> contact@LaTabledAntan.com
          </a>
        </p>
        <p>
          <a href="tel:+33783508449">
            <GiPhone /> +33 7 83 50 84 49
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
