// ----------------------------------------------
// JavaScript Functions, Rest Operator, Scope, Arrow Functions, and IIFE Notes
// ----------------------------------------------
// Made by: [Your Name]

// 1. Functions: What and How?
// ----------------------------
// A function is a reusable block of code designed to perform a task.
// Defined once, called many times.

function greet(name) {          // 'name' is a parameter
  console.log("Hello " + name);
}

greet("John");                 // Calling function with argument "John"

// 2. Rest Operator (...)
function sum(...nums) {         // Takes any number of arguments into an array 'nums'
  let total = 0;
  for(let num of nums) {
    total += num;
  }
  return total;
}
console.log("Sum:", sum(1,2,3,4)); // 10

// 3. Scope: Global vs Local
// ---------------------------
// Global Scope: Variables declared outside functions, available everywhere

let globalVar = "I am global";

function showScope() {
  let localVar = "I am local";  // Local Scope: only inside function
  console.log(globalVar);       // Can access global variable here
  console.log(localVar);
}

showScope();
// console.log(localVar);       // Error! localVar not accessible outside function

// 4. Arrow Functions (ES6)
// -------------------------
// Shorter syntax for writing functions

// Regular function:
function add(a, b) {
  return a + b;
}

// Arrow function:
const addArrow = (a, b) => a + b;

console.log("Regular add:", add(5,3));
console.log("Arrow add:", addArrow(5,3));

// Arrow function with no parameters
const greetArrow = () => console.log("Hello from arrow function");
greetArrow();

// Arrow function with multiple statements (use curly braces and return)
const multiplyArrow = (a, b) => {
  let result = a * b;
  return result;
}
console.log("Multiply Arrow:", multiplyArrow(4,7));

// 5. Immediately Invoked Function Expression (IIFE)
// ---------------------------------------------------
// Functions that run as soon as they are defined, useful for creating isolated scopes

(function() {
  console.log("This runs immediately!");
})();

(() => {
  console.log("Arrow function IIFE runs immediately!");
})();

// 6. Interview Questions and Answers
// -----------------------------------

// Q1: What is the difference between function declaration and expression?
// A: Declaration is hoisted and accessible before definition, expression is not.

console.log(declared());  // Works
// console.log(expression()); // Error: Cannot access before initialization

function declared() {
  return "I am a declared function";
}

const expression = function() {
  return "I am a function expression";
}

console.log(expression());

// Q2: What is the rest operator and where can you use it?
// A: It collects multiple arguments into an array in function parameters.

function example(...args) {
  return args.length;
}
console.log("Rest operator example:", example(1,2,3));  // 3

// Q3: What is the difference between global scope and local scope?
// A: Global variables are accessible anywhere; local variables only inside the function/block.

// Q4: When should arrow functions not be used?
// A: Arrow functions do NOT have their own 'this' keyword, so avoid them as object methods or constructors.

// Q5: What is an IIFE and why use it?
// A: It's a function that runs immediately after it’s defined, used to not pollute global scope.

// 7. Practice Challenge
// ---------------------

// Write an arrow function that takes any number of numbers and returns their average:
const average = (...nums) => {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum / nums.length;
};
console.log("Average:", average(5,10,15,20));

// ---------------------------------------
console.log("All function, rest operator, scope, arrow, and IIFE concepts covered!");
