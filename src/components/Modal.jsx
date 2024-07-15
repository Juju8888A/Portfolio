import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ title, objectif, closeModal, github, competences, description }) => {
  // lorsque l'utilisateur clique à coté de la modale, la modale se ferme
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

    // lorsque l'utilisateur utilise ECHAP, la modale se ferme
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='modal' onClick={handleBackgroundClick}>
      <div className="modal_content">
        <button onClick={closeModal} id="cross"><FontAwesomeIcon icon={faXmark}/></button>
        <h4>{title}</h4>
        <p class="objectif-paragraphe">{objectif}</p>
        <p class="description-paragraphe">{description}</p>
        <ul>{competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}</ul>
        <a href={github} target="_blank" rel="noopener noreferrer" id="modal-github"><FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
  );
};

export default Modal;