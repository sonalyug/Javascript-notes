// ------------------------
// JavaScript Hoisting Notes
// ------------------------
// Made by: [shivani bhardwaj]

// 1. What is Hoisting?
// --------------------
// Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their scope (global or function) before code execution.
// This means you can use functions and variables before they are actually declared in the code.

// 2. Hoisting with Variables (var)
// -----------------------------------
console.log(x);    // Output: undefined (not error!)
var x = 5;
// Explanation:
// The declaration 'var x;' is hoisted to the top,
// but the assignment 'x = 5;' stays where it is.
// So during console.log, x exists but is undefined.

// Equivalent to:
var x;
console.log(x);    // undefined
x = 5;

// 3. Hoisting with let and const
// --------------------------------
// let and const declarations are hoisted but NOT initialized.
// Accessing before initialization causes a ReferenceError.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

// This happens because let and const have a "temporal dead zone" from the start of their scope until they are declared.

// 4. Hoisting with Functions
// --------------------------
// Function declarations are completely hoisted, including their body.

printName();  // Works and prints "Hello!"

function printName() {
  console.log("Hello!");
}

// Function expressions (functions assigned to variables) behave like variable hoisting.

printAnon(); // TypeError: printAnon is not a function
var printAnon = function() {
  console.log("Anonymous function");
};

// Here, 'var printAnon' is hoisted (initialized as undefined),
// but the assignment to the function happens later.

// 5. Summary Table
// -----------------
// | Declaration Type       | Hoisted?       | Initialized?           | Can Use Before Declaration?    |
// |------------------------|----------------|-----------------------|--------------------------------|
// | var (variable)          | Yes            | No (undefined value)  | Yes (returns undefined)        |
// | let (variable)          | Yes            | No                    | No (ReferenceError)            |
// | const (variable)        | Yes            | No                    | No (ReferenceError)            |
// | Function Declaration    | Yes (full fn)  | Yes                   | Yes (function works fully)     |
// | Function Expression     | var hoisted    | No (undefined)        | No (TypeError if called early) |

// 6. Interview Questions and Answers
// -----------------------------------

// Q1: What is hoisting in JavaScript?
// A: Hoisting moves variable and function declarations to the top of their scope before code runs.

// Q2: Can you use a variable declared with 'var' before its declaration?
// A: Yes, but it will be undefined because only declaration is hoisted, not initialization.

// Q3: What happens if you use 'let' or 'const' before declaration?
// A: It causes a ReferenceError due to the temporal dead zone.

// Q4: Are function declarations hoisted?
// A: Yes, the full declaration and body are hoisted, so you can call them before defining.

// Q5: What about function expressions?
// A: Only the variable declaration is hoisted, not the function assignment. Calling early leads to TypeError.

// 7. Practice Challenge
// ---------------------

// Predict the output of this code:
console.log(foo);   // ?

var foo = "bar";

baz();

function baz() {
  console.log("baz is called");
}

// Answer:
// console.log(foo) → undefined (var variable, declaration hoisted)
// baz() → prints "baz is called" (functions fully hoisted)

// --------------------------------

// End of Hoisting Notes
console.log("Hoisting concept complete!");
