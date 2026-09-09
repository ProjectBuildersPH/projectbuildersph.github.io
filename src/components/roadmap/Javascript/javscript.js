
import React, { useEffect, useState } from "react";
import "./javscript.css";

const roadmapData = [
  {
    id: 1,
    level: "BEGINNER",
    title: "JavaScript Fundamentals",
    subtitle: "Learn the Building Blocks",
    color: "blue",

    topics: [
      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",
        description:
          "Learn how JavaScript stores information using variables and different data types.",

        concepts: [
          {
            title: "let",
            video: "https://www.youtube.com/embed/pE_9ROLmgts",
          },
          {
            title: "const",
            video: "https://www.youtube.com/embed/Cdb6x9UTiAo",
          },
          {
            title: "var",
            video: "https://www.youtube.com/embed/1CP6tqDzidQ",
          },
          {
            title: "String",
            video: "https://www.youtube.com/embed/pom4gcG_f4Q",
          },
          {
            title: "Number",
            video: "https://www.youtube.com/embed/SqgR9WQSwUA",
          },
          {
            title: "Boolean",
            video: "https://www.youtube.com/embed/tZL0AB21cSA",
          },
          {
            title: "Undefined",
            video: "https://www.youtube.com/embed/ScKwHA-aiog",
          },
          {
            title: "Null",
            video: "https://www.youtube.com/embed/SplpsvZff30",
          },
          {
            title: "Arrays",
            video: "https://www.youtube.com/embed/_bIF8A3fcVc",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/We1559yOLb0",
          },
        ],

        code: `let age = 20;
const price = 99.99;
let grade = "A";
let student = true;
let name = "Alex";

console.log(name);
console.log(age);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Learn how JavaScript displays information and receives input from users.",

        concepts: [
          {
            title: "Input and Output",
            video: "https://www.youtube.com/embed/RMzPlRF-vkg",
          },
        ],

        code: `const name = prompt("Enter your name:");

console.log(\`Hello \${name}!\`);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "operators",
        title: "Operators & Expressions",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Use JavaScript operators to calculate values, compare information, and create logical expressions.",

        concepts: [
          {
            title: "Arithmetic operators",
            video: "https://www.youtube.com/embed/LcUAvfHZUTE",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/ydWaos69dBc",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/Aj5fjeeQ40Y",
          },
          {
            title: "Logical AND",
            video: "https://www.youtube.com/embed/qAgyDKP9BbE",
          },
          {
            title: "Logical OR",
            video: "https://www.youtube.com/embed/5M7uQo8Fb6E",
          },
          {
            title: "Logical NOT",
            video: "https://www.youtube.com/embed/kNDQLNoLSK4",
          },
          {
            title: "Increment & decrement",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `let a = 10;
let b = 5;

console.log(a + b);
console.log(a > b);
console.log(a > 5 && b < 10);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Teach your JavaScript programs how to make decisions using if, else, switch, and ternary operators.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "else if",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "switch",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Ternary operator",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Passed");
} else {
  console.log("Failed");
}`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Learn how loops allow JavaScript programs to repeat instructions efficiently.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "do while",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Nested loops",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },
    ],
  },

  {
    id: 2,
    level: "INTERMEDIATE",
    title: "Core JavaScript Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "arrays",
        title: "Arrays & Array Methods",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Store multiple values and process them using powerful JavaScript array methods.",

        concepts: [
          {
            title: "Creating arrays",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "push & pop",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "map",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "filter",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "reduce",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(number => number * 2);

console.log(doubled);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "objects",
        title: "Objects",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Learn how JavaScript objects store related data and behavior using properties and methods.",

        concepts: [
          {
            title: "Creating objects",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Properties",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Object destructuring",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Object spread",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const student = {
  name: "Alex",
  age: 20,
  course: "JavaScript",

  introduce() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
};

student.introduce();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "functions",
        title: "Functions",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Create reusable blocks of code using regular functions, arrow functions, parameters, and return values.",

        concepts: [
          {
            title: "Function declaration",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Arrow functions",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Default parameters",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Scope",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "destructuring",
        title: "Destructuring & Spread",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Work with arrays and objects more efficiently using destructuring, spread, and rest syntax.",

        concepts: [
          {
            title: "Array destructuring",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Object destructuring",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Spread operator",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Rest parameters",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const user = {
  name: "Alex",
  age: 20
};

const { name, age } = user;

console.log(name);
console.log(age);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "modules",
        title: "JavaScript Modules",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Organize JavaScript applications into reusable files using export and import.",

        concepts: [
          {
            title: "export",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "import",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Named exports",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Default exports",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(10, 20));`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },
    ],
  },

  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced JavaScript",
    subtitle: "Think Like a JavaScript Developer",
    color: "orange",

    topics: [
      {
        id: "dom",
        title: "DOM Manipulation",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Learn how JavaScript interacts with HTML elements and dynamically changes web pages.",

        concepts: [
          {
            title: "querySelector",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "getElementById",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Changing content",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Changing styles",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Creating elements",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const title = document.querySelector("#title");

title.textContent = "Hello JavaScript";
title.style.color = "yellow";`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "events",
        title: "Events",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Make web pages interactive by responding to clicks, keyboard input, forms, and other browser events.",

        concepts: [
          {
            title: "click events",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "input events",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "submit events",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Keyboard events",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Event listeners",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const button = document.querySelector("#button");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "async",
        title: "Asynchronous JavaScript",
        difficulty: "Advanced",
        duration: "45 min",

        description:
          "Understand asynchronous programming using callbacks, promises, async functions, and await.",

        concepts: [
          {
            title: "Callbacks",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Promises",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "async",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "await",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Error handling",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `async function getData() {
  try {
    const response = await fetch(
      "https://api.example.com/users"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "fetch",
        title: "Fetch API",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Communicate with web APIs and retrieve or send data using the JavaScript Fetch API.",

        concepts: [
          {
            title: "fetch",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "GET requests",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "POST requests",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "JSON",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "API errors",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "error-handling",
        title: "Error Handling",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Handle JavaScript errors safely using try, catch, finally, and custom errors.",

        concepts: [
          {
            title: "try",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "catch",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "finally",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "throw",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `try {
  const result = 10 / 0;

  if (!Number.isFinite(result)) {
    throw new Error("Invalid calculation");
  }
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Finished");
}`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },
    ],
  },

  {
    id: 4,
    level: "OBJECT-ORIENTED PROGRAMMING",
    title: "JavaScript OOP",
    subtitle: "Build Real-World Systems",
    color: "purple",

    topics: [
      {
        id: "classes",
        title: "Classes & Objects",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Learn how JavaScript classes and objects can be used to model real-world entities.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Properties",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
}

const student = new Student("Alex", 20);

student.introduce();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "constructors",
        title: "Constructors",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Use constructors to initialize JavaScript class objects when they are created.",

        concepts: [
          {
            title: "constructor",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "this keyword",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Instance properties",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `class Student {
  constructor(name) {
    this.name = name;
  }
}

const student = new Student("Alex");

console.log(student.name);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "inheritance",
        title: "Inheritance",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Create specialized classes from existing classes using JavaScript class inheritance.",

        concepts: [
          {
            title: "extends",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "super",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Method overriding",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();

dog.eat();
dog.bark();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "encapsulation",
        title: "Encapsulation",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Protect and control access to object data using private fields and class methods.",

        concepts: [
          {
            title: "Private fields",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Getters",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Setters",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "polymorphism",
        title: "Polymorphism",
        difficulty: "Advanced OOP",
        duration: "40 min",

        description:
          "Understand how different JavaScript objects can implement the same method in different ways.",

        concepts: [
          {
            title: "Method overriding",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Dynamic behavior",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Interfaces by convention",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof!");
  }
}

const animal = new Dog();

animal.sound();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },
    ],
  },

  {
    id: 5,
    level: "PROJECTS",
    title: "Build With JavaScript",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "number-game",
        title: "Number Guessing Game",
        difficulty: "Beginner",
        duration: "45 min",

        description:
          "Build a simple browser game using variables, conditions, loops, functions, and user input.",

        concepts: [
          {
            title: "User input",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Random numbers",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Game logic",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const secretNumber =
  Math.floor(Math.random() * 10) + 1;

const guess = Number(
  prompt("Guess a number from 1 to 10:")
);

if (guess === secretNumber) {
  console.log("Correct!");
} else {
  console.log(
    \`Wrong! The number was \${secretNumber}\`
  );
}`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "todo-app",
        title: "Todo List Application",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Build a complete todo application using arrays, DOM manipulation, events, and local storage.",

        concepts: [
          {
            title: "DOM manipulation",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Events",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Arrays",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Local Storage",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const todos = [];

function addTodo(title) {
  todos.push({
    id: Date.now(),
    title,
    completed: false
  });
}

addTodo("Learn JavaScript");

console.log(todos);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "weather-app",
        title: "Weather Application",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Build a weather application that retrieves information from an API and displays it dynamically.",

        concepts: [
          {
            title: "Fetch API",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Async/Await",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "JSON",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "DOM updates",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `async function getWeather(city) {
  const response = await fetch(
    \`https://api.example.com/weather?city=\${city}\`
  );

  const data = await response.json();

  console.log(data);
}

getWeather("Manila");`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "quiz-app",
        title: "Quiz Application",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Build an interactive quiz application using objects, arrays, DOM manipulation, events, and application state.",

        concepts: [
          {
            title: "Questions array",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Score tracking",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "DOM manipulation",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Event handling",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `const questions = [
  {
    question: "Which keyword creates a constant?",
    answer: "const"
  },
  {
    question: "Which method adds an item to an array?",
    answer: "push"
  }
];

let score = 0;

console.log(questions);`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },

      {
        id: "dashboard",
        title: "JavaScript Dashboard",
        difficulty: "Advanced",
        duration: "4 hrs",

        description:
          "Create a complete dashboard using APIs, asynchronous JavaScript, reusable functions, DOM manipulation, and modern JavaScript features.",

        concepts: [
          {
            title: "API integration",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Async/Await",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Reusable components",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "Application state",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
          {
            title: "DOM architecture",
            video: "https://www.youtube.com/embed/9WIJQDcv43A",
          },
        ],

        code: `async function loadDashboard() {
  try {
    const response = await fetch(
      "https://api.example.com/dashboard"
    );

    const data = await response.json();

    renderDashboard(data);
  } catch (error) {
    console.error(error);
  }
}

function renderDashboard(data) {
  console.log(data);
}

loadDashboard();`,

        video: "https://www.youtube.com/embed/9WIJQDcv43A",
      },
    ],
  },
];

function Javscript() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState(null);

  const openTopic = (topic) => {
    setSelectedTopic(topic);
    setVideoVisible(false);
    setSelectedConcept(null);
  };

  const closePanel = () => {
    setSelectedTopic(null);
    setVideoVisible(false);
    setSelectedConcept(null);
  };

  const openConceptVideo = (concept) => {
    setSelectedConcept(concept);
  };

  const closeConceptVideo = () => {
    setSelectedConcept(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedTopic ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTopic]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedTopic) {
        closePanel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTopic]);

  return (
    <div className="java-roadmap-page">

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="java-logo">
            JS
          </div>

          <div className="header-title">
            <h1>
              JavaScript Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Advanced JavaScript & OOP
            </p>
          </div>

        </div>

        <div className="header-badge">

          <span className="header-badge-icon">
            JS
          </span>

          <div>
            <strong>
              LEARN JAVASCRIPT
            </strong>

            <small>
              Learn • Build • Create
            </small>
          </div>

        </div>

      </header>

      <div className="roadmap-layout">

        <main
          className={`roadmap-content ${
            selectedTopic ? "panel-open" : ""
          }`}
        >

          <section className="hero-section">

            <div className="hero-copy">

              <span className="eyebrow">
                YOUR JAVASCRIPT JOURNEY
              </span>

              <h2>
                Master JavaScript step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to advanced JavaScript,
                OOP, APIs, and real-world projects.
              </p>

            </div>

            <div className="journey-stat">
              <strong>
                5
              </strong>

              <span>
                Learning Stages
              </span>
            </div>

          </section>

          <div className="roadmap">

            <div className="road-line" />

            {roadmapData.map((stage) => (

              <section
                key={stage.id}
                className={`roadmap-stage ${stage.color}`}
              >

                <div className="stage-marker">
                  <span>
                    {stage.id}
                  </span>
                </div>

                <div className="stage-heading">

                  <span className="stage-level">
                    {stage.level}
                  </span>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.subtitle}
                  </p>

                </div>

                <div className="topic-grid">

                  {stage.topics.map((topic) => (

                    <button
                      type="button"
                      className="topic-card"
                      key={topic.id}
                      onClick={() => openTopic(topic)}
                    >

                      <div className="topic-icon">

                        {stage.id === 1 && "JS"}
                        {stage.id === 2 && "▣"}
                        {stage.id === 3 && "⚡"}
                        {stage.id === 4 && "◆"}
                        {stage.id === 5 && "🚀"}

                      </div>

                      <div className="topic-card-content">

                        <span>
                          {topic.difficulty}
                        </span>

                        <h4>
                          {topic.title}
                        </h4>

                        <p>
                          {topic.description}
                        </p>

                      </div>

                      <div className="topic-arrow">
                        →
                      </div>

                    </button>

                  ))}

                </div>

              </section>

            ))}

          </div>

        </main>

        {selectedTopic && (
          <div
            className="panel-overlay"
            onClick={closePanel}
            aria-hidden="true"
          />
        )}

        {selectedTopic && (

          <aside
            className="topic-panel"
            aria-label="Lesson details"
          >

            <div className="panel-top">

              <button
                type="button"
                className="close-panel"
                onClick={closePanel}
                aria-label="Close lesson"
              >
                ×
              </button>

              <span className="panel-label">
                JAVASCRIPT LEARNING MODULE
              </span>

              <h2>
                {selectedTopic.title}
              </h2>

              <div className="topic-meta">

                <span>
                  📘 {selectedTopic.difficulty}
                </span>

                <span>
                  ⏱ {selectedTopic.duration}
                </span>

              </div>

            </div>

            <div className="panel-body">

              <section className="explanation">

                <h3>
                  What is this?
                </h3>

                <p>
                  {selectedTopic.description}
                </p>

              </section>

              <section className="concept-section">

                <h3>
                  What you'll learn
                </h3>

                <div className="concept-list">

                  {selectedTopic.concepts.map(
                    (concept, index) => (

                      <button
                        type="button"
                        className={`concept-item ${
                          selectedConcept?.title === concept.title
                            ? "selected"
                            : ""
                        }`}
                        key={`${selectedTopic.id}-${concept.title}`}
                        onClick={() =>
                          openConceptVideo(concept)
                        }
                      >

                        <span>
                          {index + 1}
                        </span>

                        <p>
                          {concept.title}
                        </p>

                        <strong className="concept-play">
                          ▶
                        </strong>

                      </button>

                    )
                  )}

                </div>

                {selectedConcept?.video && (

                  <div className="concept-video">

                    <div className="concept-video-header">

                      <div>

                        <span>
                          MINI LESSON
                        </span>

                        <h4>
                          {selectedConcept.title}
                        </h4>

                      </div>

                      <button
                        type="button"
                        onClick={closeConceptVideo}
                        aria-label="Close concept video"
                      >
                        ×
                      </button>

                    </div>

                    <div className="concept-video-player">

                      <iframe
                        src={selectedConcept.video}
                        title={`${selectedConcept.title} lesson`}
                        allow="
                          accelerometer;
                          autoplay;
                          clipboard-write;
                          encrypted-media;
                          gyroscope;
                          picture-in-picture
                        "
                        allowFullScreen
                      />

                    </div>

                  </div>

                )}

              </section>

              <section className="code-section">

                <div className="section-title">

                  <h3>
                    Example
                  </h3>

                  <span>
                    JAVASCRIPT
                  </span>

                </div>

                <pre>
                  <code>
                    {selectedTopic.code}
                  </code>
                </pre>

              </section>

              <section className="video-section">

                <button
                  type="button"
                  className={`video-button ${
                    videoVisible ? "active" : ""
                  }`}
                  onClick={() =>
                    setVideoVisible(
                      (previous) => !previous
                    )
                  }
                >

                  <span className="play-icon">
                    {videoVisible ? "−" : "▶"}
                  </span>

                  <span>
                    {videoVisible
                      ? "Hide Lesson Video"
                      : "Watch Lesson Video"}
                  </span>

                </button>

                {videoVisible && selectedTopic.video && (

                  <div className="video-container">

                    <iframe
                      src={selectedTopic.video}
                      title={`${selectedTopic.title} lesson video`}
                      allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture
                      "
                      allowFullScreen
                    />

                  </div>

                )}

              </section>

              <button
                type="button"
                className="complete-button"
              >
                ✓ Mark as Completed
              </button>

            </div>

          </aside>

        )}

      </div>

    </div>
  );
}

export default Javscript;

