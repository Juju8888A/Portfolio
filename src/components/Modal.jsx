import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXmark, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ title, objectif, closeModal, github, competences, description, site }) => {
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
        <p className="objectif-paragraphe">{objectif}</p>
        <p className="description-paragraphe">{description}</p>
        <ul>{competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}</ul>
          <div className='liens-modal'>
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" id="modal-github">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          )}
        {site && (
            <a href={site} target="_blank" rel="noopener noreferrer" id="modal-site">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;