import React from "react";
import { Link } from "react-router-dom";
import "./cppproblems.css";

const problems = [
  {
    number: 1,
    title: "Smart Parking Space Checker",
    description:
      "",
    difficulty: "Easy",
    topics: "cin, cout, variables, if/else",
    path: "/learn/cpp/problem/1",
  },
  {
    number: 2,
    title: "Office Access Control",
    description:
      "",
    difficulty: "Easy",
    topics: "variables, if/else, comparison operators",
    path: "/learn/cpp/problem/2",
  },
  {
    number: 3,
    title: "Senior Citizen With Exact Payment",
    description:
      "",
    difficulty: "Easy",
    topics: "variables, if/else, modulo",
    path: "/learn/cpp/problem/3",
  },
  {
    number: 4,
    title: "Jeepney Seat Allocation System",
    description:
      "",
    difficulty: "Easy",
    topics: "cin, cout, variables, if/else, comparison operators, while loop",
    path: "/learn/cpp/problem/6",
  },
  {
    number: 5,
    title: "Jeepney Passenger & Fare Control System",
    description:
      "",
    difficulty: "Easy",
    topics: "variables, arithmetic operators, cout,comparison operators, while loop",
    path: "/learn/cpp/problem/5",
  },
  {
    number: 6,
    title: "Smart Parking Garage Management System",
    description:
      "",
    difficulty: "Easy",
    topics: "variables, arithmetic operators, cout,comparison operators, while loop",
    path: "/learn/cpp/problem/7",
  },

    {
    number: 7,
    title: "Character Position Finder",
    description:
      "",
    difficulty: "Hard",
    topics: "variables, arithmetic operators, cout,comparison operators, while loop, do-while",
    path: "/learn/cpp/problem/8",
  },

  {
    number: 8,
    title: "Smart Queuemanagement System",
    description:
      "",
    difficulty: "Hard",
    topics: "variables, arithmetic operators, cout,comparison operators, while loop, do-while",
    path: "/learn/cpp/problem/9",
  },


  
];

const CppProblems = () => {
  return (
    <div className="cpp-problems-page">

      {/* Header */}
      <section className="cpp-problems-header">
        <div className="cpp-problems-container">

          <span className="cpp-label">
            C++ LEARNING
          </span>

          <h1>
            C++ Problems
          </h1>

          <p>
            Practice your programming fundamentals by solving
            problems from easy to challenging.
          </p>

        </div>
      </section>

      {/* Problems */}
      <main className="cpp-problems-container cpp-problems-content">

        <div className="cpp-problems-heading">
          <div>
            <span className="cpp-section-label">
              PROBLEM SET
            </span>

            <h2>
              Choose a Problem
            </h2>

            <p>
              Start with Problem #1 and work your way through
              the challenges.
            </p>
          </div>

          <div className="problem-count">
            {problems.length} Problems
          </div>
        </div>

        {/* Problem List */}
        <div className="problem-list">

          {problems.map((problem) => (
            <Link
              to={problem.path}
              className="problem-card"
              key={problem.number}
            >

              {/* Number */}
              <div className="problem-number">
                {String(problem.number).padStart(2, "0")}
              </div>

              {/* Main Content */}
              <div className="problem-info">

                <div className="problem-top">

                  <span className="problem-difficulty">
                    {problem.difficulty}
                  </span>

                  <span className="problem-language">
                    C++
                  </span>

                </div>

                <h3>
                  {problem.title}
                </h3>

                <p>
                  {problem.description}
                </p>

                <span className="problem-topics">
                  {problem.topics}
                </span>

              </div>

              {/* Arrow */}
              <div className="problem-arrow">
                →
              </div>

            </Link>
          ))}

        </div>

      </main>

    </div>
  );
};

export default CppProblems;