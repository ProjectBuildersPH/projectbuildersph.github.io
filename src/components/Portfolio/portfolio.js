import React, { useState } from "react";
import "./portfolio.css";

import revivePaint from "../../assets/revivepaint.png";

const projects = [
  {
    number: "01",
    name: "RevivePaint",
    category: "WEB DEVELOPMENT",

    description:
      "A business website designed and developed according to the client's preferred colors, visual style, layout, and overall branding. ProjectBuildersPH focuses on bringing the client's own vision and preferences into the final design.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive",
    ],

    image: revivePaint,

    liveDemo:
      "https://revivepaint.co",
  },

  /*
  ========================================
  ADD YOUR NEXT PROJECT HERE

  {
    number: "02",
    name: "Next Project",
    category: "WEB DEVELOPMENT",

    description:
      "Your project description here.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],

    image: yourImage,

    liveDemo:
      "https://your-project.com/",
  },

  ========================================
  */
];

function Portfolio() {

  const [currentProject, setCurrentProject] = useState(0);

  const project = projects[currentProject];

  const nextProject = () => {

    setCurrentProject((current) =>
      current === projects.length - 1
        ? 0
        : current + 1
    );

  };

  const previousProject = () => {

    setCurrentProject((current) =>
      current === 0
        ? projects.length - 1
        : current - 1
    );

  };

  return (
    <section
      className="portfolio-section"
      id="projects"
    >

      <div className="portfolio-container">

        {/* HEADER */}

        <div className="portfolio-header">

          <div>

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


          {/* PROJECT COUNTER */}

          <div className="portfolio-counter">

            <strong>
              {project.number}
            </strong>

            <span>
              / {String(projects.length).padStart(2, "0")}
            </span>

          </div>

        </div>


        {/* PROJECT SHOWCASE */}

        <div className="portfolio-showcase">


          {/* LEFT — IMAGE */}

          <div className="portfolio-image-wrapper">

            <div className="portfolio-image">

              <img
                src={project.image}
                alt={project.name}
              />

            </div>

            <div className="portfolio-image-label">
              PROJECT {project.number}
            </div>

          </div>


          {/* RIGHT — INFORMATION */}

          <div className="portfolio-details">

            <div className="portfolio-meta">

              <span className="portfolio-project-number">
                {project.number}
              </span>

              <span>
                {project.category}
              </span>

            </div>


            <h3>
              {project.name}
            </h3>


            <p className="portfolio-description">
              {project.description}
            </p>


            {/* TECHNOLOGIES */}

            <div className="portfolio-tech">

              {project.technologies.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* ACTIONS */}

            <div className="portfolio-actions">

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="portfolio-live"
              >
                Live Demo
                <span>↗</span>
              </a>


              <div className="portfolio-navigation">

                <button
                  onClick={previousProject}
                  aria-label="Previous project"
                >
                  ←
                </button>

                <button
                  onClick={nextProject}
                  aria-label="Next project"
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* PROJECT INDICATORS */}

        <div className="portfolio-indicators">

          {projects.map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrentProject(index)
              }
              className={
                currentProject === index
                  ? "active"
                  : ""
              }
            >
              {String(index + 1).padStart(2, "0")}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;