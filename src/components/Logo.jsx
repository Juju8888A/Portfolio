import React from 'react';
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <div className='logo-container'>
            <NavLink to="/"><img src="/Portfolio/assets/images/logo.webp" alt="logo du portfolio de juliette jourdan"/></NavLink>
        </div>
    );
};

export default Logo;