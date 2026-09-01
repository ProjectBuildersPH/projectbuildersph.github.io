import React, { useEffect, useState } from "react";
import "./RoadmapC.css";

const roadmapData = [
  {
    id: 1,
    level: "FUNDAMENTALS",
    title: "C Foundations",
    subtitle: "Start Here",
    color: "blue",

    topics: [
      {
        id: "intro",
        title: "Introduction to C",
        difficulty: "Beginner",
        duration: "15 min",
        description:
          "Learn what C is, where it is used, how compilation works, and how to create your first C program.",

        concepts: [
          {
            title: "What is C?",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "History of C",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Where C is used",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Compiler and compilation",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Your first C program",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#include <stdio.h>

int main() {
    printf("Hello, C!");
    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "variables",
        title: "Variables & Data Types",
        difficulty: "Beginner",
        duration: "20 min",
        description:
          "Understand how C stores information using variables, constants, and different data types.",

        concepts: [
          {
            title: "Variables",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "int",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "float",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "double",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "char",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Constants",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int age = 20;
float height = 5.8f;
double price = 99.99;
char grade = 'A';

const int MAX = 100;`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "input-output",
        title: "Input & Output",
        difficulty: "Beginner",
        duration: "20 min",
        description:
          "Learn how C programs display information and receive input from users.",

        concepts: [
          {
            title: "printf()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "scanf()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Format specifiers",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Reading numbers",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Reading characters",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#include <stdio.h>

int main() {

    char name[50];
    int age;

    printf("Enter your name: ");
    scanf("%49s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Hello %s!\\n", name);
    printf("Age: %d", age);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "operators",
        title: "Operators & Expressions",
        difficulty: "Beginner",
        duration: "25 min",
        description:
          "Use arithmetic, comparison, logical, and assignment operators to create expressions.",

        concepts: [
          {
            title: "Arithmetic operators",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Assignment operators",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Comparison operators",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Logical operators",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Increment and decrement",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int a = 10;
int b = 5;

printf("%d\\n", a + b);
printf("%d\\n", a * b);

if (a > b && b > 0) {
    printf("Valid");
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "conditions",
        title: "Conditions & Decision Making",
        difficulty: "Beginner",
        duration: "25 min",
        description:
          "Teach your C programs how to make decisions using conditions and branching.",

        concepts: [
          {
            title: "if",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "else",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "else if",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Nested conditions",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "switch",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Ternary operator",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int score = 85;

if (score >= 90) {
    printf("Excellent");
}
else if (score >= 75) {
    printf("Passed");
}
else {
    printf("Failed");
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "loops",
        title: "Loops & Repetition",
        difficulty: "Beginner",
        duration: "30 min",
        description:
          "Learn how C repeats instructions using for, while, and do-while loops.",

        concepts: [
          {
            title: "for loop",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "while loop",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "do while",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Nested loops",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "break",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "continue",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },
    ],
  },

  {
    id: 2,
    level: "INTERMEDIATE",
    title: "Core C Skills",
    subtitle: "Build Your Programming Logic",
    color: "green",

    topics: [
      {
        id: "arrays",
        title: "Arrays",
        difficulty: "Intermediate",
        duration: "30 min",
        description:
          "Store multiple values in contiguous memory and learn how to access and process array elements.",

        concepts: [
          {
            title: "Creating arrays",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Indexing",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Traversing",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Updating values",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Multidimensional arrays",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int numbers[5] = {
    10, 20, 30, 40, 50
};

for (int i = 0; i < 5; i++) {
    printf("%d\\n", numbers[i]);
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "strings",
        title: "Strings",
        difficulty: "Intermediate",
        duration: "30 min",
        description:
          "Work with text using character arrays and C's standard string functions.",

        concepts: [
          {
            title: "Character arrays",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "String length",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "strcpy()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "strcat()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "strcmp()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#include <stdio.h>
#include <string.h>

int main() {

    char first[50] = "Hello";
    char second[] = "World";

    strcat(first, " ");
    strcat(first, second);

    printf("%s", first);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "functions",
        title: "Functions",
        difficulty: "Intermediate",
        duration: "30 min",
        description:
          "Break programs into reusable functions and understand parameters, return values, and scope.",

        concepts: [
          {
            title: "Function declaration",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Parameters",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Return values",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "void functions",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Scope",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int add(int a, int b) {
    return a + b;
}

int main() {

    int result = add(10, 20);

    printf("%d", result);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "pointers",
        title: "Pointers",
        difficulty: "Intermediate",
        duration: "45 min",
        description:
          "Understand memory addresses, pointers, dereferencing, and how C works directly with memory.",

        concepts: [
          {
            title: "Memory addresses",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "& operator",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "* operator",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Pointer variables",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Dereferencing",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Pointer arithmetic",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int number = 42;

int *ptr = &number;

printf("Value: %d\\n", number);
printf("Address: %p\\n", (void*)&number);
printf("Pointer value: %d\\n", *ptr);`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "structs",
        title: "Structures",
        difficulty: "Intermediate",
        duration: "35 min",
        description:
          "Group related data together using structures and create custom data types.",

        concepts: [
          {
            title: "struct",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Structure members",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Accessing members",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Array of structures",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Nested structures",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {

    struct Student student;

    student.age = 20;
    student.grade = 95.5;

    printf("%d", student.age);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "dynamic-memory",
        title: "Dynamic Memory",
        difficulty: "Intermediate",
        duration: "40 min",
        description:
          "Learn how to allocate and release memory dynamically using malloc, calloc, realloc, and free.",

        concepts: [
          {
            title: "Stack vs Heap",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "malloc()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "calloc()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "realloc()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "free()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Memory leaks",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#include <stdlib.h>
#include <stdio.h>

int main() {

    int *number = malloc(sizeof(int));

    *number = 50;

    printf("%d", *number);

    free(number);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },
    ],
  },

  {
    id: 3,
    level: "ADVANCED",
    title: "Advanced C",
    subtitle: "Think Like a C Developer",
    color: "orange",

    topics: [
      {
        id: "pointer-functions",
        title: "Pointers & Functions",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Use pointers with functions to modify data, return addresses, and build flexible programs.",

        concepts: [
          {
            title: "Pass by address",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Pointer parameters",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Returning pointers",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Function pointers",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `void changeValue(int *number) {
    *number = 100;
}

int main() {

    int value = 10;

    changeValue(&value);

    printf("%d", value);

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "file-handling",
        title: "File Handling",
        difficulty: "Advanced",
        duration: "35 min",
        description:
          "Read and write persistent data using C file handling functions.",

        concepts: [
          {
            title: "FILE pointer",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "fopen()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "fprintf()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "fscanf()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "fclose()",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `FILE *file;

file = fopen("data.txt", "w");

if (file != NULL) {
    fprintf(file, "Hello C!");
    fclose(file);
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "preprocessor",
        title: "Preprocessor & Macros",
        difficulty: "Advanced",
        duration: "30 min",
        description:
          "Understand how the C preprocessor works and how macros can simplify repetitive code.",

        concepts: [
          {
            title: "#include",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "#define",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Macros",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Conditional compilation",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main() {

    printf("%.2f\\n", PI);
    printf("%d", SQUARE(5));

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "function-pointers",
        title: "Function Pointers",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Learn how functions can be stored in pointers and passed around like data.",

        concepts: [
          {
            title: "Function addresses",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Function pointer syntax",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Callbacks",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Using function pointers",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int add(int a, int b) {
    return a + b;
}

int main() {

    int (*operation)(int, int);

    operation = add;

    printf("%d", operation(10, 20));

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "linked-lists",
        title: "Linked Lists",
        difficulty: "Advanced",
        duration: "45 min",
        description:
          "Build dynamic data structures using nodes, pointers, and linked lists.",

        concepts: [
          {
            title: "Nodes",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Pointers and nodes",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Insert",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Delete",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Traverse",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Node {
    int data;
    struct Node *next;
};

struct Node first;

first.data = 10;
first.next = NULL;`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },
    ],
  },

  {
    id: 4,
    level: "DATA STRUCTURES",
    title: "C Data Structures",
    subtitle: "Build Your Problem-Solving Skills",
    color: "purple",

    topics: [
      {
        id: "stack",
        title: "Stack",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Understand the LIFO data structure and implement stacks using arrays and linked lists.",

        concepts: [
          {
            title: "LIFO",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Push",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Pop",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Peek",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `#define SIZE 5

int stack[SIZE];
int top = -1;

void push(int value) {
    if (top < SIZE - 1) {
        stack[++top] = value;
    }
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "queue",
        title: "Queue",
        difficulty: "Advanced",
        duration: "40 min",
        description:
          "Learn the FIFO data structure and implement queues using arrays and linked lists.",

        concepts: [
          {
            title: "FIFO",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Enqueue",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Dequeue",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Front and rear",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `int queue[5];
int front = 0;
int rear = -1;

void enqueue(int value) {
    queue[++rear] = value;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "trees",
        title: "Trees",
        difficulty: "Advanced",
        duration: "50 min",
        description:
          "Understand hierarchical data structures and learn the fundamentals of binary trees.",

        concepts: [
          {
            title: "Tree nodes",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Root",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Children",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Binary trees",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Tree traversal",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node root = {
    10,
    NULL,
    NULL
};`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "sorting",
        title: "Sorting Algorithms",
        difficulty: "Advanced",
        duration: "45 min",
        description:
          "Learn how sorting algorithms organize data and compare their performance.",

        concepts: [
          {
            title: "Bubble sort",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Selection sort",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Insertion sort",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Time complexity",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `for (int i = 0; i < n - 1; i++) {

    for (int j = 0; j < n - i - 1; j++) {

        if (numbers[j] > numbers[j + 1]) {

            int temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },
    ],
  },

  {
    id: 5,
    level: "PROJECTS",
    title: "Build With C",
    subtitle: "Put Everything Together",
    color: "red",

    topics: [
      {
        id: "calculator",
        title: "Console Calculator",
        difficulty: "Beginner",
        duration: "45 min",
        description:
          "Build a calculator using variables, operators, conditions, loops, and functions.",

        concepts: [
          {
            title: "Input/output",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Conditions",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Operators",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `float calculate(
    float a,
    float b,
    char op
) {

    if (op == '+')
        return a + b;

    if (op == '-')
        return a - b;

    if (op == '*')
        return a * b;

    if (op == '/')
        return a / b;

    return 0;
}`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "student-system",
        title: "Student Management System",
        difficulty: "Intermediate",
        duration: "2 hrs",
        description:
          "Build a student management system using structures, arrays, functions, searching, and file handling.",

        concepts: [
          {
            title: "Structures",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Arrays",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Functions",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Student {
    char name[50];
    int age;
    float grade;
};

struct Student students[100];

int studentCount = 0;`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "contact-book",
        title: "Contact Book",
        difficulty: "Intermediate",
        duration: "2 hrs",
        description:
          "Create a contact management application using structures, strings, arrays, searching, and file handling.",

        concepts: [
          {
            title: "Structures",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Strings",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Searching",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Updating contacts",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "File storage",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Contact {
    char name[50];
    char phone[20];
};

struct Contact contacts[100];`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },

      {
        id: "inventory",
        title: "Inventory System",
        difficulty: "Advanced",
        duration: "3 hrs",
        description:
          "Build a practical inventory system using structures, arrays, functions, searching, sorting, and file handling.",

        concepts: [
          {
            title: "Structures",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Inventory arrays",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Search",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "Sorting",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
          {
            title: "File handling",
            video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          },
        ],

        code: `struct Product {
    int id;
    char name[50];
    int quantity;
    float price;
};

struct Product products[100];`,

        video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      },
    ],
  },
];

function RoadmapC() {
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
    <div className="c-roadmap-page">

      <header className="roadmap-header">

        <div className="header-brand">

          <div className="c-logo">
            C
          </div>

          <div className="header-title">

            <h1>
              C Learning Roadmap
            </h1>

            <p>
              From Fundamentals to Systems Programming
            </p>

          </div>

        </div>

        <div className="header-badge">

          <span className="header-badge-icon">
            ⚙
          </span>

          <div>
            <strong>
              LEARN C
            </strong>

            <small>
              Code • Memory • Build
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
                YOUR C JOURNEY
              </span>

              <h2>
                Master C step by step.
              </h2>

              <p>
                Follow a structured path from programming
                fundamentals to pointers, memory,
                data structures, and real-world C projects.
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
                C LEARNING MODULE
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
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                    C
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
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

export default RoadmapC;