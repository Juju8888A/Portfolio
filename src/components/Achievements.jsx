import React from "react";
import dataProjects from "../data/data-projects.json";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2>Mes Réalisations</h2>

      <div className="data-cards">
        {dataProjects.map((data) => (
          <figure key={data.id}>
            <img src={data.pictures[0]} alt={data.pictures} />
            <figcaption>{data.description}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
