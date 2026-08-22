import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./academ.css";

function Academ() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      icon: "🎓",
      status: "AVAILABLE",
      name: "Enrollment System",
      description:
        "A complete school enrollment system developed using PHP, MySQL, HTML, CSS, JavaScript, and XAMPP.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      type: "School Management System",
      path: "/enrollmentsystem",
    },
    {
      icon: "📚",
      status: "COMING SOON",
      name: "Learning Management System",
      description:
        "A web-based learning platform designed for courses, lessons, students, instructors, and online learning.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      type: "Education Platform",
      path: null,
    },
    {
      icon: "📝",
      status: "COMING SOON",
      name: "Student Information System",
      description:
        "A system for managing student profiles, academic information, records, and school data.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      type: "Student Management",
      path: null,
    },
    {
      icon: "📊",
      status: "COMING SOON",
      name: "School Grading System",
      description:
        "A web application for recording subjects, grades, students, and academic performance.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      type: "Academic System",
      path: null,
    },
    {
      icon: "📅",
      status: "COMING SOON",
      name: "School Scheduling System",
      description:
        "A scheduling application for organizing classes, subjects, instructors, rooms, and schedules.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      type: "School Management",
      path: null,
    },
    {
      icon: "👨‍🏫",
      status: "COMING SOON",
      name: "Faculty Management System",
      description:
        "A system for managing faculty profiles, teaching assignments, subjects, and schedules.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      type: "Faculty Management",
      path: null,
    },
  ];

  const technologies = [
    {
      icon: "PHP",
      title: "PHP",
      description:
        "Server-side programming used for authentication, sessions, forms, CRUD operations, and application logic.",
    },
    {
      icon: "SQL",
      title: "MySQL",
      description:
        "Relational database technology used to store students, courses, enrollments, grades, and other records.",
    },
    {
      icon: "X",
      title: "XAMPP",
      description:
        "Local development environment providing Apache, PHP, MySQL, and phpMyAdmin.",
    },
    {
      icon: "HTML",
      title: "HTML",
      description:
        "Used to structure pages, forms, dashboards, tables, navigation, and application content.",
    },
    {
      icon: "CSS",
      title: "CSS",
      description:
        "Used to build responsive layouts, cards, forms, buttons, navigation, and the overall interface.",
    },
    {
      icon: "JS",
      title: "JavaScript",
      description:
        "Used for client-side interaction, validation, dynamic behavior, and browser functionality.",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.path) {
      navigate(project.path);
    }
  };

  return (
    <section className="academ-page">

      {/* ========================================
          HERO
      ======================================== */}

      <div className="academ-hero">

        <div className="academ-hero-background">
          <div className="academ-grid"></div>
          <div className="academ-glow academ-glow-one"></div>
          <div className="academ-glow academ-glow-two"></div>
        </div>

        <div className="academ-hero-content">

          <div className="academ-label-wrapper">
            <span className="academ-label-dot"></span>

            <span className="academ-label">
              PROJECTBUILDERSPH
            </span>
          </div>

          <h1>
            School <span>Projects</span>
          </h1>

          <p className="academ-hero-description">
            Explore practical school management systems built with
            PHP, MySQL, XAMPP, HTML, CSS, and JavaScript.
          </p>

          <div className="academ-tech">

            <span>PHP</span>
            <span>MySQL</span>
            <span>XAMPP</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>

          </div>

          <div className="academ-hero-buttons">

            <a
              href="#academ-projects"
              className="academ-primary-button"
            >
              Explore Projects
              <span>↓</span>
            </a>

            <a
              href="#academ-technologies"
              className="academ-secondary-button"
            >
              View Technologies
            </a>

          </div>

        </div>

      </div>


      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <div className="academ-container">

        <section className="academ-introduction">

          <div className="academ-intro-content">

            <span className="section-label">
              SCHOOL PROJECT COLLECTION
            </span>

            <h2>
              Practical Systems.
              <strong> Real Development.</strong>
            </h2>

            <p>
              This collection contains practical school and
              education systems designed to demonstrate how
              PHP and MySQL can be used to build real-world
              web applications.
            </p>

            <p>
              Each project focuses on solving a specific school
              management problem while demonstrating important
              concepts such as authentication, databases, CRUD
              operations, forms, sessions, and server-side logic.
            </p>

            <div className="academ-intro-highlight">

              <span className="highlight-icon">
                &lt;/&gt;
              </span>

              <div>
                <strong>
                  Built for Learning
                </strong>

                <p>
                  Every project can be studied as a practical
                  example of PHP web development.
                </p>
              </div>

            </div>

          </div>


          <div className="academ-info-panel">

            <div className="info-item">
              <span>PROJECTS</span>
              <strong>{projects.length}</strong>
            </div>

            <div className="info-item">
              <span>AVAILABLE</span>
              <strong>01</strong>
            </div>

            <div className="info-item">
              <span>BACKEND</span>
              <strong>PHP</strong>
            </div>

            <div className="info-item">
              <span>DATABASE</span>
              <strong>MySQL</strong>
            </div>

            <div className="info-item">
              <span>SERVER</span>
              <strong>Apache</strong>
            </div>

            <div className="info-item">
              <span>ENVIRONMENT</span>
              <strong>XAMPP</strong>
            </div>

          </div>

        </section>


        {/* ========================================
            PROJECTS
        ======================================== */}

        <section
          className="academ-projects"
          id="academ-projects"
        >

          <div className="section-heading">

            <span className="section-label">
              PROJECT LIBRARY
            </span>

            <h2>
              Explore School
              <strong> Projects</strong>
            </h2>

            <p>
              Browse practical PHP projects and explore how
              different school systems can be developed.
            </p>

          </div>


          <div className="academ-project-grid">

            {projects.map((project, index) => (

              <article
                className={`academ-project-card ${
                  project.path
                    ? "project-available"
                    : "project-coming"
                }`}
                key={project.name}
                onClick={() => handleProjectClick(project)}
              >

                {/* CARD HEADER */}

                <div className="project-card-top">

                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <span
                    className={`project-status ${
                      project.path
                        ? "status-available"
                        : "status-coming"
                    }`}
                  >
                    {project.status}
                  </span>

                </div>


                {/* NUMBER */}

                <div className="project-number">
                  0{index + 1}
                </div>


                {/* CONTENT */}

                <div className="project-card-content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>
                    {project.name}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>


                {/* TECHNOLOGIES */}

                <div className="project-technologies">

                  <span className="tech-label">
                    BUILT WITH
                  </span>

                  <div className="tech-list">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>


                {/* FOOTER */}

                <div className="project-card-footer">

                  <span>
                    {project.path
                      ? "View Project"
                      : "Coming Soon"}
                  </span>

                  <strong>
                    {project.path ? "→" : "···"}
                  </strong>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ========================================
            DEVELOPMENT STACK
        ======================================== */}

        <section
          className="academ-technologies"
          id="academ-technologies"
        >

          <div className="section-heading">

            <span className="section-label">
              DEVELOPMENT STACK
            </span>

            <h2>
              Built Using
              <strong> Web Technologies</strong>
            </h2>

            <p>
              The projects combine backend programming,
              databases, frontend technologies, and a local
              development environment.
            </p>

          </div>


          <div className="academ-technology-grid">

            {technologies.map((technology) => (

              <div
                className="academ-technology-card"
                key={technology.title}
              >

                <div className="technology-icon">
                  {technology.icon}
                </div>

                <h3>
                  {technology.title}
                </h3>

                <p>
                  {technology.description}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* ========================================
            DEVELOPMENT FLOW
        ======================================== */}

        <section className="academ-development">

          <div className="academ-development-content">

            <span className="section-label">
              PHP WEB DEVELOPMENT
            </span>

            <h2>
              From Localhost
              <strong> to a Working System</strong>
            </h2>

            <p>
              The projects are developed locally using XAMPP.
              The browser communicates with Apache, PHP processes
              the request, and MySQL stores the application data.
            </p>


            <div className="development-flow">

              <div className="development-step">

                <span>01</span>

                <div>
                  <h3>Browser</h3>

                  <p>
                    The user interacts with the web application.
                  </p>
                </div>

              </div>


              <div className="development-arrow">
                →
              </div>


              <div className="development-step">

                <span>02</span>

                <div>
                  <h3>Apache</h3>

                  <p>
                    XAMPP runs the local web server.
                  </p>
                </div>

              </div>


              <div className="development-arrow">
                →
              </div>


              <div className="development-step">

                <span>03</span>

                <div>
                  <h3>PHP</h3>

                  <p>
                    PHP processes the application logic.
                  </p>
                </div>

              </div>


              <div className="development-arrow">
                →
              </div>


              <div className="development-step">

                <span>04</span>

                <div>
                  <h3>MySQL</h3>

                  <p>
                    Data is stored and retrieved from the database.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================
            WHAT STUDENTS CAN LEARN
        ======================================== */}

        <section className="academ-learning">

          <div className="section-heading">

            <span className="section-label">
              LEARNING FOCUS
            </span>

            <h2>
              Learn PHP by
              <strong> Building Systems</strong>
            </h2>

            <p>
              These projects demonstrate concepts that are
              commonly used when building real PHP applications.
            </p>

          </div>


          <div className="learning-grid">

            <div className="learning-card">

              <span>01</span>

              <h3>
                Authentication
              </h3>

              <p>
                Learn how login systems, sessions, and
                password verification work.
              </p>

            </div>


            <div className="learning-card">

              <span>02</span>

              <h3>
                CRUD Operations
              </h3>

              <p>
                Create, read, update, and delete records
                using PHP and MySQL.
              </p>

            </div>


            <div className="learning-card">

              <span>03</span>

              <h3>
                Database Design
              </h3>

              <p>
                Understand how PHP applications communicate
                with relational databases.
              </p>

            </div>


            <div className="learning-card">

              <span>04</span>

              <h3>
                Forms & Validation
              </h3>

              <p>
                Process user input and validate information
                before saving it to the database.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            SUMMARY
        ======================================== */}

        <section className="academ-summary">

          <div className="summary-content">

            <span className="section-label">
              PROJECT COLLECTION
            </span>

            <h2>
              Build Real Systems.
              <strong> Learn Real Development.</strong>
            </h2>

            <p>
              The School Projects collection is designed to
              demonstrate practical PHP development through
              complete applications instead of isolated code
              examples.
            </p>

            <p>
              As more systems are developed, this collection
              will continue growing into a library of projects
              that students can explore, study, and learn from.
            </p>


            <div className="summary-tech">

              <span>PHP</span>
              <span>MySQL</span>
              <span>XAMPP</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>


            <button
              className="back-projects-button"
              onClick={() => navigate("/")}
              type="button"
            >
              ← Back to Categories
            </button>

          </div>

        </section>

      </div>

    </section>
  );
}

export default Academ;