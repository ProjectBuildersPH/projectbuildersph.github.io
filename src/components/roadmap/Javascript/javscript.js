import React, { useState } from "react";
import "./javscript.css";

const roadmapData = [
  {
    id: 1,
    level: "BEGINNER",
    title: "JavaScript Fundamentals",
    subtitle: "Start Here",
    topics: [
      {
        id: "js-introduction",
        title: "Introduction to JavaScript",
        difficulty: "Beginner",
        duration: "15 min",
        description:
          "Learn what JavaScript is, where it is used, and how it makes websites interactive.",
        concepts: [
          "What is JavaScript?",
          "JavaScript vs HTML and CSS",
          "Where JavaScript is used",
          "Running JavaScript",
        ],
        code: `console.log("Hello, JavaScript!");`,
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: "js-variables",
        title: "Variables",
        difficulty: "Beginner",
        duration: "20 min",
        description:
          "Learn how to store and work with data using let, const, and var.",
        concepts: [
          "let",
          "const",
          "var",
          "Variable naming",
          "Changing values",
        ],
        code: `let name = "Alex";
const age = 20;

console.log(name);
console.log(age);`,
        video: "https://www.youtube.com/embed/9WIJQDcv43k",
      },
      {
        id: "js-data-types",
        title: "Data Types",
        difficulty: "Beginner",
        duration: "25 min",
        description:
          "Understand the different types of values JavaScript can store.",
        concepts: [
          "String",
          "Number",
          "Boolean",
          "Undefined",
          "Null",
          "Object",
          "Array",
        ],
        code: `let name = "Alex";
let age = 20;
let student = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof student);`,
        video: "https://www.youtube.com/embed/edlFjlzxkSI",
      },
      {
        id: "js-operators",
        title: "Operators",
        difficulty: "Beginner",
        duration: "25 min",
        description:
          "Learn arithmetic, comparison, logical, and assignment operators.",
        concepts: [
          "Arithmetic operators",
          "Assignment operators",
          "Comparison operators",
          "Logical operators",
        ],
        code: `let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a > b);`,
        video: "https://www.youtube.com/embed/FZzyij43A54",
      },
      {
        id: "js-input-output",
        title: "Input and Output",
        difficulty: "Beginner",
        duration: "20 min",
        description:
          "Learn how JavaScript receives information and displays results.",
        concepts: [
          "console.log()",
          "prompt()",
          "alert()",
          "Template literals",
        ],
        code: `let name = prompt("Enter your name:");

console.log("Hello " + name);
alert(\`Welcome, \${name}!\`);`,
        video: "https://www.youtube.com/embed/hdI2bqOjy3c",
      },
      {
        id: "js-conditions",
        title: "Conditions",
        difficulty: "Beginner",
        duration: "30 min",
        description:
          "Learn how to make decisions using if, else if, and else.",
        concepts: [
          "if",
          "else if",
          "else",
          "Comparison",
          "Logical conditions",
        ],
        code: `let age = 18;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young.");
}`,
        video: "https://www.youtube.com/embed/IsG4Xd6LlsM",
      },
      {
        id: "js-loops",
        title: "Loops",
        difficulty: "Beginner",
        duration: "35 min",
        description:
          "Learn how to repeat code using for, while, and do...while loops.",
        concepts: [
          "for loop",
          "while loop",
          "do...while",
          "Loop counter",
          "break",
          "continue",
        ],
        code: `for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}`,
        video: "https://www.youtube.com/embed/s9wW2PpJsmQ",
      },
    ],
  },

  {
    id: 2,
    level: "INTERMEDIATE",
    title: "JavaScript Core",
    subtitle: "Build Your Skills",
    topics: [
      {
        id: "js-functions",
        title: "Functions",
        difficulty: "Intermediate",
        duration: "35 min",
        description:
          "Learn how to create reusable blocks of JavaScript code.",
        concepts: [
          "Function declaration",
          "Parameters",
          "Arguments",
          "Return values",
          "Arrow functions",
        ],
        code: `function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alex"));`,
        video: "https://www.youtube.com/embed/N8ap4k_1QEQ",
      },
      {
        id: "js-arrays",
        title: "Arrays",
        difficulty: "Intermediate",
        duration: "30 min",
        description:
          "Learn how to store multiple values in a single variable.",
        concepts: [
          "Creating arrays",
          "Indexing",
          "push()",
          "pop()",
          "shift()",
          "unshift()",
        ],
        code: `let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);

fruits.push("Orange");

console.log(fruits);`,
        video: "https://www.youtube.com/embed/oigfaZ5ApsM",
      },
      {
        id: "js-array-methods",
        title: "Array Methods",
        difficulty: "Intermediate",
        duration: "40 min",
        description:
          "Master useful array methods for processing collections of data.",
        concepts: [
          "map()",
          "filter()",
          "reduce()",
          "forEach()",
          "find()",
          "includes()",
        ],
        code: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(
    number => number * 2
);

console.log(doubled);`,
        video: "https://www.youtube.com/embed/R8rmfD9Y5-c",
      },
      {
        id: "js-objects",
        title: "Objects",
        difficulty: "Intermediate",
        duration: "35 min",
        description:
          "Learn how to represent real-world entities using JavaScript objects.",
        concepts: [
          "Object properties",
          "Object methods",
          "Dot notation",
          "Bracket notation",
          "Nested objects",
        ],
        code: `const student = {
    name: "Alex",
    age: 20,
    course: "IT"
};

console.log(student.name);
console.log(student.course);`,
        video: "https://www.youtube.com/embed/PFmuCDHHpwk",
      },
      {
        id: "js-dom",
        title: "DOM Manipulation",
        difficulty: "Intermediate",
        duration: "45 min",
        description:
          "Learn how JavaScript interacts with HTML elements through the DOM.",
        concepts: [
          "document",
          "getElementById()",
          "querySelector()",
          "textContent",
          "innerHTML",
          "classList",
        ],
        code: `const title =
    document.querySelector("#title");

title.textContent = "Hello JavaScript!";`,
        video: "https://www.youtube.com/embed/5fb2aPlgoys",
      },
      {
        id: "js-events",
        title: "Events",
        difficulty: "Intermediate",
        duration: "35 min",
        description:
          "Learn how to respond to user actions such as clicks and keyboard input.",
        concepts: [
          "click",
          "mouseover",
          "keydown",
          "input",
          "addEventListener()",
        ],
        code: `const button =
    document.querySelector("#button");

button.addEventListener("click", () => {
    alert("Button clicked!");
});`,
        video: "https://www.youtube.com/embed/3PHXvlpOkf4",
      },
    ],
  },

  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced JavaScript",
    subtitle: "Level Up",
    topics: [
      {
        id: "js-es6",
        title: "Modern JavaScript ES6+",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Learn modern JavaScript features introduced through ES6 and later versions.",
        concepts: [
          "let and const",
          "Arrow functions",
          "Destructuring",
          "Spread operator",
          "Rest parameters",
          "Template literals",
        ],
        code: `const user = {
    name: "Alex",
    age: 21
};

const { name, age } = user;

console.log(name);
console.log(age);`,
        video: "https://www.youtube.com/embed/NCwa_xi0Uuc",
      },
      {
        id: "js-destructuring",
        title: "Destructuring",
        difficulty: "Advanced",
        duration: "25 min",
        description:
          "Learn how to extract values from arrays and objects efficiently.",
        concepts: [
          "Object destructuring",
          "Array destructuring",
          "Default values",
          "Nested destructuring",
        ],
        code: `const person = {
    name: "John",
    age: 25
};

const { name, age } = person;

console.log(name);
console.log(age);`,
        video: "https://www.youtube.com/embed/NIq3qLaHCIs",
      },
      {
        id: "js-async",
        title: "Asynchronous JavaScript",
        difficulty: "Advanced",
        duration: "50 min",
        description:
          "Understand how JavaScript handles tasks that take time to complete.",
        concepts: [
          "Callbacks",
          "Promises",
          "async",
          "await",
          "setTimeout()",
        ],
        code: `async function getData() {
    const response =
        await fetch("https://api.example.com/data");

    const data = await response.json();

    console.log(data);
}

getData();`,
        video: "https://www.youtube.com/embed/PoRJizFvM7s",
      },
      {
        id: "js-fetch",
        title: "Fetch API",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Learn how to request data from APIs using the Fetch API.",
        concepts: [
          "fetch()",
          "GET requests",
          "JSON",
          "Promises",
          "async/await",
        ],
        code: `fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });`,
        video: "https://www.youtube.com/embed/cuEtnrL9-H0",
      },
      {
        id: "js-modules",
        title: "JavaScript Modules",
        difficulty: "Advanced",
        duration: "35 min",
        description:
          "Learn how to organize large JavaScript applications into reusable modules.",
        concepts: [
          "export",
          "import",
          "Named exports",
          "Default exports",
          "Module organization",
        ],
        code: `// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(5, 3));`,
        video: "https://www.youtube.com/embed/cRHQNNcYf6s",
      },
    ],
  },

  {
    id: 4,
    level: "PROJECTS",
    title: "JavaScript Projects",
    subtitle: "Build Real Applications",
    topics: [
      {
        id: "js-project-calculator",
        title: "Calculator",
        difficulty: "Beginner",
        duration: "1 hour",
        description:
          "Build a calculator using HTML, CSS, and JavaScript.",
        concepts: [
          "DOM manipulation",
          "Events",
          "Functions",
          "Operators",
        ],
        code: `function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    }

    if (operator === "-") {
        return a - b;
    }

    if (operator === "*") {
        return a * b;
    }

    if (operator === "/") {
        return a / b;
    }
}

console.log(calculate(10, 5, "+"));`,
        video: "https://www.youtube.com/embed/I5kj-YsmWjM",
      },
      {
        id: "js-project-todo",
        title: "To-Do List",
        difficulty: "Intermediate",
        duration: "2 hours",
        description:
          "Build a task management application using JavaScript.",
        concepts: [
          "DOM manipulation",
          "Arrays",
          "Objects",
          "Events",
          "Local storage",
        ],
        code: `const tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log("Task added:", task);
}

addTask("Learn JavaScript");
addTask("Build a project");

console.log(tasks);`,
        video: "https://www.youtube.com/embed/Ttf3CEsEwMQ",
      },
      {
        id: "js-project-weather",
        title: "Weather App",
        difficulty: "Intermediate",
        duration: "2 hours",
        description:
          "Build a weather application that gets information from an API.",
        concepts: [
          "Fetch API",
          "Promises",
          "async/await",
          "JSON",
          "DOM manipulation",
        ],
        code: `async function getWeather(city) {
    const response = await fetch(
        \`https://api.example.com/weather?city=\${city}\`
    );

    const data = await response.json();

    console.log(data);
}

getWeather("Manila");`,
        video: "https://www.youtube.com/embed/MIYQR-Ybrn4",
      },
      {
        id: "js-project-quiz",
        title: "Quiz Application",
        difficulty: "Intermediate",
        duration: "2 hours",
        description:
          "Create an interactive quiz application with questions, answers, and scoring.",
        concepts: [
          "Arrays",
          "Objects",
          "Functions",
          "Events",
          "Score system",
        ],
        code: `const questions = [
    {
        question: "What language runs in a browser?",
        answer: "JavaScript"
    }
];

let score = 0;

if (questions[0].answer === "JavaScript") {
    score++;
}

console.log("Score:", score);`,
        video: "https://www.youtube.com/embed/f4fB9Xg2n5A",
      },
    ],
  },
];

