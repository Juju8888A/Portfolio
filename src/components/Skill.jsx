import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const Skill = ({ icone, title, description, otherTitle, skills, link }) => {
  return (
    <div className="skills-card">
      <span>
        <FontAwesomeIcon icon={icone} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{otherTitle}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" id="link-demo"><FontAwesomeIcon icon={faArrowRight} /> DEMOREEL <FontAwesomeIcon icon={faArrowLeft} /></a>
      )}
    </div>
  );
};

export default Skill;
