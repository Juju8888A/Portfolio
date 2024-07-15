import React, { useState } from "react";
import dataProjects from "../data/data-projects.json";
import Modal from "./Modal"

const Achievements = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "", objectif:"", github:"", competences:"" });

  const openModal = (data) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section id="achievements">
      <h2>Mes Réalisations</h2>
      {isModalOpen && <Modal title={modalContent.title} objectif={modalContent.objectif} github={modalContent.github} competences={modalContent.competences} description={modalContent.description} closeModal={closeModal} />}
      <div className="data-cards">
        {dataProjects.map((data) => (
          <figure key={data.id}>
            <img src={data.pictures[0]} alt={data.pictures} onClick={() => openModal(data)} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
