import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>A propos</h2>
      <div className="container-about">
        <div className="texte-liens">
          <p>
            Animatrice 3D depuis 2015, je me suis reconvertie dans le
            développement web, spécialisée en front-end. Ayant de base des
            compétences techniques, plus un bagage créatif, je suis ravie
            aujourd'hui de pouvoir apporter mes compétences en développement et
            artistiques, dans le but de réaliser des projets innovants et de
            créer des interfaces utilisateurs modernes et qualitatives.{" "}
          </p>
          <div className="liens-externes">
          <a href="https://github.com/Juju8888A" target="_blank" rel="noopener noreferrer" id="lien-github"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/juliettejourdan" target="_blank" rel="noopener noreferrer"id="lien-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="profil">
          <img
            src="./assets/images/portrait.webp"
            alt="portrait de juliette jourdan"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
