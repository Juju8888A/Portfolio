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
            Ayant travailler dans le secteur de l'animation 3D depuis 2015, je me suis reconvertie dans le
            développement web en 2024 et spécialisée en React et NodeJS. Je possède un bagage créatif et technique qui, associé aujourd'hui à mes compétences en développement web, me permettent de réaliser des interfaces utilisateurs qualitatives et sécurisées, respectant les besoins des clients. J'ai également appris à travailler grâce à la méthodologie Agile et je sais optimiser un site pour lui apporter une meilleur visibilité et accessibilité.
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
