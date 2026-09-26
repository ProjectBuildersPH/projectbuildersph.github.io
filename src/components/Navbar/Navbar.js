import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close everything
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsRoadmapOpen(false);
  };

  // Toggle roadmap dropdown
  const toggleRoadmap = () => {
    setIsRoadmapOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Project Builders PH Logo"
          />
        </Link>


        {/* =====================================================
            NAVIGATION MENU
        ====================================================== */}
        <nav
          className={`navbar-menu ${
            isMenuOpen ? "active" : ""
          }`}
        >

          {/* HOME */}
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>


          {/* JOURNEY */}
          <Link to="/pathcareer" onClick={closeMenu}>
            Journey
          </Link>


          {/* PROJECTS */}
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>


          {/* APPAREL */}
          <Link to="/tshirt" onClick={closeMenu}>
            Apparel
          </Link>


          {/* =================================================
              ROADMAP DROPDOWN
          ================================================== */}
          <div
            className={`navbar-dropdown ${
              isRoadmapOpen ? "dropdown-active" : ""
            }`}
          >

            <button
              type="button"
              className="navbar-dropdown-button"
              onClick={toggleRoadmap}
              aria-expanded={isRoadmapOpen}
              aria-haspopup="true"
            >
              <span>Roadmap</span>

              <span
                className="dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>


            {/* ROADMAP ITEMS */}
            <div className="navbar-dropdown-menu">

              {/* C++ */}
              <Link
                to="/roadmap/cpp"
                onClick={closeMenu}
              >
                <span className="language-icon cpp-icon">
                  C++
                </span>

                <span>C++ Roadmap</span>
              </Link>


              {/* JAVA */}
              <Link
                to="/roadmapjava/java"
                onClick={closeMenu}
              >
                <span className="language-icon java-icon">
                  J
                </span>

                <span>Java Roadmap</span>
              </Link>


              {/* JAVASCRIPT */}
              <Link
                to="/roadmapjs/javscript"
                onClick={closeMenu}
              >
                <span className="language-icon javascript-icon">
                  JS
                </span>

                <span>JavaScript Roadmap</span>
              </Link>


              {/* PYTHON */}
              <Link
                to="/roadmappy/python"
                onClick={closeMenu}
              >
                <span className="language-icon python-icon">
                  Py
                </span>

                <span>Python Roadmap</span>
              </Link>


              {/* C# */}
              <Link
                to="/roadmapcsharp/csharp"
                onClick={closeMenu}
              >
                <span className="language-icon csharp-icon">
                  C#
                </span>

                <span>C# Roadmap</span>
              </Link>


              {/* C */}
              <Link
                to="/roadmapC/c"
                onClick={closeMenu}
              >
                <span className="language-icon c-icon">
                  C
                </span>

                <span>C Roadmap</span>
              </Link>

            </div>
          </div>


          {/* LEARN */}
          <Link to="/learn" onClick={closeMenu}>
            Learn
          </Link>


          {/* CONTACT */}
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


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          className={`navbar-toggle ${
            isMenuOpen ? "active" : ""
          }`}
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
