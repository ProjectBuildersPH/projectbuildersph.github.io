import React, { useEffect } from "react";
import "./learn.css";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "C++",
    description:
      "Learn programming fundamentals through practical C++ problems.",
    icon: "C++",
    level: "Beginner Friendly",
    problems: "Easy Problems",
    className: "cpp",
    path: "/learn/cpp",
  },
  {
    name: "Java",
    description:
      "Build your Java fundamentals by solving coding challenges.",
    icon: "☕",
    level: "Beginner Friendly",
    problems: "Easy Problems",
    className: "java",
    path: "/learn/java",
  },
  {
    name: "Python",
    description:
      "Practice programming logic and fundamentals with Python.",
    icon: "🐍",
    level: "Beginner Friendly",
    problems: "Easy Problems",
    className: "python",
    path: "/learn/python",
  },
  {
    name: "C#",
    description:
      "Strengthen your programming fundamentals using C# challenges.",
    icon: "C#",
    level: "Beginner Friendly",
    problems: "Easy Problems",
    className: "csharp",
    path: "/learn/csharp",
  },
];

const Learn = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  const navigate = useNavigate();

  const handleLanguageClick = (path) => {
    navigate(path);
  };

  
  return (
    <div className="learn-page">

      {/* Hero Section */}
      <section className="learn-hero">
        <div className="learn-container">

          <div className="learn-badge">
            LEARN • BUILD • SHARE
          </div>

          <h1>
            Choose Your <span>Language.</span>
          </h1>

          <p>
            Pick a programming language and start solving
            problems designed to strengthen your coding fundamentals.
          </p>

        </div>
      </section>

      {/* Language Section */}
      <section className="learn-section">

        <div className="learn-container">

          <div className="learn-section-heading">
            <div>
              <span className="section-label">PROGRAMMING</span>

              <h2>
                What do you want to learn?
              </h2>

              <p>
                Start with the language you want to practice.
                More languages and challenges will be added soon.
              </p>
            </div>
          </div>

          {/* Language Cards */}
          <div className="language-grid">

            {languages.map((language) => (
              <div
                className={`language-card ${language.className}`}
                key={language.name}
                onClick={() => handleLanguageClick(language.path)}
              >

                {/* Card Top */}
                <div className="language-card-top">

                  <div className="language-icon">
                    {language.icon}
                  </div>

                  <span className="arrow">
                    →
                  </span>

                </div>

                {/* Card Content */}
                <div className="language-card-content">

                  <h3>
                    {language.name}
                  </h3>

                  <p>
                    {language.description}
                  </p>

                </div>

                {/* Card Footer */}
                <div className="language-card-footer">

                  <span>
                    {language.level}
                  </span>

                  <span>
                    {language.problems}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Learning Path */}
      <section className="learn-path-section">

        <div className="learn-container">

          <div className="learning-path">

            <div className="path-icon">
              🚀
            </div>

            <div className="path-content">

              <span className="section-label">
                YOUR LEARNING PATH
              </span>

              <h2>
                Learn the basics. Build your logic.
              </h2>

              <p>
                Start with simple problems and gradually work
                your way toward more challenging programming concepts.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom Info */}
      <section className="learn-bottom">

        <div className="learn-container">

          <div className="learn-bottom-content">

            <h2>
              Start with something simple.
            </h2>

            <p>
              You don't need to know everything before you start.
              Choose a language, solve a problem, and learn along the way.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Learn;