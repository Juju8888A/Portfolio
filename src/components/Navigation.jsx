import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>
            <HashLink smooth to="/#about">A propos</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills">Mes compétences</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#achievements">Mes réalisations</HashLink>
          </li>
          <li>
            <Link to="/animation3D">Animation 3D</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
