// src/components/Header.js
import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-links">
        <li><NavLink to="/" >HOME</NavLink></li>
        <li><NavLink to="/about" >ABOUT</NavLink></li>
        <li><NavLink to="/services" >SERVICES</NavLink></li>
        <li><NavLink to="/skill">SKILLS</NavLink></li>
        <li><NavLink to="/portfolio">PROJECTS</NavLink></li>
        <li><NavLink to="/resume">RESUME</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;