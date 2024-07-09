import React from 'react';

const Skill = ( {title, description, otherTitle, skills} ) => {
    return (
        <div class="skills-card">
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