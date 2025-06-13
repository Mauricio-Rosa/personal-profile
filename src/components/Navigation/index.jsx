import React from 'react';
import './styles.css';
import { MdHome, MdInfo, MdBuild, MdContactMail } from 'react-icons/md';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            <MdHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            <MdInfo className="nav-icon" />
            <span className="nav-label">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            <MdBuild className="nav-icon" />
            <span className="nav-label">Services</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            <MdContactMail className="nav-icon" />
            <span className="nav-label">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
