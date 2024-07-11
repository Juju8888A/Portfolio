import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="contact-section">
        <div id="contact" className="contact-left">
          <h4>Contact</h4>
          <img src="" alt="image de contact" />
        </div>
        <div className="infos">
          <div className="icone">
            <ul>
              <li>
                <FontAwesomeIcon icon={faMobile} />
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
              </li>
            </ul>
          </div>

          <div className="details">
            <ul>
              <li>06 98 63 94 09</li>
              <li>juliette.jourdan.work@gmail.com</li>
              <li>Montpellier, France</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-page">
        <p>© 2024 - Juliette Jourdan</p>
      </div>
    </footer>
  );
};

export default Footer;
