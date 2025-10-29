// ---------------------------------------
// JavaScript Math Library Notes
// ---------------------------------------
// Made by: [shivani bhardwaj]

// 1. Math Object - Overview
// ------------------------
// Math is a built-in JavaScript object that has properties and methods to perform mathematical operations.
// Math is NOT a constructor; you can't create 'Math' instances. Just use Math.property or Math.method() directly.

console.log("Math.PI:", Math.PI);      // Pi constant (3.141592653589793)
console.log("Math.E:", Math.E);        // Euler's number (2.718281828459045)

// 2. Math Properties (Constants)
// ------------------------------
// Math.PI         - Ratio of circle's circumference to its diameter
// Math.E          - Euler's number, base of natural logarithms
// Math.SQRT2      - Square root of 2
// Math.SQRT1_2    - Square root of 1/2
// Math.LN2        - Natural log of 2
// Math.LN10       - Natural log of 10
// Math.LOG2E      - Base 2 log of E
// Math.LOG10E     - Base 10 log of E

console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.LN10:", Math.LN10);

// 3. Math Methods (Main Functions)
// --------------------------------

// (A) Rounding Numbers
console.log("Math.round(4.7):", Math.round(4.7));    // 5 (nearest integer)
console.log("Math.floor(4.7):", Math.floor(4.7));    // 4 (rounds DOWN)
console.log("Math.ceil(4.1):", Math.ceil(4.1));      // 5 (rounds UP)
console.log("Math.trunc(4.9):", Math.trunc(4.9));    // 4 (removes decimals)

// (B) Absolute Value
console.log("Math.abs(-23):", Math.abs(-23));        // 23

// (C) Power and Roots
console.log("Math.pow(2, 3):", Math.pow(2, 3));      // 8 (2^3)
console.log("Math.sqrt(25):", Math.sqrt(25));        // 5

// (D) Min and Max
console.log("Math.max(10, 20, 5):", Math.max(10,20,5)); // 20
console.log("Math.min(10, 20, 5):", Math.min(10,20,5)); // 5

// (E) Random Numbers
console.log("Math.random():", Math.random());         // Random number [0,1)
// Example: Random int between 1 and 10
console.log("Random int (1-10):", Math.floor(Math.random()*10) + 1); 

// (F) Trigonometry
console.log("Math.sin(Math.PI/2):", Math.sin(Math.PI/2)); // 1

// (G) Logarithms and Exponents
console.log("Math.log(10):", Math.log(10));           // Natural log
console.log("Math.exp(2):", Math.exp(2));             // e^2

// (H) Other Useful Methods
console.log("Math.sign(-20):", Math.sign(-20));       // -1 (sign of number)
console.log("Math.cbrt(27):", Math.cbrt(27));         // 3 (cube root)
console.log("Math.hypot(3,4):", Math.hypot(3,4));     // 5 (pythagoras: sqrt(a²+b²))

// 4. Generating Random Integer in Range (Handy Example)
// -----------------------------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number between 15 and 25:", getRandomInt(15, 25));

// 5. Interview Questions (With Answers)
// -------------------------------------

// Q1: How to find the largest number in an array?
// A: Use Math.max() with spread syntax

let arr = [10, 2, 44, 17, 99];
console.log("Maximum in array:", Math.max(...arr)); // 99

// Q2: How to round a number to 2 decimal places?
// A: Use .toFixed(2), but remember it returns a string

let val = 12.34567;
console.log("Rounded to 2 decimals:", val.toFixed(2)); // "12.35"

// Q3: How do you get a random integer from 1 to 6 (like a dice)?
console.log("Random dice (1-6):", Math.floor(Math.random()*6)+1);

// Q4: What is Math.trunc() and difference from Math.floor()?
//   - Math.trunc() removes fractional digits (truncates toward zero)
//   - Math.floor() rounds DOWN (toward -Infinity)

console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4
console.log("Math.floor(-4.9):", Math.floor(-4.9)); // -5

// Q5: How to find the square root and cube root of numbers?
console.log("Square root of 81:", Math.sqrt(81));     // 9
console.log("Cube root of 125:", Math.cbrt(125));     // 5

// Q6: How to get absolute value and sign of a number?
console.log("abs(-42):", Math.abs(-42));              // 42
console.log("sign(-42):", Math.sign(-42));            // -1

// Q7: Can you use Math as a constructor object? (Interview trap)
console.log("Is Math a constructor?", typeof Math);       // "object"
// Answer: No, Math is not a constructor. Cannot do new Math()

// 6. Math Object Properties Recap
// -------------------------------
// All methods and constants can be accessed directly using Math (e.g., Math.PI, Math.max())

// 7. Practice Challenge
// ---------------------
// Write a function to return the area of a circle, given its radius.

function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log("Area of circle (r=10):", circleArea(10));

// ---------------------------------------
// End of Math Object Notes
console.log("All important Math library topics covered!");