function Javscript() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [completed, setCompleted] = useState([]);

  const handleComplete = (topicId) => {
    if (!completed.includes(topicId)) {
      setCompleted([...completed, topicId]);
    }
  };

  const totalTopics = roadmapData.reduce(
    (total, stage) => total + stage.topics.length,
    0
  );

  const progress = Math.round(
    (completed.length / totalTopics) * 100
  );

  return (
    <div className="javascript-page">

      {/* HEADER */}
      <header className="javascript-header">
        <div className="js-header-content">
          <span className="js-terminal">
            {"< / >"}
          </span>

          <p className="js-label">
            PROJECTBUILDERS<span>PH</span> / ROADMAP
          </p>

          <h1>
            Java<span>Script</span> Roadmap
          </h1>

          <p className="js-description">
            Master JavaScript from the fundamentals to building
            real-world applications.
          </p>

          <div className="js-progress-wrapper">
            <div className="js-progress-info">
              <span>YOUR PROGRESS</span>
              <strong>{progress}%</strong>
            </div>

            <div className="js-progress-bar">
              <div
                className="js-progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* ROADMAP */}
      <main className="javascript-container">

        <div className="roadmap-intro">
          <div>
            <p className="section-tag">// JAVASCRIPT_LEARNING_PATH</p>
            <h2>JavaScript Roadmap</h2>
          </div>

          <div className="topic-count">
            {completed.length} / {totalTopics} Completed
          </div>
        </div>

        {roadmapData.map((stage, stageIndex) => (
          <section
            className="roadmap-stage"
            key={stage.id}
          >

            <div className="stage-header">

              <div className="stage-number">
                0{stageIndex + 1}
              </div>

              <div>
                <span className="stage-level">
                  {stage.level}
                </span>

                <h3>{stage.title}</h3>

                <p>{stage.subtitle}</p>
              </div>

            </div>

            <div className="topics-grid">

              {stage.topics.map((topic, index) => {

                const isCompleted =
                  completed.includes(topic.id);

                return (
                  <article
                    className={`topic-card ${
                      isCompleted ? "completed" : ""
                    }`}
                    key={topic.id}
                    onClick={() =>
                      setSelectedTopic(topic)
                    }
                  >

                    <div className="topic-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="topic-card-content">

                      <div className="topic-top">

                        <span
                          className={`difficulty ${topic.difficulty
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {topic.difficulty}
                        </span>

                        <span className="duration">
                          {topic.duration}
                        </span>

                      </div>

                      <h4>{topic.title}</h4>

                      <p>{topic.description}</p>

                      <div className="topic-footer">

                        <span>
                          {topic.concepts.length} Concepts
                        </span>

                        <span className="open-topic">
                          {isCompleted
                            ? "✓ Completed"
                            : "View Lesson →"}
                        </span>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          </section>
        ))}

      </main>

      {/* LESSON MODAL */}
      {selectedTopic && (
        <div
          className="lesson-overlay"
          onClick={() => setSelectedTopic(null)}
        >

          <div
            className="lesson-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-lesson"
              onClick={() => setSelectedTopic(null)}
            >
              ×
            </button>

            <div className="lesson-heading">

              <span className="modal-tag">
                JAVASCRIPT LESSON
              </span>

              <h2>{selectedTopic.title}</h2>

              <div className="lesson-meta">
                <span>
                  {selectedTopic.difficulty}
                </span>

                <span>
                  {selectedTopic.duration}
                </span>
              </div>

            </div>

            <div className="lesson-body">

              <div className="lesson-description">
                <h3>// ABOUT_THIS_LESSON</h3>
                <p>
                  {selectedTopic.description}
                </p>
              </div>

              <div className="lesson-section">
                <h3>// WHAT_YOU_WILL_LEARN</h3>

                <div className="concept-list">
                  {selectedTopic.concepts.map(
                    (concept, index) => (
                      <div
                        className="concept-item"
                        key={index}
                      >
                        <span>✓</span>
                        {concept}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="lesson-section">
                <h3>// CODE_EXAMPLE</h3>

                <div className="code-window">

                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span>javascript.js</span>
                  </div>

                  <pre>
                    <code>
                      {selectedTopic.code}
                    </code>
                  </pre>

                </div>
              </div>

              <div className="lesson-section">
                <h3>// VIDEO_LESSON</h3>

                <div className="video-container">
                  <iframe
                    src={selectedTopic.video}
                    title={selectedTopic.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <button
                className={`complete-button ${
                  completed.includes(selectedTopic.id)
                    ? "already-completed"
                    : ""
                }`}
                onClick={() =>
                  handleComplete(selectedTopic.id)
                }
              >
                {completed.includes(selectedTopic.id)
                  ? "✓ LESSON COMPLETED"
                  : "MARK AS COMPLETED"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Javscript;