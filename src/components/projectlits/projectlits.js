import React from "react";
import "./project.css";

const messengerLink =
  "https://www.messenger.com/t/9333023970159622";

const projects = [
  {
    id: 1,
    title: "Enrollment System",
    description:
      "A complete enrollment system project designed for students and beginners who want to learn how a real-world enrollment system works.",
    available: true,
  },
  {
    id: 2,
    title: "ShopEasy E-commerce",
    description:
      "An e-commerce project featuring products, shopping functionality, and a modern online store interface.",
    available: true,
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "A project for managing books, borrowers, returns, and library records.",
    available: false,
  },
  {
    id: 4,
    title: "Point of Sale System",
    description:
      "A POS project for managing products, sales, transactions, and receipts.",
    available: false,
  },
  {
    id: 5,
    title: "Reservation System",
    description:
      "A reservation management project for handling schedules, customers, and bookings.",
    available: false,
  },
  {
    id: 6,
    title: "Employee Management System",
    description:
      "A system for managing employee information, departments, and records.",
    available: false,
  },
];

function Project() {
  return (
    <div className="project-page">
      <div className="project-container">

        <div className="project-header">
          <span className="project-label">PROJECT BUILDERS PH</span>

          <h1>
            Learn. <span>Build.</span> Share.
          </h1>

          <p>
            Explore ready-to-use projects, learn how they work,
            and build your programming skills.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div
              className={`project-card ${
                !project.available ? "project-unavailable" : ""
              }`}
              key={project.id}
            >
              <div className="project-number">
                {String(project.id).padStart(2, "0")}
              </div>

              <div className="project-content">
                <div className="project-status">
                  {project.available ? (
                    <span className="status-available">
                      ● AVAILABLE
                    </span>
                  ) : (
                    <span className="status-unavailable">
                      ● COMING SOON
                    </span>
                  )}
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                {project.available ? (
                  <div className="project-buttons">
                    <a
                      href={messengerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tutorial-button"
                    >
                      ▶ Buy Video Tutorial
                    </a>

                    <a
                      href={messengerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-button"
                    >
                      🛒 Buy Project
                    </a>
                  </div>
                ) : (
                  <button className="unavailable-button" disabled>
                    🔒 Currently Unavailable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Project;