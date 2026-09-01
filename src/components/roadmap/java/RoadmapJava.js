import React, { useEffect, useState } from "react";
import "./RoadmapJava.css";

const roadmapData = [
  {
    id: 1,
    level: "FUNDAMENTALS",
    title: "Java Foundations",
    subtitle: "Start Here",
    color: "blue",

    topics: [
      {
        id: "intro",
        title: "Introduction to Java",
        difficulty: "Beginner",
        duration: "15 min",

        description:
          "Learn what Java is, how it works, where it is used, and how your first Java program is created and executed.",

        concepts: [
          {
            title: "What is Java?",
            video: "https://www.youtube.com/embed/eIrMbAQSU34",
          },
          {
            title: "History of Java",
            video: "https://www.youtube.com/embed/eIrMbAQSU34",
          },
          {
            title: "Where Java is used",
            video: "https://www.youtube.com/embed/eIrMbAQSU34",
          },
          {
            title: "JDK, JRE, and JVM",
            video: "https://www.youtube.com/embed/eIrMbAQSU34",
          },
          {
            title: "Your first Java program",
            video: "https://www.youtube.com/embed/eIrMbAQSU34",
          },
        ],

        code: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, Java!");

    }
}`,

        video: "https://www.youtube.com/embed/eIrMbAQSU34",
      },

      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Learn how Java stores information using variables, primitive data types, and reference types.",

        concepts: [
          {
            title: "Variables",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "int",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "double",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "char",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "boolean",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "String",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Constants",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `int age = 20;
double price = 99.99;
char grade = 'A';
boolean student = true;
String name = "Alex";`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "20 min",

        description:
          "Learn how Java programs communicate with users using output statements and the Scanner class.",

        concepts: [
          {
            title: "System.out.println",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Scanner",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "User input",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Multiple inputs",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Input validation",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.println("Hello " + name);

    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "operators",
        title: "Operators & Expressions",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Use Java operators to calculate values, compare information, and create logical expressions.",

        concepts: [
          {
            title: "Arithmetic operators",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Logical operators",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Increment and decrement",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `int a = 10;
int b = 5;

System.out.println(a + b);
System.out.println(a > b);
System.out.println(a > 5 && b < 10);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",

        description:
          "Teach your Java programs how to make decisions using conditions and different control structures.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "else if",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "switch",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Ternary operator",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `int score = 85;

if (score >= 90) {

    System.out.println("Excellent");

} else if (score >= 75) {

    System.out.println("Passed");

} else {

    System.out.println("Failed");
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",

        description:
          "Learn how loops allow Java programs to repeat instructions efficiently.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "do while",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Nested loops",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `for (int i = 1; i <= 5; i++) {

    System.out.println(i);

}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },
    ],
  },

  {
    id: 2,
    level: "INTERMEDIATE",
    title: "Core Java Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "arrays",
        title: "Arrays",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Store multiple values in one variable and learn how to access, process, and modify array elements.",

        concepts: [
          {
            title: "Creating arrays",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Traversing",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Updating values",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Multidimensional arrays",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `int[] numbers = {
    10, 20, 30, 40, 50
};

for (int i = 0; i < numbers.length; i++) {

    System.out.println(numbers[i]);

}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "strings",
        title: "Strings",
        difficulty: "Intermediate",
        duration: "25 min",

        description:
          "Work with text using Java String methods and learn common operations for manipulating strings.",

        concepts: [
          {
            title: "String",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Length",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Concatenation",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Substring",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "equals",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `String first = "Hello";
String second = "World";

String message =
    first + " " + second;

System.out.println(message);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "methods",
        title: "Methods",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Break large programs into smaller reusable methods and learn how parameters and return values work.",

        concepts: [
          {
            title: "Method declaration",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "void methods",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Method overloading",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Variable scope",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `public static int add(int a, int b) {

    return a + b;

}

int result = add(10, 20);

System.out.println(result);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "arraylist",
        title: "ArrayList",
        difficulty: "Intermediate",
        duration: "30 min",

        description:
          "Learn how ArrayList provides a flexible collection that can grow and shrink dynamically.",

        concepts: [
          {
            title: "Creating ArrayList",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "add",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "get",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "remove",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "contains",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Looping collections",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `import java.util.ArrayList;

ArrayList<String> students =
    new ArrayList<>();

students.add("Ana");
students.add("Mark");
students.add("John");

System.out.println(students);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "hashmap",
        title: "HashMap",
        difficulty: "Intermediate",
        duration: "35 min",

        description:
          "Store information using key-value pairs and learn how HashMap provides fast data lookup.",

        concepts: [
          {
            title: "HashMap",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Key-value pairs",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "put",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "get",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "containsKey",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Looping HashMap",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `import java.util.HashMap;

HashMap<String, Double> discount =
    new HashMap<>();

discount.put("Student", 0.20);
discount.put("Senior", 0.15);
discount.put("Regular", 0.00);

System.out.println(
    discount.get("Student")
);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },
    ],
  },

  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced Java",
    subtitle: "Think Like a Java Developer",
    color: "orange",

    topics: [
      {
        id: "collections",
        title: "Collections Framework",
        difficulty: "Advanced",
        duration: "45 min",

        description:
          "Use Java collections such as List, Set, Map, and Queue to organize and process data efficiently.",

        concepts: [
          {
            title: "List",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Set",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Map",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Queue",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Stack",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Iterators",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `import java.util.*;

List<Integer> numbers =
    new ArrayList<>(
        Arrays.asList(5, 2, 8, 1)
    );

Collections.sort(numbers);

System.out.println(numbers);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "generics",
        title: "Generics",
        difficulty: "Advanced",
        duration: "35 min",

        description:
          "Create reusable and type-safe classes and methods using Java generics.",

        concepts: [
          {
            title: "Generic classes",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Generic methods",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Type parameters",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Wildcards",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `public static <T> T first(T a, T b) {

    return a;

}

System.out.println(
    first(10, 20)
);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "lambdas",
        title: "Lambda Expressions",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Write concise functions and use functional programming techniques with Java collections.",

        concepts: [
          {
            title: "Lambda syntax",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Functional interfaces",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Collection processing",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `List<Integer> numbers =
    Arrays.asList(1, 2, 3, 4);

numbers.forEach(
    number -> System.out.println(number)
);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "streams",
        title: "Stream API",
        difficulty: "Advanced",
        duration: "40 min",

        description:
          "Process collections using modern Java streams, filtering, mapping, and reducing.",

        concepts: [
          {
            title: "Streams",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "filter",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "map",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "sorted",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "collect",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `List<Integer> numbers =
    Arrays.asList(1, 2, 3, 4, 5);

List<Integer> result =
    numbers.stream()
        .filter(n -> n % 2 == 0)
        .toList();

System.out.println(result);`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "exceptions",
        title: "Exception Handling",
        difficulty: "Advanced",
        duration: "30 min",

        description:
          "Handle runtime errors safely using Java's exception handling system.",

        concepts: [
          {
            title: "try",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "catch",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "finally",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "throw",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Custom exceptions",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `try {

    int result = 10 / 0;

} catch (ArithmeticException error) {

    System.out.println(
        "Cannot divide by zero."
    );
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },
    ],
  },

  {
    id: 4,
    level: "OBJECT-ORIENTED PROGRAMMING",
    title: "Java OOP",
    subtitle: "Build Real-World Systems",
    color: "purple",

    topics: [
      {
        id: "classes",
        title: "Classes & Objects",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Learn how Java classes and objects allow you to model real-world entities in software.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Objects",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Fields",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Access modifiers",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class Student {

    String name;
    int age;

    void introduce() {

        System.out.println(
            "Hi, I'm " + name
        );

    }
}

Student student = new Student();

student.name = "Alex";
student.age = 20;

student.introduce();`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "constructors",
        title: "Constructors",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Learn how constructors initialize Java objects when they are created.",

        concepts: [
          {
            title: "Constructors",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Default constructor",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Parameterized constructor",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Constructor overloading",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "this keyword",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class Student {

    String name;

    Student(String name) {

        this.name = name;

    }
}

Student student =
    new Student("Alex");`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "encapsulation",
        title: "Encapsulation",
        difficulty: "OOP",
        duration: "30 min",

        description:
          "Protect internal object data and control how other parts of your program access it.",

        concepts: [
          {
            title: "private",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "public",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Getters",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Setters",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Data protection",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class BankAccount {

    private double balance;

    public void deposit(double amount) {

        balance += amount;

    }

    public double getBalance() {

        return balance;

    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "inheritance",
        title: "Inheritance",
        difficulty: "OOP",
        duration: "40 min",

        description:
          "Create specialized classes from existing classes and reuse functionality through inheritance.",

        concepts: [
          {
            title: "Base class",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Child class",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "extends",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "super",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Method overriding",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class Animal {

    void eat() {

        System.out.println("Eating...");

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println("Woof!");

    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "polymorphism",
        title: "Polymorphism",
        difficulty: "Advanced OOP",
        duration: "45 min",

        description:
          "Understand how different Java objects can respond differently to the same method call.",

        concepts: [
          {
            title: "Method overriding",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Upcasting",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Dynamic method dispatch",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Runtime polymorphism",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Interfaces and polymorphism",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class Animal {

    void sound() {

        System.out.println("Animal sound");

    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Woof!");

    }
}

Animal animal = new Dog();

animal.sound();`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "abstraction",
        title: "Abstraction",
        difficulty: "Advanced OOP",
        duration: "40 min",

        description:
          "Hide implementation details and expose only the important behavior through abstract classes and interfaces.",

        concepts: [
          {
            title: "Abstract classes",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Abstract methods",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Interfaces",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Implementation hiding",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `abstract class Shape {

    abstract double area();

}

class Circle extends Shape {

    double area() {

        return 3.14 * 10 * 10;

    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },
    ],
  },

  {
    id: 5,
    level: "PROJECTS",
    title: "Build With Java",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "number-game",
        title: "Number Pattern Game",
        difficulty: "Beginner",
        duration: "45 min",

        description:
          "Build a simple console game using variables, loops, conditions, arrays, and user input.",

        concepts: [
          {
            title: "User input",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Arrays",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Loops",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner =
            new Scanner(System.in);

        int[] numbers = {
            2, 4, 8, 16
        };

        System.out.println(
            "Find the next number:"
        );

        int answer = scanner.nextInt();

        if (answer == 32) {

            System.out.println(
                "Correct!"
            );

        } else {

            System.out.println(
                "Try again!"
            );
        }
    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "student-system",
        title: "Student Management System",
        difficulty: "Intermediate",
        duration: "2 hrs",

        description:
          "Combine classes, ArrayList, methods, searching, and user input into a complete student management application.",

        concepts: [
          {
            title: "Classes",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "ArrayList",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Methods",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "User input",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `class Student {

    String name;
    int grade;

    Student(String name, int grade) {

        this.name = name;
        this.grade = grade;

    }
}

ArrayList<Student> students =
    new ArrayList<>();`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },

      {
        id: "bank-system",
        title: "Banking System",
        difficulty: "Advanced",
        duration: "3 hrs",

        description:
          "Build a realistic banking application using Java object-oriented programming, collections, and encapsulation.",

        concepts: [
          {
            title: "OOP",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Encapsulation",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Inheritance",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Polymorphism",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
          {
            title: "Collections",
            video: "https://www.youtube.com/embed/GoXwIVyNvX0",
          },
        ],

        code: `abstract class Account {

    protected double balance;

    public abstract void withdraw(
        double amount
    );
}

class SavingsAccount extends Account {

    public void withdraw(double amount) {

        if (amount <= balance) {

            balance -= amount;

        }
    }
}`,

        video: "https://www.youtube.com/embed/GoXwIVyNvX0",
      },
    ],
  },
];

function RoadmapJava() {
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
    <div className="java-roadmap-page">

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="java-logo">
            Java
          </div>

          <div className="header-title">

            <h1>
              Java Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Advanced Java & OOP
            </p>

          </div>

        </div>

        <div className="header-badge">

          <span className="header-badge-icon">
            ☕
          </span>

          <div>

            <strong>
              LEARN JAVA
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
                YOUR JAVA JOURNEY
              </span>

              <h2>
                Master Java step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to advanced Java and
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

                        {stage.id === 1 && "☕"}
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
                JAVA LEARNING MODULE
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
                    JAVA
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

export default RoadmapJava;