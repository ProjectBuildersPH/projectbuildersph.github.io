import React, { useEffect, useState } from "react";
import "./RoadmapCSharp.css";

const roadmapData = [
  // =====================================================
  // 1. FUNDAMENTALS
  // =====================================================
  {
    id: 1,
    level: "FUNDAMENTALS",
    title: "C# Foundations",
    subtitle: "Start Here",
    color: "blue",

    topics: [
      {
        id: "intro",
        title: "Introduction to C#",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn what C# is, where it is used, how the .NET platform works, and how your first C# program is created and executed.",

        concepts: [
          {
            title: "What is C#?",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "History of C#",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Where C# is used",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: ".NET and C#",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Your first C# program",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, C#!");
    }
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Learn how C# stores information using variables, data types, and constants.",

        concepts: [
          {
            title: "Variables",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "int",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "double",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "char",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "bool",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "string",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Constants",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `int age = 20;
double price = 99.99;
char grade = 'A';
bool student = true;
string name = "Alex";`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn how C# programs display information and receive input from users.",

        concepts: [
          {
            title: "Console.WriteLine",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Console.Write",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Console.ReadLine",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Parsing input",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "String interpolation",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.Write("Enter your age: ");
int age = int.Parse(Console.ReadLine());

Console.WriteLine($"Hello {name}!");
Console.WriteLine($"You are {age} years old.");`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "operators",
        title: "Operators & Expressions",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Use arithmetic, comparison, assignment, and logical operators to create expressions.",

        concepts: [
          {
            title: "Arithmetic operators",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Logical operators",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Increment and decrement",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `int a = 10;
int b = 5;

Console.WriteLine(a + b);
Console.WriteLine(a > b);
Console.WriteLine(a > 5 && b < 10);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Teach your C# programs how to make decisions using conditions.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "else if",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "switch",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Ternary operator",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `int score = 85;

if (score >= 90)
{
    Console.WriteLine("Excellent");
}
else if (score >= 75)
{
    Console.WriteLine("Passed");
}
else
{
    Console.WriteLine("Failed");
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Learn how loops repeat instructions and help automate repetitive tasks.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "do while",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "foreach",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },
    ],
  },

  // =====================================================
  // 2. CORE C#
  // =====================================================
  {
    id: 2,
    level: "INTERMEDIATE",
    title: "Core C# Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "arrays",
        title: "Arrays",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Store multiple values of the same type and learn how to access and process them.",

        concepts: [
          {
            title: "Creating arrays",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Traversing",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Sorting",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Multidimensional arrays",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `int[] numbers = {
    10, 20, 30, 40, 50
};

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "strings",
        title: "Strings",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Work with text using C# string operations, searching, formatting, and manipulation.",

        concepts: [
          {
            title: "String basics",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Length",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Concatenation",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "String interpolation",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Substring",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `string first = "Hello";
string second = "World";

string message = $"{first} {second}";

Console.WriteLine(message);
Console.WriteLine(message.Length);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "methods",
        title: "Methods",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Break programs into reusable methods that accept parameters and return values.",

        concepts: [
          {
            title: "Method declaration",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Optional parameters",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Method overloading",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Scope",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `static int Add(int a, int b)
{
    return a + b;
}

int result = Add(10, 20);

Console.WriteLine(result);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "lists",
        title: "Collections & Lists",
        difficulty: "Intermediate",
        duration: "35 min",

        description:
          "Learn how to store and manipulate dynamic collections using List, Dictionary, and other collection types.",

        concepts: [
          {
            title: "List<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Add and Remove",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Dictionary<TKey,TValue>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "HashSet<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Queue<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Stack<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `List<string> students = new List<string>();

students.Add("Alex");
students.Add("Maria");
students.Add("Juan");

foreach (string student in students)
{
    Console.WriteLine(student);
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "linq",
        title: "LINQ",
        difficulty: "Intermediate",
        duration: "40 min",

        description:
          "Query and transform collections using Language Integrated Query.",

        concepts: [
          {
            title: "Where",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Select",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "OrderBy",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "First and FirstOrDefault",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Any and All",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `List<int> numbers = new List<int>
{
    10, 15, 20, 25, 30
};

var evenNumbers = numbers
    .Where(n => n % 2 == 0);

foreach (var number in evenNumbers)
{
    Console.WriteLine(number);
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "exceptions",
        title: "Exception Handling",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Handle runtime errors safely using try, catch, finally, and throw.",

        concepts: [
          {
            title: "try",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "catch",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "finally",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "throw",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Custom exceptions",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `try
{
    int number = int.Parse("abc");
}
catch (FormatException)
{
    Console.WriteLine("Invalid number!");
}
finally
{
    Console.WriteLine("Finished.");
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },
    ],
  },

  // =====================================================
  // 3. ADVANCED C#
  // =====================================================
  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced C#",
    subtitle: "Think Like a C# Developer",
    color: "orange",

    topics: [
      {
        id: "delegates",
        title: "Delegates",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Understand delegates and how methods can be treated as values and passed around your program.",

        concepts: [
          {
            title: "What are delegates?",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Delegate syntax",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Passing methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Action",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Func",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `delegate int Operation(int a, int b);

static int Add(int a, int b)
{
    return a + b;
}

Operation operation = Add;

Console.WriteLine(operation(10, 20));`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "lambdas",
        title: "Lambda Expressions",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Create concise anonymous functions and use them with LINQ, delegates, and collections.",

        concepts: [
          {
            title: "Lambda syntax",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Lambda with LINQ",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Lambda with delegates",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `List<int> numbers = new List<int>
{
    1, 2, 3, 4, 5
};

var squares = numbers
    .Select(n => n * n);

foreach (var number in squares)
{
    Console.WriteLine(number);
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "generics",
        title: "Generics",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Create reusable type-safe classes and methods using generics.",

        concepts: [
          {
            title: "Generic methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Generic classes",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Type parameters",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Generic constraints",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `static T GetFirst<T>(T[] items)
{
    return items[0];
}

int[] numbers = { 10, 20, 30 };

Console.WriteLine(
    GetFirst(numbers)
);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "async",
        title: "Async & Await",
        difficulty: "Advanced",
        duration: "45 min",

        description:
          "Learn asynchronous programming and how C# handles tasks without blocking execution.",

        concepts: [
          {
            title: "Task",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "async",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "await",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Task<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Parallel execution",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `static async Task<string> GetMessage()
{
    await Task.Delay(1000);

    return "Hello from async!";
}

string message = await GetMessage();

Console.WriteLine(message);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "files",
        title: "File Handling",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Read, write, create, and manage files using C# and the System.IO namespace.",

        concepts: [
          {
            title: "File.ReadAllText",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "File.WriteAllText",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "File.Exists",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Directories",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Streams",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `string path = "students.txt";

File.WriteAllText(
    path,
    "Alex\\nMaria\\nJuan"
);

string content =
    File.ReadAllText(path);

Console.WriteLine(content);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },
    ],
  },

  // =====================================================
  // 4. OOP
  // =====================================================
  {
    id: 4,
    level: "OBJECT-ORIENTED PROGRAMMING",
    title: "C# OOP",
    subtitle: "Build Real-World Systems",
    color: "purple",

    topics: [
      {
        id: "classes",
        title: "Classes & Objects",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Learn how to model real-world entities using classes, objects, properties, and methods.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Fields",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Properties",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce()
    {
        Console.WriteLine(
            $"Hi, I'm {Name}"
        );
    }
}

Student student = new Student();

student.Name = "Alex";
student.Age = 20;

student.Introduce();`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "constructors",
        title: "Constructors",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Learn how constructors initialize objects when they are created.",

        concepts: [
          {
            title: "Default constructor",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Parameterized constructor",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Constructor overloading",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Object initialization",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class Student
{
    public string Name { get; set; }

    public Student(string name)
    {
        Name = name;
    }
}

Student student =
    new Student("Alex");

Console.WriteLine(student.Name);`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "encapsulation",
        title: "Encapsulation",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Protect object data and control how other parts of the program access it.",

        concepts: [
          {
            title: "private",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "public",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Properties",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Getters and setters",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Data protection",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class BankAccount
{
    private double balance;

    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
        }
    }

    public double GetBalance()
    {
        return balance;
    }
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
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
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Derived class",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Single inheritance",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Multilevel inheritance",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "base keyword",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating...");
    }
}

class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Woof!");
    }
}

Dog dog = new Dog();

dog.Eat();
dog.Bark();`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "polymorphism",
        title: "Polymorphism",
        difficulty: "Advanced OOP",
        duration: "45 min",

        description:
          "Understand how different classes can respond differently to the same method or interface.",

        concepts: [
          {
            title: "Method overriding",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "virtual",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "override",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Runtime polymorphism",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Dynamic dispatch",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Woof!");
    }
}

Animal animal = new Dog();

animal.Sound();`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "interfaces",
        title: "Interfaces & Abstraction",
        difficulty: "Advanced OOP",
        duration: "45 min",

        description:
          "Learn how interfaces and abstract classes define common behavior while hiding implementation details.",

        concepts: [
          {
            title: "Interfaces",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "interface keyword",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Abstract classes",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Abstract methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Dependency design",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `interface IShape
{
    double Area();
}

class Circle : IShape
{
    public double Radius { get; set; }

    public double Area()
    {
        return Math.PI * Radius * Radius;
    }
}

Circle circle = new Circle();

circle.Radius = 10;

Console.WriteLine(circle.Area());`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },
    ],
  },

  // =====================================================
  // 5. PROJECTS
  // =====================================================
  {
    id: 5,
    level: "PROJECTS",
    title: "Build With C#",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "calculator",
        title: "Console Calculator",
        difficulty: "Beginner",
        duration: "45 min",

        description:
          "Build a calculator using variables, operators, conditions, loops, and methods.",

        concepts: [
          {
            title: "Input/output",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Operators",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `static double Calculate(
    double a,
    double b,
    char operation
)
{
    if (operation == '+')
        return a + b;

    if (operation == '-')
        return a - b;

    if (operation == '*')
        return a * b;

    if (operation == '/')
        return a / b;

    return 0;
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "student-system",
        title: "Student Management System",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Build a student management application using classes, collections, methods, searching, and file handling.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "List<T>",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}

List<Student> students =
    new List<Student>();

students.Add(new Student
{
    Name = "Alex",
    Grade = 90
});`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },

      {
        id: "bank-system",
        title: "Banking System",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Build a realistic banking application using object-oriented programming, collections, validation, and exception handling.",

        concepts: [
          {
            title: "OOP",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Encapsulation",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Inheritance",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Polymorphism",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
          {
            title: "Collections",
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          },
        ],

        code: `abstract class Account
{
    protected double balance;

    public abstract void Withdraw(
        double amount
    );

    public double GetBalance()
    {
        return balance;
    }
}`,

        video: "https://www.youtube.com/embed/GhQdlIFylQ8",
      },
    ],
  },
];

function RoadmapCSharp() {
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
    <div className="csharp-roadmap-page">

      {/* HEADER */}

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="csharp-logo">
            C#
          </div>

          <div className="header-title">

            <h1>
              C# Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Advanced C# & OOP
            </p>

          </div>

        </div>

        <div className="header-badge">

          <span className="header-badge-icon">
            🚀
          </span>

          <div>

            <strong>
              LEARN C#
            </strong>

            <small>
              Build • Solve • Create
            </small>

          </div>

        </div>

      </header>


      {/* ROADMAP */}

      <div className="roadmap-layout">

        <main
          className={`roadmap-content ${
            selectedTopic ? "panel-open" : ""
          }`}
        >

          {/* HERO */}

          <section className="hero-section">

            <div className="hero-copy">

              <span className="eyebrow">
                YOUR C# JOURNEY
              </span>

              <h2>
                Master C# step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to advanced C#, object-oriented
                programming, and real-world projects.
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


          {/* ROADMAP */}

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


        {/* OVERLAY */}

        {selectedTopic && (

          <div
            className="panel-overlay"
            onClick={closePanel}
            aria-hidden="true"
          />

        )}


        {/* LESSON PANEL */}

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
                C# LEARNING MODULE
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

              {/* EXPLANATION */}

              <section className="explanation">

                <h3>
                  What is this?
                </h3>

                <p>
                  {selectedTopic.description}
                </p>

              </section>


              {/* CONCEPTS */}

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


                {/* CONCEPT VIDEO */}

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


              {/* CODE */}

              <section className="code-section">

                <div className="section-title">

                  <h3>
                    Example
                  </h3>

                  <span>
                    C#
                  </span>

                </div>

                <pre>
                  <code>
                    {selectedTopic.code}
                  </code>
                </pre>

              </section>


              {/* FULL VIDEO */}

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


              {/* COMPLETE */}

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

export default RoadmapCSharp;