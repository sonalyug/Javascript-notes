// --------------------------------
// JavaScript Truthy and Falsy Values
// --------------------------------
// Made by: [Your Name]

// 1. What are Truthy and Falsy values?
// In JavaScript, values automatically convert to boolean true or false when used in conditions.

// - Truthy: values that convert to true in boolean context.
// - Falsy: values that convert to false.

// 2. List of Falsy Values:
// These values are considered false in conditions:
console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(-0));           // false
console.log(Boolean(""));           // false (empty string)
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false

// Everything else is truthy. Examples:
console.log(Boolean(true));         // true
console.log(Boolean(1));            // true
console.log(Boolean("hello"));      // true (non-empty string)
console.log(Boolean([]));           // true (empty array)
console.log(Boolean({}));           // true (empty object)
console.log(Boolean(function(){})); // true (functions)

// 3. Example in if condition:
let val = 0;
if (val) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");  // This will print because 0 is falsy
}

// 4. Why is understanding truthy and falsy important?
// Because JavaScript uses type coercion for conditions and logical operators,
// knowing which values are truthy or falsy helps avoid bugs and unexpected behavior.

// 5. Interview Questions and Answers

// Q1: What is the difference between truthy and falsy values?
// A: Falsy values convert to false in boolean context; all others are truthy.

// Q2: Name all falsy values in JavaScript.
// A: false, 0, -0, "", null, undefined, NaN are falsy.

// Q3: Is an empty array truthy or falsy?
// A: Truthy; empty arrays convert to true in boolean context.

// Q4: Why do empty strings evaluate to false but empty arrays evaluate to true?
// A: Because empty string ("") is one of the defined falsy values, but arrays are objects and all objects are truthy.

// 6. Practice Challenge
// Write a function that returns 'Yes' if value is truthy and 'No' if falsy:

function isTruthy(val) {
  return val ? "Yes" : "No";
}
console.log(isTruthy(0));      // No
console.log(isTruthy("Hello"));// Yes
console.log(isTruthy(null));   // No
console.log(isTruthy([]));     // Yes

// --------------------------------
console.log("Truthy and Falsy concept complete!");
