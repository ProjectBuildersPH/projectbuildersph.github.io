import React, { useState } from "react";
import "./portfolio.css";

import revivePaint from "../../assets/revivepaint.png";
import ShopEase from "../../assets/ShopEase.png";

const projects = [
  {
    number: "01",
    name: "RevivePaint",
    category: "WEB DEVELOPMENT",
    description:
      "A business website designed and developed according to the client's preferred colors, visual style, layout, and overall branding.",
    technologies: ["React", "JavaScript", "CSS", "Responsive"],
    image: revivePaint,
    liveDemo: "https://revivepaint.co",
  },

  {
    number: "02",
    name: "ShopEase Online Store",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive e-commerce website that allows users to browse products, search for items, manage their cart and wishlist, apply discount coupons, and complete checkout.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
      "Responsive",
    ],
    image: ShopEase,
    liveDemo: "https://projectbuildersecommerce.netlify.app/",
  },

  // ADD MORE PROJECTS HERE
  // Example:
  /*
  {
    number: "03",
    name: "My Third Project",
    category: "WEB DEVELOPMENT",
    description:
      "Description of the project goes here.",
    technologies: ["React", "CSS", "JavaScript"],
    image: thirdProject,
    liveDemo: "https://example.com",
  },

  {
    number: "04",
    name: "My Fourth Project",
    category: "WEB DEVELOPMENT",
    description:
      "Description of the project goes here.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: fourthProject,
    liveDemo: "https://example.com",
  },
  */
];

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 2;

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const startIndex = currentPage * projectsPerPage;

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((current) =>
      current === totalPages - 1 ? 0 : current + 1
    );
  };

  const previousPage = () => {
    setCurrentPage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-container">

        {/* HEADER */}
        <div className="portfolio-header">

          <div className="portfolio-heading">

            <span className="portfolio-label">
              PROJECTBUILDERSPH • PROJECTS
            </span>

            <h2>
              Things I've <span>Built.</span>
            </h2>

            <p>
              A collection of projects built around
              different ideas, goals, and client
              preferences.
            </p>

          </div>

          {/* NAVIGATION */}
          <div className="portfolio-header-navigation">

            <button
              onClick={previousPage}
              aria-label="Previous projects"
            >
              ←
            </button>

            <div className="portfolio-page-count">
              <strong>
                {String(currentPage + 1).padStart(2, "0")}
              </strong>

              <span>
                / {String(totalPages).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={nextPage}
              aria-label="Next projects"
            >
              →
            </button>

          </div>

        </div>

        {/* PROJECT GRID */}
        <div className="portfolio-grid">

          {visibleProjects.map((project) => (
            <article
              className="portfolio-card"
              key={project.number}
            >

              {/* IMAGE */}
              <div className="portfolio-card-image">

                <img
                  src={project.image}
                  alt={project.name}
                />

                <div className="portfolio-card-number">
                  {project.number}
                </div>

                <div className="portfolio-card-category">
                  {project.category}
                </div>

              </div>

              {/* CONTENT */}
              <div className="portfolio-card-content">

                <div className="portfolio-card-heading">

                  <div>
                    <span className="portfolio-card-small">
                      PROJECT {project.number}
                    </span>

                    <h3>{project.name}</h3>
                  </div>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-card-arrow"
                    aria-label={`View ${project.name}`}
                  >
                    ↗
                  </a>

                </div>

                <p className="portfolio-card-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="portfolio-card-tech">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* LIVE DEMO */}
                <div className="portfolio-card-footer">

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-live"
                  >
                    View Live Demo
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="portfolio-bottom">

          <div className="portfolio-progress">

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={
                  currentPage === index ? "active" : ""
                }
                aria-label={`Go to project page ${
                  index + 1
                }`}
              />
            ))}

          </div>

          <span>
            Showing{" "}
            {startIndex + 1}–
            {Math.min(
              startIndex + projectsPerPage,
              projects.length
            )}{" "}
            of {projects.length} projects
          </span>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;
