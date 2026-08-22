
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Project Builders Logo" />
        </a>

        {/* Desktop Navigation */}
<nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
  <a href="/" onClick={closeMenu}>
    Home
  </a>


  <Link to="/pathcareer" onClick={closeMenu}>
  Journey
  </Link>
  
  <Link to="/projects" onClick={closeMenu}>
  Projects
  </Link>

  {/* LEARN */}
  <Link to="/learn" onClick={closeMenu}>
  Learn
  </Link>

  <a href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
    Community
  </a>

 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=thorregoza15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="navbar-contact"
  onClick={closeMenu}
>
  Contact Me
</a>
</nav>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;

