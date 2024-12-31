import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
       
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#second_row">Projects</a>
          </li>
          <li>
            <a href="#third_row">Experience</a>
          </li>
          <li>
            <a href="#fourth_row">Education</a>
          </li>
          <li>
            <a href="#fifth_row">Achievements</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
