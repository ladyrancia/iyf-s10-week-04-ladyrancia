// =======================
// VARIABLES
// =======================
let name = "Lady Rancia";
let age = 20;
const birthYear = 2005;

console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

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
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);


// =======================
// OPERATORS
// =======================
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


// =======================
// STRINGS
// =======================
let firstName = "Lady";
let lastName = "Rancia";

let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Lady"));


// =======================
// COMPARISON & LOGICAL
// =======================
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);


// =======================
// AGE CHALLENGE
// =======================
let ageYears = 20;

let ageDays = ageYears * 365;
let ageHours = ageDays * 24;
let year100 = 2026 + (100 - ageYears);

console.log("Age in days:", ageDays);
console.log("Age in hours:", ageHours);
console.log("Year I turn 100:", year100);


// =======================
// FUNCTIONS
// =======================
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 10));
console.log(celsiusToFahrenheit(25));
console.log(isEven(4));
console.log(getInitials("Lady Rancia"));
console.log(reverseString("hello"));


// =======================
// DEFAULT PARAMETERS
// =======================
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


// =======================
// CONTROL FLOW
// =======================
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(85));

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


// =======================
// LOOPS
// =======================
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}


// =======================
// FIZZBUZZ
// =======================
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


// =======================
// TRIANGLE
// =======================
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// =======================
// CALCULATOR
// =======================
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}
function modulus(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));


// =======================
// ARRAYS
// =======================
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);


// =======================
// OBJECTS
// =======================
const person = {
    firstName: "Lady",
    lastName: "Rancia",
    age: 20,
    address: {
        city: "Nairobi"
    }
};

console.log(person.firstName);
console.log(person.address.city);


// =======================
// ARRAY OF OBJECTS
// =======================
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" }
];

const names = students.map(s => s.name);
console.log(names);


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

        return count === 0 ? 0 : total / count;
    },

    getTopStudent() {
        let top = null;
        let highest = 0;

        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > highest) {
                highest = avg;
                top = student;
            }
        }

        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else if (score >= 60) return "D";
        else return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        let report = `Report Card for ${student.name}\n`;

        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }

        const avg = this.getStudentAverage(name);
        report += `Average: ${avg.toFixed(2)}`;

        return report;
    }
};

// TEST DATA
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));

const calculatorObj = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; }
};

console.log(calculatorObj.add(5, 3));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
function findLargest(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) max = num;
    }

    return max;
}

console.log(findLargest([3, 7, 2, 9, 5]));
