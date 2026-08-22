import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./enrollmentsystem.css";

import loginImage from "./login.png";
import dashboardImage from "./dashboard.png";
import databaseImage from "./database.png";

function EnrollmentSystem() {

  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);

  const screenshots = [
    {
      image: loginImage,
      title: "Enrollment System Login",
      description:
        "A secure login interface where administrators can enter their username and password to access the enrollment management system."
    },
    {
      image: dashboardImage,
      title: "Admin Dashboard",
      description:
        "The dashboard provides an overview of the enrollment system including total students, courses, enrollments, and registered users."
    },
    {
      image: databaseImage,
      title: "MySQL Database",
      description:
        "The system uses MySQL to store user accounts and enrollment system data. phpMyAdmin is used to manage and inspect the database."
    }
  ];

  return (
    <section className="enrollment-page">

      {/* ========================================
          HERO
      ======================================== */}

      <div className="enrollment-hero">

        <div className="enrollment-hero-content">

          <span className="enrollment-label">
            WEB APPLICATION PROJECT
          </span>

          <h1>
            Enrollment <span>System</span>
          </h1>

          <p className="enrollment-hero-description">
            A web-based enrollment management system designed to
            help administrators manage students, courses, subjects,
            enrollment records, schedules, grades, and users.
          </p>

          <div className="enrollment-tech">

            <span>PHP</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>

          </div>

          <div className="enrollment-hero-buttons">

            <a
              href="#enrollment-preview"
              className="enrollment-primary-button"
            >
              View Project
            </a>

            <a
              href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer"
              className="enrollment-secondary-button"
            >
              Buy Video Tutorial ₱500
            </a>

          </div>

        </div>

      </div>


      {/* ========================================
          PROJECT CONTAINER
      ======================================== */}

      <div className="enrollment-container">


        {/* ========================================
            PROJECT INTRODUCTION
        ======================================== */}

        <section className="enrollment-introduction">

          <div className="enrollment-intro-content">

            <span className="section-label">
              ABOUT THE PROJECT
            </span>

            <h2>
              Manage Enrollment.
              <strong> Simplify Administration.</strong>
            </h2>

            <p>
              The Enrollment System is a web-based application
              created to demonstrate how PHP and MySQL can be
              combined to build a functional school management
              system.
            </p>

            <p>
              The system provides an administrator dashboard
              where users can manage students, courses, subjects,
              enrollment records, schedules, grades, and system
              users.
            </p>

          </div>


          <div className="enrollment-project-info">

            <div className="info-box">

              <span>PROJECT</span>

              <strong>
                Enrollment System
              </strong>

            </div>

            <div className="info-box">

              <span>TYPE</span>

              <strong>
                Web Application
              </strong>

            </div>

            <div className="info-box">

              <span>BACKEND</span>

              <strong>
                PHP
              </strong>

            </div>

            <div className="info-box">

              <span>DATABASE</span>

              <strong>
                MySQL
              </strong>

            </div>

          </div>

        </section>


        {/* ========================================
            FEATURES
        ======================================== */}

        <section
          className="enrollment-features"
          id="enrollment-features"
        >

          <div className="section-heading">

            <span className="section-label">
              FEATURES
            </span>

            <h2>
              Built for
              <strong> Enrollment Management</strong>
            </h2>

            <p>
              The system contains the core features needed
              for managing a basic school enrollment workflow.
            </p>

          </div>


          <div className="feature-grid">


            <div className="feature-card">

              <div className="feature-number">
                01
              </div>

              <h3>
                Secure Login
              </h3>

              <p>
                Administrators can securely log into the system
                using a username and password.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                02
              </div>

              <h3>
                Student Management
              </h3>

              <p>
                The system provides functionality for managing
                student information and registration records.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                03
              </div>

              <h3>
                Course Management
              </h3>

              <p>
                Administrators can manage available courses
                within the enrollment system.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                04
              </div>

              <h3>
                Enrollment Management
              </h3>

              <p>
                Enrollment records can be created and managed
                through the administrator interface.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                05
              </div>

              <h3>
                Schedule & Grades
              </h3>

              <p>
                The system includes sections for managing
                schedules and student grades.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                06
              </div>

              <h3>
                Database Integration
              </h3>

              <p>
                PHP communicates with MySQL to store and retrieve
                application data dynamically.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            PROJECT PREVIEW
        ======================================== */}

        <section
          className="enrollment-preview"
          id="enrollment-preview"
        >

          <div className="section-heading">

            <span className="section-label">
              PROJECT PREVIEW
            </span>

            <h2>
              Explore the
              <strong> Enrollment System</strong>
            </h2>

            <p>
              Take a look at the different parts of the
              enrollment management application.
            </p>

          </div>


          <div className="enrollment-gallery">

            {screenshots.map((item, index) => (

              <article
                className={`screenshot-card enrollment-screenshot-${index + 1}`}
                key={item.title}
              >

                <button
                  className="screenshot-image-button"
                  onClick={() => setSelectedImage(item.image)}
                  type="button"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="image-overlay">

                    <span>
                      View Image
                    </span>

                  </div>

                </button>


                <div className="screenshot-content">

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ========================================
            TECHNOLOGIES
        ======================================== */}

        <section className="enrollment-technologies">

          <div className="section-heading">

            <span className="section-label">
              TECHNOLOGIES
            </span>

            <h2>
              Built Using
              <strong> Web Technologies</strong>
            </h2>

            <p>
              Different technologies work together to create
              the Enrollment System.
            </p>

          </div>


          <div className="technology-grid">


            <div className="technology-card">

              <div className="technology-icon">
                PHP
              </div>

              <h3>
                PHP
              </h3>

              <p>
                Used as the server-side programming language
                for processing requests, authentication, and
                communicating with the database.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                SQL
              </div>

              <h3>
                MySQL
              </h3>

              <p>
                Used to store user accounts, students, courses,
                enrollment information, and other system data.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                HTML
              </div>

              <h3>
                HTML
              </h3>

              <p>
                Used to structure the login page, dashboard,
                forms, navigation, and application content.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                CSS
              </div>

              <h3>
                CSS
              </h3>

              <p>
                Used to create the layout, colors, spacing,
                dashboard cards, navigation, and responsive
                interface.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                JS
              </div>

              <h3>
                JavaScript
              </h3>

              <p>
                Used to add client-side interaction and improve
                the user experience throughout the application.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            DATABASE SECTION
        ======================================== */}

        <section className="enrollment-database">

          <div className="database-content">

            <span className="section-label">
              DATABASE
            </span>

            <h2>
              Powered by
              <strong> MySQL</strong>
            </h2>

            <p>
              The Enrollment System uses MySQL as its database
              management system. phpMyAdmin can be used to
              create tables, manage records, and inspect the
              database structure.
            </p>

            <p>
              PHP connects the application to the database,
              allowing information to be inserted, retrieved,
              updated, and managed dynamically.
            </p>

          </div>

        </section>


        {/* ========================================
            PROJECT SUMMARY
        ======================================== */}

        <section className="enrollment-summary">

          <div className="summary-content">

            <span className="section-label">
              PROJECT SUMMARY
            </span>

            <h2>
              A Complete
              <strong> Enrollment Workflow</strong>
            </h2>

            <p>
              The Enrollment System demonstrates how a database
              driven web application can be developed using
              PHP, MySQL, HTML, CSS, and JavaScript.
            </p>

            <p>
              From administrator authentication to student,
              course, enrollment, schedule, grade, and user
              management, the project brings together several
              important concepts in web development.
            </p>

            <button
              type="button"
              className="back-projects-button"
              onClick={() => navigate("/academ")}
            >
              ← Back to Projects
            </button>

          </div>

        </section>

      </div>


      {/* ========================================
          IMAGE MODAL
      ======================================== */}

      {selectedImage && (

        <div
          className="enrollment-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="enrollment-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="enrollment-modal-close"
              onClick={() => setSelectedImage(null)}
              type="button"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Enrollment System project preview"
            />

          </div>

        </div>

      )}

    </section>
  );
}

export default EnrollmentSystem;