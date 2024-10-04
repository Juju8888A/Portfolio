import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Skill = ( {icone, title, description, otherTitle, skills, link} ) => {
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
            {link && (
                <a href={link} target="_blank" id='link-demo'>DEMO</a>
            )}      
        </div>
    );
};

export default Skill;