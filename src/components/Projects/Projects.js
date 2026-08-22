import React from "react";
import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Revive Paint",
      category: "Web Development",
      description:
        "A responsive service website designed for a professional painting company.",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Java POS System",
      category: "Application Development",
      description:
        "A point-of-sale system designed as a practical Java programming project.",
      technologies: ["Java", "OOP", "Database"]
    },
    {
      title: "ProjectBuildersPH",
      category: "Community Platform",
      description:
        "A community platform where aspiring builders can learn, create projects, and share their journey.",
      technologies: ["React", "JavaScript", "Community"]
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-container">

        <div className="section-heading">

          <span>WHAT I'VE BUILT</span>

          <h2>
            Projects
          </h2>

          <p>
            Learning becomes powerful when you turn knowledge
            into something real.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article className="project-card" key={index}>

              <div className="project-image">
                <span>PROJECT</span>
              </div>

              <div className="project-content">

                <small>{project.category}</small>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>
                      {tech}
                    </span>
                  ))}

                </div>

                <button className="project-link">
                  View Project →
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;