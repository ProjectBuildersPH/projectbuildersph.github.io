
import React, { useEffect, useState } from "react";
import "./RoadmapCpp.css";

const roadmapData = [
  {
    id: 1,
    level: "FUNDAMENTALS",
    title: "C++ Foundations",
    subtitle: "Start Here",
    color: "blue",

    topics: [
      {
        id: "intro",
        title: "Introduction to C++",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn what C++ is, where it is used, how it works, and how your first C++ program is created and executed.",

        concepts: [
          {
            title: "How to Set up C++",
            video: "https://www.youtube.com/embed/3WwWdWqWkVY",
          },
          {
            title: "Structure",
            video: "https://www.youtube.com/embed/ocHu-te1qco",
          },
          {
            title: "Basic Info",
            video: "https://www.youtube.com/embed/D_SRVlrgBw8",
          },
          {
            title: "Default Value",
            video: "https://www.youtube.com/embed/v7JLc8_p6UQ",
          },
          {
            title: "Basic Output cout and endl",
            video: "https://www.youtube.com/embed/v7JLc8_p6UQ",
          },
        ],

        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!";
    return 0;
}`,

        video: "https://www.youtube.com/embed/vLnPwxZdW4Y",
      },

      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Understand how programs store information using variables and different data types.",

        concepts: [
          {
            title: "Variables",
            video: "https://www.youtube.com/embed/teNCytgJngw",
          },
          {
            title: "int",
            video: "https://www.youtube.com/embed/ljBnZqb1Rck",
          },
          {
            title: "double",
            video: "https://www.youtube.com/embed/YGy2pfjq69g",
          },
          {
            title: "char",
            video: "https://www.youtube.com/embed/EnVlJm0OF0I",
          },
          {
            title: "bool",
            video: "https://www.youtube.com/embed/6sRopgvGZ3Y",
          },
          {
            title: "string",
            video: "https://www.youtube.com/embed/EnVlJm0OF0I",
          },
          {
            title: "Constants",
            video: "https://www.youtube.com/embed/cTaQZG_ja98",
          },
        ],

        code: `int age = 20;
double price = 99.99;
char grade = 'A';
bool student = true;
string name = "Alex";`,

        video: "https://www.youtube.com/embed/2NWeucMKrLI",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn how your program communicates with users using input and output.",

        concepts: [
          {
            title: "cout",
            video: "https://www.youtube.com/embed/ppSVak8prvk",
          },
          {
            title: "cin",
            video: "https://www.youtube.com/embed/hCqRaLgOApM",
          },
          {
            title: "GetLine",
            video: "https://www.youtube.com/embed/yf3-yd37k6A",
          },

          {
            title: "Output formatting",
            video: "https://www.youtube.com/embed/79CEeB5izz0",
          },
        ],

        code: `string name;
int age;

cout << "Enter your name: ";
cin >> name;

cout << "Enter your age: ";
cin >> age;

cout << "Hello " << name;`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
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
            video: "https://www.youtube.com/embed/JllfsLJzUvc",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/KCx7JW8j1Ag",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/7j9OuthtAHA",
          },
          {
            title: "Logical operators AND (&&)",
            video: "https://www.youtube.com/embed/GRTUBdiwB-Q",
          },
          {
            title: "Logical operators OR (||)",
            video: "https://www.youtube.com/embed/TnlqNM_Js2I",
          },
                    {
            title: "Logical operators NOT (!)",
            video: "https://www.youtube.com/embed/UHN-iw2IkGY",
          },
          {
            title: "Increment and decrement",
            video: "https://www.youtube.com/embed/jW7DLmtBzss",
          },
        ],

        code: `int a = 10;
int b = 5;

cout << a + b << endl;
cout << (a > b) << endl;
cout << (a > 5 && b < 10);`,

        video: "https://www.youtube.com/embed/_bYFu9mBnr4",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Teach your program how to make decisions based on different conditions.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/8RWnBlu2-BE",
          },
          {
            title: "if , else",
            video: "https://www.youtube.com/embed/jimASne606E",
          },
          {
            title: "else if",
            video: "https://www.youtube.com/embed/Ew_VsbHBdVs",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/qA2UHTU2B_Y",
          },
          {
            title: "switch",
            video: "https://www.youtube.com/embed/BVOXkd80nnA",
          },
          {
            title: "Ternary operator",
            video: "https://www.youtube.com/embed/Eg-fL_Pfie8",
          },
        ],

        code: `int score = 85;

if (score >= 90) {
    cout << "Excellent";
}
else if (score >= 75) {
    cout << "Passed";
}
else {
    cout << "Failed";
}`,

        video: "https://www.youtube.com/embed/9Ck1u1Y0qZQ",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Learn how loops allow programs to repeat instructions efficiently.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/ru0H9lMqU8U",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/Pp4GSerrhGI",
          },
          {
            title: "do while",
            video: "https://www.youtube.com/embed/0s86Tb0OcR8",
          },
          {
            title: "Nested Do While loops",
            video: "https://www.youtube.com/embed/2ThmTArFSBs",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/Mygjqm7ZDb4",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/KYrTaRRe-ow",
          },
        ],

        code: `for (int i = 1; i <= 5; i++) {
    cout << i << endl;
}`,

        video: "https://www.youtube.com/embed/Gl2P2xKk2gE",
      },
    ],
  },

  {
    id: 2,
    level: "INTERMEDIATE",
    title: "Core C++ Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "arrays",
        title: "Arrays",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Store multiple values under one variable and learn how to access and process them.",

        concepts: [
          {
            title: "Creating arrays",
            video: "https://www.youtube.com/embed/0UzIcBs-UH4",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/D6Gt6j54IX4",
          },
          {
            title: "Traversing",
            video: "https://www.youtube.com/embed/4vlGJmLRves",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/TRHu-_K579w",
          },
          {
            title: "Updating values",
            video: "https://www.youtube.com/embed/m-aHPgZYTQo",
          },
          {
            title: "Multidimensional arrays",
            video: "https://www.youtube.com/embed/fmuQXQUTMEQ",
          },
        ],

        code: `int numbers[5] = {
    10, 20, 30, 40, 50
};

for (int i = 0; i < 5; i++) {
    cout << numbers[i] << endl;
}`,

        video: "https://www.youtube.com/embed/2D0bSp2bK2Q",
      },

      {
        id: "strings",
        title: "Strings",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Work with text and learn common operations for manipulating strings.",

        concepts: [
          {
            title: "Length",
            video: "https://www.youtube.com/embed/tZtSsdoqrjg",
          },
          {
            title: "Concatenation",
            video: "https://www.youtube.com/embed/tavL4uYPlJc",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/Aw_tl8Bwh7Y",
          },
          {
            title: "Substrings",
            video: "https://www.youtube.com/embed/hj-W-6ETM9s",
          },
          {
            title: "Comparison",
            video: "https://www.youtube.com/embed/S6fz9zRJNoo",
          },
        ],

        code: `string first = "Hello";
string second = "World";

string message =
    first + " " + second;

cout << message;`,

        video: "https://www.youtube.com/embed/3C9E2yZ9d6Q",
      },

      {
        id: "functions",
        title: "Functions",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Break large programs into smaller reusable blocks of code.",

        concepts: [
          {
            title: "Function declaration",
            video: "https://www.youtube.com/embed/9V2VnqB9m8E",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/9V2VnqB9m8E",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/9V2VnqB9m8E",
          },
          {
            title: "void",
            video: "https://www.youtube.com/embed/oEd_XxAgFO8",
          },
          {
            title: "Function overloading",
            video: "https://www.youtube.com/embed/9V2VnqB9m8E",
          },
          {
            title: "Scope",
            video: "https://www.youtube.com/embed/9V2VnqB9m8E",
          },
        ],

        code: `int add(int a, int b) {
    return a + b;
}

int result = add(10, 20);

cout << result;`,

        video: "https://www.youtube.com/embed/9V2VnqB9m8E",
      },

      {
        id: "references",
        title: "References",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Understand references and how functions can directly modify existing variables.",

        concepts: [
          {
            title: "Reference variables",
            video: "https://www.youtube.com/embed/IzoFn3dfsPA",
          },
          {
            title: "Pass by reference",
            video: "https://www.youtube.com/embed/IzoFn3dfsPA",
          },
        ],

        code: `void change(int &number) {
    number = 100;
}

int value = 10;

change(value);

cout << value;`,

        video: "https://www.youtube.com/embed/IzoFn3dfsPA",
      },

      {
        id: "pointers",
        title: "Pointers",
        difficulty: "Intermediate",
        duration: "40 min",

        description:
          "Understand memory addresses and how pointers allow you to work directly with memory.",

        concepts: [
          {
            title: "Memory addresses",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
          {
            title: "& operator",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
          {
            title: "* operator",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
          {
            title: "Pointer variables",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
          {
            title: "Dereferencing",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
          {
            title: "Pointer arithmetic",
            video: "https://www.youtube.com/embed/zuegQmMdy8M",
          },
        ],

        code: `int number = 42;

int* ptr = &number;

cout << number << endl;
cout << &number << endl;
cout << *ptr << endl;`,

        video: "https://www.youtube.com/embed/zuegQmMdy8M",
      },

      {
        id: "dynamic-memory",
        title: "Dynamic Memory",
        difficulty: "Intermediate",
        duration: "35 min",

        description:
          "Learn how C++ dynamically allocates and releases memory during program execution.",

        concepts: [
          {
            title: "Stack vs Heap",
            video: "https://www.youtube.com/embed/_8-ht2AKyH4",
          },
          {
            title: "new",
            video: "https://www.youtube.com/embed/_8-ht2AKyH4",
          },
          {
            title: "delete",
            video: "https://www.youtube.com/embed/_8-ht2AKyH4",
          },
          {
            title: "Dynamic arrays",
            video: "https://www.youtube.com/embed/_8-ht2AKyH4",
          },
          {
            title: "Memory leaks",
            video: "https://www.youtube.com/embed/_8-ht2AKyH4",
          },
        ],

        code: `int* number = new int;

*number = 50;

cout << *number;

delete number;`,

        video: "https://www.youtube.com/embed/_8-ht2AKyH4",
      },
    ],
  },

  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced C++",
    subtitle: "Think Like a C++ Developer",
    color: "orange",

    topics: [
      {
        id: "stl",
        title: "Standard Template Library",
        difficulty: "Advanced",
        duration: "45 min",

        description:
          "Use powerful C++ containers, iterators, and algorithms to build efficient programs.",

        concepts: [
          {
            title: "vector",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "map",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "set",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "queue",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "stack",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "Algorithms",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
          {
            title: "Iterators",
            video: "https://www.youtube.com/embed/RZU-zLF9lD4",
          },
        ],

        code: `#include <vector>
#include <algorithm>

vector<int> numbers = {
    5, 2, 8, 1
};

sort(
    numbers.begin(),
    numbers.end()
);`,

        video: "https://www.youtube.com/embed/RZU-zLF9lD4",
      },

      {
        id: "templates",
        title: "Templates",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Create reusable code that can work with multiple data types.",

        concepts: [
          {
            title: "Function templates",
            video: "https://www.youtube.com/embed/MLXlD7f9hKc",
          },
          {
            title: "Class templates",
            video: "https://www.youtube.com/embed/MLXlD7f9hKc",
          },
          {
            title: "Generic programming",
            video: "https://www.youtube.com/embed/MLXlD7f9hKc",
          },
          {
            title: "Type parameters",
            video: "https://www.youtube.com/embed/MLXlD7f9hKc",
          },
        ],

        code: `template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

cout << maximum(10, 20);`,

        video: "https://www.youtube.com/embed/MLXlD7f9hKc",
      },

      {
        id: "lambdas",
        title: "Lambda Expressions",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Create short anonymous functions and use them effectively with the STL.",

        concepts: [
          {
            title: "Lambda syntax",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Capture list",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "STL integration",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
        ],

        code: `vector<int> numbers = {
    1, 2, 3, 4
};

for_each(
    numbers.begin(),
    numbers.end(),
    [](int number) {
        cout << number << endl;
    }
);`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
      },

      {
        id: "smart-pointers",
        title: "Smart Pointers",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Manage dynamically allocated memory safely using modern C++ smart pointers.",

        concepts: [
          {
            title: "unique_ptr",
            video: "https://www.youtube.com/embed/UOB7-B2MfwA",
          },
          {
            title: "shared_ptr",
            video: "https://www.youtube.com/embed/UOB7-B2MfwA",
          },
          {
            title: "weak_ptr",
            video: "https://www.youtube.com/embed/UOB7-B2MfwA",
          },
          {
            title: "RAII",
            video: "https://www.youtube.com/embed/UOB7-B2MfwA",
          },
          {
            title: "Ownership",
            video: "https://www.youtube.com/embed/UOB7-B2MfwA",
          },
        ],

        code: `#include <memory>

unique_ptr<int> number =
    make_unique<int>(100);

cout << *number;`,

        video: "https://www.youtube.com/embed/UOB7-B2MfwA",
      },

      {
        id: "exceptions",
        title: "Exception Handling",
        difficulty: "Advanced",
        duration: "25 min",

        description:
          "Handle runtime errors gracefully using C++ exception handling.",

        concepts: [
          {
            title: "try",
            video: "https://www.youtube.com/embed/2H86m4J1M3Q",
          },
          {
            title: "catch",
            video: "https://www.youtube.com/embed/2H86m4J1M3Q",
          },
          {
            title: "throw",
            video: "https://www.youtube.com/embed/2H86m4J1M3Q",
          },
          {
            title: "Custom exceptions",
            video: "https://www.youtube.com/embed/2H86m4J1M3Q",
          },
          {
            title: "Error handling",
            video: "https://www.youtube.com/embed/2H86m4J1M3Q",
          },
        ],

        code: `try {
    throw runtime_error(
        "Something went wrong!"
    );
}
catch (const exception& error) {
    cout << error.what();
}`,

        video: "https://www.youtube.com/embed/2H86m4J1M3Q",
      },
    ],
  },

  {
    id: 4,
    level: "OBJECT-ORIENTED PROGRAMMING",
    title: "C++ OOP",
    subtitle: "Build Real-World Systems",
    color: "purple",

    topics: [
      {
        id: "classes",
        title: "Classes & Objects",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Learn how to model real-world entities using classes and objects.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/iVLQeWbgbXs",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/iVLQeWbgbXs",
          },
          {
            title: "Attributes",
            video: "https://www.youtube.com/embed/iVLQeWbgbXs",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/iVLQeWbgbXs",
          },
          {
            title: "Access modifiers",
            video: "https://www.youtube.com/embed/iVLQeWbgbXs",
          },
        ],

        code: `class Student {
public:
    string name;
    int age;

    void introduce() {
        cout << "Hi, I'm "
             << name;
    }
};

Student student;

student.name = "Alex";
student.age = 20;

student.introduce();`,

        video: "https://www.youtube.com/embed/iVLQeWbgbXs",
      },

      {
        id: "constructors",
        title: "Constructors & Destructors",
        difficulty: "OOP",
        duration: "35 min",

        description:
          "Learn how objects are initialized and cleaned up automatically.",

        concepts: [
          {
            title: "Constructors",
            video: "https://www.youtube.com/embed/7K2K5b6jL2c",
          },
          {
            title: "Default constructor",
            video: "https://www.youtube.com/embed/7K2K5b6jL2c",
          },
          {
            title: "Parameterized constructor",
            video: "https://www.youtube.com/embed/7K2K5b6jL2c",
          },
          {
            title: "Destructor",
            video: "https://www.youtube.com/embed/7K2K5b6jL2c",
          },
          {
            title: "this pointer",
            video: "https://www.youtube.com/embed/7K2K5b6jL2c",
          },
        ],

        code: `class Student {
public:
    string name;

    Student(string studentName) {
        name = studentName;
    }

    ~Student() {
        cout << "Object destroyed";
    }
};`,

        video: "https://www.youtube.com/embed/7K2K5b6jL2c",
      },

      {
        id: "encapsulation",
        title: "Encapsulation",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Protect internal data and control how objects expose their information.",

        concepts: [
          {
            title: "private",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "public",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Getters",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Setters",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Data protection",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
        ],

        code: `class BankAccount {

private:
    double balance;

public:
    void deposit(double amount) {
        balance += amount;
    }

    double getBalance() {
        return balance;
    }
};`,

        video: "https://www.youtube.com/embed/9w9v4gM5lKc",
      },

      {
        id: "inheritance",
        title: "Inheritance",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Create specialized classes from existing classes and reuse their functionality.",

        concepts: [
          {
            title: "Base class",
            video: "https://www.youtube.com/embed/X8nYM8wdNRE",
          },
          {
            title: "Derived class",
            video: "https://www.youtube.com/embed/X8nYM8wdNRE",
          },
          {
            title: "Single inheritance",
            video: "https://www.youtube.com/embed/X8nYM8wdNRE",
          },
          {
            title: "Multilevel inheritance",
            video: "https://www.youtube.com/embed/X8nYM8wdNRE",
          },
          {
            title: "Multiple inheritance",
            video: "https://www.youtube.com/embed/X8nYM8wdNRE",
          },
        ],

        code: `class Animal {
public:
    void eat() {
        cout << "Eating...";
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Woof!";
    }
};`,

        video: "https://www.youtube.com/embed/X8nYM8wdNRE",
      },

      {
        id: "polymorphism",
        title: "Polymorphism",
        difficulty: "Advanced OOP",
        duration: "45 min",

        description:
          "Understand how different objects can respond differently to the same interface.",

        concepts: [
          {
            title: "Function overriding",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Virtual functions",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Runtime polymorphism",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Base pointers",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Dynamic dispatch",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
        ],

        code: `class Animal {
public:
    virtual void sound() {
        cout << "Animal sound";
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Woof!";
    }
};`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
      },

      {
        id: "abstraction",
        title: "Abstraction",
        difficulty: "Advanced OOP",
        duration: "40 min",

        description:
          "Hide unnecessary implementation details and expose only what the user needs.",

        concepts: [
          {
            title: "Abstract classes",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Pure virtual functions",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Interfaces",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
          {
            title: "Implementation hiding",
            video: "https://www.youtube.com/embed/9w9v4gM5lKc",
          },
        ],

        code: `class Shape {
public:
    virtual double area() = 0;
};

class Circle : public Shape {
public:
    double area() override {
        return 3.14 * 10 * 10;
    }
};`,

        video: "https://www.youtube.com/embed/9w9v4gM5lKc",
      },
    ],
  },

  {
    id: 5,
    level: "PROJECTS",
    title: "Build With C++",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "calculator",
        title: "Console Calculator",
        difficulty: "Beginner",
        duration: "45 min",

        description:
          "Build a calculator using variables, operators, conditions, and functions.",

        concepts: [
          {
            title: "Input/output",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Operators",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
        ],

        code: `double calculate(
    double a,
    double b,
    char op
) {
    if (op == '+')
        return a + b;

    if (op == '-')
        return a - b;

    return 0;
}`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
      },

      {
        id: "student-system",
        title: "Student Management System",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Combine classes, vectors, functions, searching, and file handling into a complete application.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Vectors",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
        ],

        code: `class Student {
public:
    string name;
    int grade;
};

vector<Student> students;`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
      },

      {
        id: "bank-system",
        title: "Banking System",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Build a realistic banking application using object-oriented programming.",

        concepts: [
          {
            title: "OOP",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Encapsulation",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Inheritance",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "Polymorphism",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
          {
            title: "STL",
            video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          },
        ],

        code: `class Account {

protected:
    double balance;

public:
    virtual void withdraw(
        double amount
    ) = 0;
};`,

        video: "https://www.youtube.com/embed/8jLOx1hD3_o",
      },
    ],
  },
];

function RoadmapCpp() {
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

  // Prevent background page scrolling while lesson panel is open.
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

  // ESC closes the lesson panel.
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
    <div className="cpp-roadmap-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="cpp-logo">
            C++
          </div>

          <div className="header-title">

            <h1>
              C++ Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Advanced C++ & OOP
            </p>

          </div>

        </div>


        <div className="header-badge">

          <span className="header-badge-icon">
            🚀
          </span>

          <div>

            <strong>
              LEARN C++
            </strong>

            <small>
              Build • Solve • Create
            </small>

          </div>

        </div>

      </header>


      {/* =========================================
          ROADMAP AREA
      ========================================= */}

      <div className="roadmap-layout">

        <main
          className={`roadmap-content ${
            selectedTopic ? "panel-open" : ""
          }`}
        >

          {/* =====================================
              HERO
          ===================================== */}

          <section className="hero-section">

            <div className="hero-copy">

              <span className="eyebrow">
                YOUR C++ JOURNEY
              </span>

              <h2>
                Master C++ step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to advanced C++ and
                object-oriented programming.
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


          {/* =====================================
              ROADMAP
          ===================================== */}

          <div className="roadmap">

            <div className="road-line" />


            {roadmapData.map((stage) => (

              <section
                key={stage.id}
                className={`roadmap-stage ${stage.color}`}
              >

                {/* STAGE NUMBER */}

                <div className="stage-marker">

                  <span>
                    {stage.id}
                  </span>

                </div>


                {/* STAGE TITLE */}

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


                {/* TOPICS */}

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


        {/* =========================================
            OVERLAY
        ========================================= */}

        {selectedTopic && (

          <div
            className="panel-overlay"
            onClick={closePanel}
            aria-hidden="true"
          />

        )}


        {/* =========================================
            LESSON PANEL
        ========================================= */}

        {selectedTopic && (

          <aside
            className="topic-panel"
            aria-label="Lesson details"
          >

            {/* =====================================
                PANEL HEADER
            ===================================== */}

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
                C++ LEARNING MODULE
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


            {/* =====================================
                PANEL BODY
            ===================================== */}

            <div className="panel-body">

              {/* EXPLANATION */}

              <section className="explanation">

                <h3>
                  What is this?
                </h3>

                <p>
                  {selectedTopic.description}
                </p>

              </section>


              {/* =================================
                  CONCEPTS
              ================================= */}

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


                {/* =================================
                    CONCEPT VIDEO
                ================================= */}

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


              {/* =================================
                  CODE
              ================================= */}

              <section className="code-section">

                <div className="section-title">

                  <h3>
                    Example
                  </h3>

                  <span>
                    C++
                  </span>

                </div>


                <pre>
                  <code>
                    {selectedTopic.code}
                  </code>
                </pre>

              </section>


              {/* =================================
                  FULL LESSON VIDEO
              ================================= */}

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


              {/* =================================
                  COMPLETE
              ================================= */}

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

export default RoadmapCpp;

