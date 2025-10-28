// -----------------------------
// JavaScript Basic Notes
// -----------------------------
// Made by: [Shivani Bhardwaj]

// 1. VARIABLES
// Definition: Variables are containers used to store data values in memory.
// In JavaScript, we can declare variables using var, let, or const.

let myName = "SHIVANI"; // 'let' allows you to reassign values later
var myAge = 30;       // 'var' is function-scoped (older method)
const myCountry = "India"; // 'const' means the value cannot be changed

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Country:", myCountry);

// -----------------------------

// 2. CONSTANTS
// Definition: A constant variable is one whose value cannot be changed once assigned.

const gravity = 9.8;
console.log("Acceleration due to Gravity:", gravity);

// -----------------------------

// 3. DATA TYPES
// JavaScript has different data types to represent values.
// There are two main categories: Primitive and Non-Primitive.

// Primitive Data Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive (Reference) Types: Object, Array, Function

let city = "Pune";                // String
let score = 95;                   // Number
let isOnline = true;              // Boolean
let value;                        // Undefined (no value assigned)
let empty = null;                 // Null (intentional empty value)
let user = { id: 1, name: "Amit" };      // Object
let colors = ["red", "green", "blue"];   // Array

console.log(typeof city);        // string
console.log(typeof score);       // number
console.log(typeof isOnline);    // boolean
console.log(typeof value);       // undefined
console.log(typeof empty);       // object (a JavaScript quirk)
console.log(typeof user);        // object
console.log(typeof colors);      // object

// -----------------------------

// 4. TYPE CONVERSION
// Definition: Changing the data type of a value manually or automatically.

// String to Number
let numberString = "123";
let convertedNumber = Number(numberString);
console.log("String to Number:", convertedNumber, typeof convertedNumber);

// Number to String
let num = 456;
let convertedString = String(num);
console.log("Number to String:", convertedString, typeof convertedString);

// Boolean to Number
let boolValue = true;
let boolToNumber = Number(boolValue);
console.log("Boolean to Number:", boolToNumber);

// -----------------------------

// 5. INCREMENT AND DECREMENT OPERATORS
// Definition: These operators are used to increase or decrease the value of a variable by 1.

let count = 10;

console.log("Initial Count:", count);

count++; // Increment (adds 1)
console.log("After Increment:", count);

count--; // Decrement (subtracts 1)
console.log("After Decrement:", count);

// Pre and Post forms
let x = 5;
console.log("Post Increment (x++):", x++); // prints 5 then increases
console.log("After Post Increment:", x);
console.log("Pre Increment (++x):", ++x);  // increases first then prints

// -----------------------------

// 6. CONDITIONAL STATEMENTS (if, else if, else)
// Definition: Conditional statements help in decision-making based on conditions.

let marks = 80;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}

// -----------------------------

// 7. COMPARISON OPERATORS
// Definition: These operators compare two values and return true or false.
// Common operators: ==, ===, !=, !==, >, <, >=, <=

let a = 10;
let b = "10";

console.log(a == b);   // true - checks only value (loose equality)
console.log(a === b);  // false - checks value + type (strict equality)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 5);    // true
console.log(a <= 10);  // true

// -----------------------------

// End of Notes
console.log("All basic JavaScript topics covered successfully!");
