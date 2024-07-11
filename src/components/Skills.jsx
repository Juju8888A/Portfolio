import React from 'react';
import Skill from './Skill';
import DownloadButton from './DownloadButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faServer,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";



const Skills = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];
    const backendSkills = ["NodeJS", "MongoDB", "Express"]
    const animationSkills = ["Autodesk Maya", "Photoshop"]
    const cvUrl = "/assets/cv_jourdan_juliette_2024.pdf";


    return (
        <section id="skills">
            
            <h2>Mes compétences</h2>
            <div className='skills-cards-container'>
            <Skill title="Développement front-end" description="Réalisation d'interface utilisateur" otherTitle="Logiciels, langages utilisés" skills={frontendSkills}/>
            <Skill title="Développement back-end" description="Création d'un serveur, sécurisation des données" otherTitle="Logiciels, langages utilisés" skills={backendSkills}/>
            <Skill title="Animation 3D" description="Animation des personnages" otherTitle="Logiciels, langages utilisés" skills={animationSkills}/>
            </div>
            <DownloadButton fileUrl={cvUrl} fileName="cv_juliette_jourdan.pdf" />
        </section>
    );
};

export default Skills;