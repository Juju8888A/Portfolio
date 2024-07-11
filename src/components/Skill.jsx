import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ( {icone, title, description, otherTitle, skills} ) => {
    return (
        <div className="skills-card">
            <span><FontAwesomeIcon icon={icone} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>{otherTitle}</h4>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default Skill;