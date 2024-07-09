import React from 'react';
import Skill from './Skill';


const Skills = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];
    const backendSkills = ["NodeJS", "MongoDB", "Express"]
    const animationSkills = ["Autodesk Maya", "Photoshop"]


    return (
        <section id="skills">
            
            <h2>Mes compétences</h2>
            <div className='skills-cards-container'>
            <Skill title="Développement front-end" description="Réalisation d'interface utilisateur" otherTitle="Logiciels, langages utilisés" skills={frontendSkills}/>
            <Skill title="Développement back-end" description="Création d'un serveur, sécurisation des données" otherTitle="Logiciels, langages utilisés" skills={backendSkills}/>
            <Skill title="Animation 3D" description="Animation des personnages" otherTitle="Logiciels, langages utilisés" skills={animationSkills}/>
            </div>
        </section>
    );
};

export default Skills;