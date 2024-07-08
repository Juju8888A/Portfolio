import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="lien">A propos</NavLink>
          </li>
          <li>
            <NavLink to="/">Mes compétences</NavLink>
          </li>
          <li>
            <NavLink to="/">Mes réalisations</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
