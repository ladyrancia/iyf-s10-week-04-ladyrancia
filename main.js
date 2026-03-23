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

