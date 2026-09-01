import React, { useEffect, useState } from "react";
import "./RoadmapPython.css";

const roadmapData = [
  {
    id: 1,
    level: "FUNDAMENTALS",
    title: "Python Foundations",
    subtitle: "Start Here",
    color: "blue",

    topics: [
      {
        id: "intro",
        title: "Introduction to Python",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn what Python is, where it is used, how it works, and how to create your first Python program.",

        concepts: [
          {
            title: "What is Python?",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "History of Python",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Where Python is used",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Installing Python",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Your first Python program",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `print("Hello, Python!")

print("Welcome to ProjectBuildersPH")`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Learn how Python stores information using variables and different built-in data types.",

        concepts: [
          {
            title: "Variables",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Integers",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Floats",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Strings",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Booleans",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "None",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `name = "Alex"
age = 20
price = 99.99
student = True

print(name)
print(age)
print(price)
print(student)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn how Python communicates with users using input and output.",

        concepts: [
          {
            title: "print()",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "input()",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "User input",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Type conversion",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Formatted output",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("Hello", name)
print("You are", age, "years old")`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "operators",
        title: "Operators & Expressions",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Use operators to calculate values, compare information, and create logical expressions.",

        concepts: [
          {
            title: "Arithmetic operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Logical operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Membership operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `a = 10
b = 5

print(a + b)
print(a > b)
print(a == b)
print(a > 5 and b < 10)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Teach your Python programs how to make decisions using conditions.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "elif",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Multiple conditions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `score = 85

if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Passed")
else:
    print("Failed")`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Learn how Python loops repeat instructions and help automate repetitive tasks.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "range()",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Nested loops",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `for i in range(1, 6):
    print(i)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
    ],
  },

  {
    id: 2,
    level: "CORE PYTHON",
    title: "Core Python Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "lists",
        title: "Lists",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Store multiple values in one collection and learn how to access, modify, and process list data.",

        concepts: [
          {
            title: "Creating lists",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Adding values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Removing values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Traversing lists",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "List slicing",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `numbers = [10, 20, 30, 40, 50]

for number in numbers:
    print(number)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "tuples",
        title: "Tuples & Sets",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Understand immutable collections and unique-value collections in Python.",

        concepts: [
          {
            title: "Tuples",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Tuple unpacking",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Sets",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Unique values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Set operations",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `coordinates = (10, 20)

numbers = {1, 2, 3, 3, 4}

print(coordinates)
print(numbers)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "dictionaries",
        title: "Dictionaries",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Store information using key-value pairs and build fast lookup systems.",

        concepts: [
          {
            title: "Creating dictionaries",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Keys and values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Accessing values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Adding data",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Removing data",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Dictionary methods",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `student = {
    "name": "Alex",
    "age": 20,
    "grade": 95
}

print(student["name"])
print(student["grade"])`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "functions",
        title: "Functions",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Break programs into reusable blocks of code using Python functions.",

        concepts: [
          {
            title: "Defining functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Default arguments",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Keyword arguments",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Scope",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def add(a, b):
    return a + b

result = add(10, 20)

print(result)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "comprehensions",
        title: "List Comprehensions",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Write cleaner and more expressive Python code for creating collections.",

        concepts: [
          {
            title: "Basic comprehension",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Nested comprehensions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Dictionary comprehensions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `numbers = [1, 2, 3, 4, 5]

squares = [
    number ** 2
    for number in numbers
]

print(squares)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "modules",
        title: "Modules & Packages",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Organize Python programs into reusable files and packages.",

        concepts: [
          {
            title: "import",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Creating modules",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Python packages",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Built-in modules",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "pip",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import math

number = 25

print(math.sqrt(number))`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
    ],
  },

  {
    id: 3,
    level: "INTERMEDIATE",
    title: "Working With Data",
    subtitle: "Build More Powerful Programs",
    color: "orange",

    topics: [
      {
        id: "files",
        title: "File Handling",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Read, write, create, and manage files using Python.",

        concepts: [
          {
            title: "Opening files",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Reading files",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Writing files",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Appending data",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "with statement",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `with open("students.txt", "w") as file:
    file.write("Alex\\n")
    file.write("Maria\\n")

with open("students.txt", "r") as file:
    print(file.read())`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "exceptions",
        title: "Exception Handling",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Handle errors gracefully and prevent programs from crashing unexpectedly.",

        concepts: [
          {
            title: "try",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "except",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "finally",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Custom exceptions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `try:
    number = int(input("Enter a number: "))
    print(10 / number)

except ZeroDivisionError:
    print("Cannot divide by zero")

except ValueError:
    print("Invalid number")`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "oop",
        title: "Object-Oriented Programming",
        difficulty: "Intermediate",
        duration: "45 min",

        description:
          "Learn how to build real-world systems using classes and objects.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "__init__",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Inheritance",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Encapsulation",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("Hi, I'm", self.name)


student = Student("Alex", 20)

student.introduce()`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "iterators-generators",
        title: "Iterators & Generators",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Understand lazy evaluation and how Python processes data efficiently.",

        concepts: [
          {
            title: "Iterators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "iter()",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "next()",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Generators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "yield",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def numbers():
    for number in range(5):
        yield number

for number in numbers():
    print(number)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "decorators",
        title: "Decorators",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Learn how decorators modify or extend the behavior of Python functions.",

        concepts: [
          {
            title: "Functions as objects",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Wrapper functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "@decorator",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Practical decorators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def logger(function):

    def wrapper():
        print("Function started")
        function()
        print("Function finished")

    return wrapper


@logger
def hello():
    print("Hello Python")


hello()`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
    ],
  },

  {
    id: 4,
    level: "ADVANCED PYTHON",
    title: "Python Developer Skills",
    subtitle: "Think Like a Python Developer",
    color: "purple",

    topics: [
      {
        id: "os",
        title: "OS & File Automation",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Use Python to interact with the operating system and automate repetitive tasks.",

        concepts: [
          {
            title: "os module",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "File paths",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Creating folders",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Listing files",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "shutil",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import os

files = os.listdir(".")

for file in files:
    print(file)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "json",
        title: "JSON & APIs",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Learn how Python communicates with APIs and works with JSON data.",

        concepts: [
          {
            title: "JSON",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "json module",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "API concepts",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "HTTP requests",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "requests library",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import requests

response = requests.get(
    "https://api.github.com"
)

data = response.json()

print(data)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "databases",
        title: "Python & Databases",
        difficulty: "Advanced",
        duration: "45 min",

        description:
          "Connect Python applications to databases and perform basic database operations.",

        concepts: [
          {
            title: "Database basics",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "SQLite",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Connecting to a database",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "SQL queries",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "CRUD operations",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import sqlite3

connection = sqlite3.connect(
    "students.db"
)

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    name TEXT,
    grade INTEGER
)
""")

connection.commit()
connection.close()`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "testing",
        title: "Testing & Debugging",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Learn how to test Python programs, find bugs, and improve code quality.",

        concepts: [
          {
            title: "Debugging",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Assertions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Unit testing",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "pytest",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "virtual-environments",
        title: "Virtual Environments",
        difficulty: "Advanced",
        duration: "25 min",

        description:
          "Learn how to isolate Python project dependencies and manage packages professionally.",

        concepts: [
          {
            title: "pip",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "venv",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "requirements.txt",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Project dependencies",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `python -m venv .venv

# Windows
.venv\\Scripts\\activate

pip install requests`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "clean-code",
        title: "Clean Python Code",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Learn practical techniques for writing readable, maintainable, and professional Python code.",

        concepts: [
          {
            title: "Naming",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Comments",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "PEP 8",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Code organization",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def calculate_average(numbers):

    if not numbers:
        return 0

    return sum(numbers) / len(numbers)


scores = [90, 85, 95]

print(calculate_average(scores))`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
    ],
  },

  {
    id: 5,
    level: "PROJECTS",
    title: "Build With Python",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "calculator",
        title: "Python Calculator",
        difficulty: "Beginner",
        duration: "45 min",

        description:
          "Build a calculator using variables, operators, conditions, functions, and user input.",

        concepts: [
          {
            title: "User input",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Operators",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `def calculate(a, b, operator):

    if operator == "+":
        return a + b

    elif operator == "-":
        return a - b

    elif operator == "*":
        return a * b

    elif operator == "/":
        return a / b

    return "Invalid operator"


print(calculate(10, 5, "+"))`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "file-organizer",
        title: "File Organizer",
        difficulty: "Beginner",
        duration: "1 hr",

        description:
          "Build an automation tool that automatically organizes files into folders based on their extensions.",

        concepts: [
          {
            title: "os",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "shutil",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "File extensions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Loops",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import os
import shutil

folder = "Downloads"

for file in os.listdir(folder):

    if file.endswith(".jpg"):
        shutil.move(
            f"{folder}/{file}",
            f"{folder}/Images/{file}"
        )`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "expense-tracker",
        title: "Expense Tracker",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Build a practical expense tracker using lists, dictionaries, functions, file handling, and calculations.",

        concepts: [
          {
            title: "Lists",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Dictionaries",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Calculations",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `expenses = []

def add_expense(name, amount):

    expenses.append({
        "name": name,
        "amount": amount
    })


add_expense("Food", 150)
add_expense("Transport", 50)

print(expenses)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "student-management",
        title: "Student Management System",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Build a complete student management application using Python collections, functions, files, and OOP.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Lists",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `class Student:

    def __init__(self, name, grade):
        self.name = name
        self.grade = grade


students = []

students.append(
    Student("Alex", 95)
)

for student in students:
    print(student.name, student.grade)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "api-project",
        title: "API Data Application",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Build an application that retrieves real-world data from an API and processes the returned information.",

        concepts: [
          {
            title: "HTTP requests",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "JSON",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "APIs",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Error handling",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Data processing",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import requests

url = "https://api.github.com"

response = requests.get(url)

if response.status_code == 200:

    data = response.json()

    print(data)`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },

      {
        id: "automation",
        title: "Python Automation Project",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Combine Python automation techniques to build a useful tool that performs repetitive tasks automatically.",

        concepts: [
          {
            title: "OS automation",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Error handling",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
          {
            title: "Project structure",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
          },
        ],

        code: `import os
import shutil

source = "Downloads"
destination = "Documents"

for file in os.listdir(source):

    if file.endswith(".pdf"):

        shutil.move(
            os.path.join(source, file),
            os.path.join(destination, file)
        )`,

        video: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
    ],
  },
];

function RoadmapPython() {
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
    if (selectedTopic) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    <div className="python-roadmap-page">

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="python-logo">
            🐍
          </div>

          <div className="header-title">

            <h1>
              Python Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Advanced Python
            </p>

          </div>

        </div>

        <div className="header-badge">

          <span className="header-badge-icon">
            🚀
          </span>

          <div>

            <strong>
              LEARN PYTHON
            </strong>

            <small>
              Build • Automate • Create
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
                YOUR PYTHON JOURNEY
              </span>

              <h2>
                Master Python step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to automation, APIs,
                OOP, and real-world Python projects.
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

                        {stage.id === 1 && "⌘"}
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
                PYTHON LEARNING MODULE
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
                    PYTHON
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

export default RoadmapPython;