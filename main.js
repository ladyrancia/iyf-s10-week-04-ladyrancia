// Variable declarations
let name = "Lady Rancia";
let age = 20;
const birthYear = 2005;

// typeof operator
console.log(typeof name);    
console.log(typeof age);     
console.log(typeof true);    

// let vs const
let score = 100;
score = 150;  

const PI = 3.14159;

// Variable Practice

let myName = "Lady Rancia";
let myAge = 20;
let isStudent = true;

let favoriteColors = ["peach", "cream", "brown", "white", "grey"];

let today = new Date();

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favouritecolors);
console.log("Today's date is:", today);

// Number Operations

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
count--;

console.log("Final count:", count);

// String Operations

let firstName = "Lady";
let lastName = "Rancia";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Lady"));

// Comparison

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

// Logical

console.log(true && true);
console.log(true || false);
console.log(!true);

// Age Calculations

let ageYears = 20;

let ageDays = ageYears * 365;
let ageHours = ageDays * 24;
let year100 = 2026 + (100 - ageYears);

console.log("Age in days:", ageDays);
console.log("Age in hours:", ageHours);
console.log("Year I turn 100:", year100);

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test them
console.log(greet("Rancia"));
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(divide(10, 2));
console.log(divide(10, 0));

// Custom Functions

// 1. Area of rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

// 5. Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test
console.log(calculateArea(5, 10));
console.log(celsiusToFahrenheit(25));
console.log(isEven(4));
console.log(getInitials("Lady Rancia"));
console.log(reverseString("hello"));

// Custom Functions

// 1. Area of rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

// 5. Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test
console.log(calculateArea(5, 10));
console.log(celsiusToFahrenheit(25));
console.log(isEven(4));
console.log(getInitials("Lady Rancia"));
console.log(reverseString("hello"));

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(calculateTip(100));
console.log(calculateTip(200, 20));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(3));

// Print 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Even numbers 1–50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// Calculator Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8

// Object Basics

const person = {
    firstName: "Lady",
    lastName: "Rancia",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Access
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modify
person.age = 21;
person.email = "lady@example.com";

delete person.isStudent;

console.log(person);

const calculatorObj = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculatorObj.add(5, 3));
console.log(calculatorObj.subtract(10, 4));
console.log(calculatorObj.multiply(6, 2));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Names
const names = students.map(s => s.name);
console.log(names);

// 2. Grade > 80
const highAchievers = students.filter(s => s.grade > 80);
console.log(highAchievers);

// 3. Find Charlie
const charlie = students.find(s => s.name === "Charlie");
console.log(charlie);

// 4. Average grade
const avgGrade = students.reduce((total, s) => total + s.grade, 0) / students.length;
console.log(avgGrade);

// 5. CS majors
const csMajors = students.filter(s => s.major === "CS");
console.log(csMajors);

// 6. Sort by grade
const sorted = [...students].sort((a, b) => b.grade - a.grade);
console.log(sorted);

// 7. Any > 90
const hasTopStudent = students.some(s => s.grade > 90);
console.log(hasTopStudent);

// 8. All passing
const allPassing = students.every(s => s.grade >= 60);
console.log(allPassing);

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const grades = Object.values(student.grades);
        return grades.reduce((a, b) => a + b, 0) / grades.length;
    },

    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        for (const student of this.students) {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        }

        return total / count;
    },

    getTopStudent() {
        let top = null;
        let highest = 0;

        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > highest) {
                highest = avg;
                top = student.name;
            }
        }

        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const avg = this.getStudentAverage(name);

        return `${name}'s Report:
Grades: ${JSON.stringify(student.grades)}
Average: ${avg.toFixed(2)}
Letter Grade: ${this.getLetterGrade(avg)}`;
    }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));

