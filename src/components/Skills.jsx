import React from "react";
import Skill from "./Skill";
import DownloadButton from "./DownloadButton";
import {
  faComputer,
  faServer,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];
  const backendSkills = ["NodeJS", "Express", "MongoDB"];
  const animationSkills = ["Autodesk Maya", "Photoshop"];
  const cvUrl = "/Portfolio/assets/cv_jourdan_juliette_2024.pdf";

  return (
    <section id="skills">
      <h2>Mes compétences</h2>
      <div className="skills-cards-container">
        <Skill
          icone={faComputer}
          title="Développement front-end"
          description="Développement d'interfaces responsives, dynamiques et fonctionnelles / SEO / Gestion de projet Agile"
          otherTitle="Logiciels, langages utilisés"
          skills={frontendSkills}
        />
        <Skill
          icone={faServer}
          title="Développement back-end"
          description="Gestion d'un serveur Express, utilisation des opérations CRUD"
          otherTitle="Logiciels, langages utilisés"
          skills={backendSkills}
        />
        <Skill
          icone={faFilm}
          title="Animation 3D"
          description="Animation de personnages fluides, cartoons ou réalistes en respectant les contraintes techniques"
          otherTitle="Logiciels, langages utilisés"
          skills={animationSkills}
          link="https://youtu.be/2mbKy4_5hu0"
        />
      </div>
      <DownloadButton fileUrl={cvUrl} fileName="cv_juliette_jourdan.pdf" />
    </section>
  );
};

export default Skills;
