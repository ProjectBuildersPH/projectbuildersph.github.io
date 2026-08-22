
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./ecommerce.css";

/* ========================================
   ECOMMERCE PROJECTS
======================================== */

const ecommerceProjects = [
  {
    id: 1,
    name: "ShopEasy",
    description:
      "A modern ecommerce website with products, categories, shopping cart, and promotional sections.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "AVAILABLE",
    route: "/shopeasy",
    icon: "🛍️",
  },

  {
    id: 2,
    name: "TechStore",
    description:
      "A clean technology store concept designed for selling laptops, phones, accessories, and electronics.",
    technologies: ["React", "CSS", "JavaScript"],
    status: "COMING SOON",
    route: "#",
    icon: "💻",
  },

  {
    id: 3,
    name: "FashionHub",
    description:
      "A stylish online fashion store showcasing clothing, shoes, accessories, and seasonal collections.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "COMING SOON",
    route: "#",
    icon: "👕",
  },

  {
    id: 4,
    name: "GadgetZone",
    description:
      "An ecommerce concept focused on gadgets, smart devices, gaming accessories, and electronics.",
    technologies: ["React", "CSS"],
    status: "COMING SOON",
    route: "#",
    icon: "🎧",
  },

  {
    id: 5,
    name: "FoodCart",
    description:
      "A simple food ordering ecommerce interface for browsing meals and adding products to a cart.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "COMING SOON",
    route: "#",
    icon: "🍔",
  },

  {
    id: 6,
    name: "ModernStore",
    description:
      "A modern ecommerce interface designed with reusable components and a responsive layout.",
    technologies: ["React", "CSS", "JavaScript"],
    status: "COMING SOON",
    route: "#",
    icon: "✨",
  },
];


/* ========================================
   COMPONENT
======================================== */

function Ecommerce() {

  
 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();


  /* ========================================
     CARD CLICK
  ======================================== */

  const handleProjectClick = (project) => {

    if (project.route !== "#") {

      navigate(project.route);

    }

  };


  return (

    <section className="ecommerce-page">


      {/* ========================================
          HERO
      ======================================== */}

      <div className="ecommerce-hero">

        <span className="ecommerce-label">
          PROJECTBUILDERSPH
        </span>

        <h1>
          Ecommerce <span>Projects</span>
        </h1>

        <p>
          Explore ecommerce website projects built using
          different technologies, from simple HTML, CSS,
          and JavaScript websites to modern React applications.
        </p>

      </div>


      {/* ========================================
          PROJECT COUNT
      ======================================== */}

      <div className="ecommerce-summary">

        <div className="summary-item">

          <strong>
            {ecommerceProjects.length}
          </strong>

          <span>
            Example Projects
          </span>

        </div>


        <div className="summary-divider"></div>


        <div className="summary-item">

          <strong>
            4+
          </strong>

          <span>
            Technologies
          </span>

        </div>


        <div className="summary-divider"></div>


        <div className="summary-item">

          <strong>
            0
          </strong>

          <span>
            Database Required
          </span>

        </div>

      </div>


      {/* ========================================
          PROJECT SECTION
      ======================================== */}

      <div className="ecommerce-project-section">

        <div className="ecommerce-section-header">

          <div>

            <span>
              EXAMPLE PROJECTS
            </span>

            <h2>
              Explore the <strong>Projects</strong>
            </h2>

          </div>

          <p>
            Select a project to explore the website,
            technologies, and implementation.
          </p>

        </div>


        {/* ========================================
            PROJECT GRID
        ======================================== */}

        <div className="ecommerce-grid">

          {ecommerceProjects.map((project) => (

            <article
              className={`ecommerce-card ${
                project.status === "AVAILABLE"
                  ? "available"
                  : "coming-soon"
              }`}
              key={project.id}
              onClick={() =>
                handleProjectClick(project)
              }
            >


              {/* PROJECT ICON */}

              <div className="ecommerce-card-top">

                <div className="ecommerce-icon">
                  {project.icon}
                </div>

                <span
                  className={`project-status ${
                    project.status === "AVAILABLE"
                      ? "status-available"
                      : "status-coming"
                  }`}
                >
                  {project.status}
                </span>

              </div>


              {/* PROJECT INFORMATION */}

              <h3>
                {project.name}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="technology-section">

                <span className="technology-title">
                  BUILT WITH
                </span>

                <div className="technology-list">

                  {project.technologies.map(
                    (technology) => (

                      <span
                        className="technology"
                        key={technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* ACTION */}

              <div className="project-action">

                {project.status === "AVAILABLE"
                  ? "View Project →"
                  : "Coming Soon"}

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* ========================================
          BOTTOM MESSAGE
      ======================================== */}

      <div className="ecommerce-bottom">

        <span>
          MORE PROJECTS ARE COMING
        </span>

        <h2>
          Building More <strong>Ecommerce</strong> Projects
        </h2>

        <p>
          New ecommerce projects will be added as they are
          developed. Each project demonstrates different
          approaches, technologies, and design ideas.
        </p>

      </div>

    </section>

  );

}

export default Ecommerce;