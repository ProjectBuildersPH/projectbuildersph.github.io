import React from "react";
import "./lesson.css";
import { Link } from "react-router-dom";

const lessons = [
  {
    icon: "C++",
    name: "C++",
    description:
      "Learn programming fundamentals, logic, functions, OOP, and problem solving using C++.",
    level: "BEGINNER",
    lessons: "12 Lessons",
  },

  {
    icon: "☕",
    name: "Java Graphics",
    description:
      "Learn Java programming through graphics, GUI development, and interactive applications.",
    level: "BEGINNER",
    lessons: "10 Lessons",
    link: "/java-graphics/module-2",
  },

  {
    icon: "JEE",
    name: "Java Enterprise",
    description:
      "Explore enterprise application development using Java and real-world programming concepts.",
    level: "INTERMEDIATE",
    lessons: "14 Lessons",
  },

  {
    icon: "SQL",
    name: "Database & SQL",
    description:
      "Learn databases, SQL queries, relationships, normalization, and practical database design.",
    level: "BEGINNER",
    lessons: "11 Lessons",
  },

  {
    icon: "⚛",
    name: "React JS",
    description:
      "Build modern and interactive web applications using ReactJS and component-based development.",
    level: "INTERMEDIATE",
    lessons: "15 Lessons",
  },

  {
    icon: "🐍",
    name: "Python",
    description:
      "Learn Python programming, problem solving, OOP, and practical project development.",
    level: "BEGINNER",
    lessons: "13 Lessons",
  },

  {
    icon: "</>",
    name: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, responsive design, and the fundamentals of modern web development.",
    level: "BEGINNER",
    lessons: "18 Lessons",
  },

  {
    icon: "AI",
    name: "Artificial Intelligence",
    description:
      "Explore AI concepts and learn how to integrate intelligent features into applications.",
    level: "INTERMEDIATE",
    lessons: "9 Lessons",
  },
];

function Lesson() {
  return (
    <section className="lesson-section" id="lessons">

      <div className="lesson-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="lesson-header">

          <div>

            <span className="lesson-label">
              PROJECTBUILDERSPH • LEARNING
            </span>

            <h2>
              Learn. <span>Build.</span>
            </h2>

            <p>
              Learn programming through structured lessons,
              then turn what you learn into real projects.
            </p>

          </div>

          <div className="lesson-header-badge">
            <span>01</span>
            COURSES
          </div>

        </div>


        {/* ========================================
            LESSON LIST
        ======================================== */}

        <div className="lesson-list">

          {lessons.map((lesson, index) => (

            <div
              className="lesson-card"
              key={lesson.name}
            >

              {/* NUMBER */}

              <div className="lesson-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* ICON */}

              <div className="lesson-icon">
                {lesson.icon}
              </div>


              {/* INFORMATION */}

              <div className="lesson-info">

                <div className="lesson-meta">

                  <span>
                    {lesson.level}
                  </span>

                  <small>
                    •
                  </small>

                  <small>
                    {lesson.lessons}
                  </small>

                </div>

                <h3>
                  {lesson.name}
                </h3>

                <p>
                  {lesson.description}
                </p>

              </div>


              {/* ACTIONS */}

              <div className="lesson-actions">

<Link
  to={lesson.link || "#learn"}
  className="lesson-btn lesson-btn-learn"
>
  <span>▶</span>
  Lessons
</Link>
                <a
                  href="#projects"
                  className="lesson-btn lesson-btn-project"
                >
                  <span>+</span>
                  Build a Project
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Lesson;