// -----------------------------------------------
// Detailed JavaScript Loops and Iteration Notes
// -----------------------------------------------
// Made by: [Your Name]

// 1. What is a Loop?
// A loop is a programming structure used to repeat a block of code multiple times.  
// Loops help avoid writing repetitive code and make programs efficient.

// Example: Printing numbers 0 to 4 without loops
// console.log(0);
// console.log(1);
// ... repetitive and long code

// Instead, use a loop to automate repetition.

// -------------------------------------------------------

// 2. For Loop: Most Common Loop for Repeating Code

// Structure:
// for (initialization; condition; update) {
//    // code to repeat
// }

// Explanation:
// - Initialization: Run once before loop starts, typically to set a counter.
// - Condition: Checked before each iteration; if true, loop continues.
// - Update: Runs at the end of each iteration, usually to increment or decrement counter.

console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
// Here, i starts at 0, runs while less than 5, increases by 1 each loop.

// -------------------------------------------------------

// 3. While Loop: Repeat While Condition is True

// Structure:
// while (condition) {
//    // code to repeat
// }

// Explanation:
// Checks the condition before running the code.  
// If condition is false initially, code won’t run at all.

let j = 0;
console.log("While Loop Example:");
while (j < 3) {
  console.log(j);
  j++; // Increment is essential, else infinite loop!
}
// Output: 0 1 2

// -------------------------------------------------------

// 4. Do-While Loop: Run Once Then Repeat While Condition is True

// Structure:
// do {
//    // code to run
// } while (condition);

// Explanation:
// Runs the code block at least once, then checks condition.

let k = 0;
console.log("Do-While Loop Example:");
do {
  console.log(k);
  k++;
} while (k < 2);
// Output: 0 1

// -------------------------------------------------------

// 5. For...in Loop: Loop Over Object Properties

// Structure:
// for (let key in object) {
//    // code using key or object[key]
// }

// Explanation:
// Designed to iterate over all enumerable property keys of an object.

const person = {name: "Amar", age: 30};
console.log("For...in Loop Example:");
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
// Output:
// Key: name, Value: Amar
// Key: age, Value: 30

// -------------------------------------------------------

// 6. For...of Loop: Loop Over Iterable Collections (like Arrays)

// Structure:
// for (let value of iterable) {
//   // use value
// }

// Explanation:
// Used to loop over array values or other iterable objects.

const arr = [10, 20, 30];
console.log("For...of Loop Example:");
for (let value of arr) {
  console.log(value);
}
// Output: 10 20 30

// -------------------------------------------------------

// 7. Array.map() Method: Path to Functional Programming

// Description:
// The map() method creates a new array with the results of calling a provided function on every element.

// Example: Square each number in an array
const numbers = [1, 2, 3];
console.log("Array.map Example:");
const squares = numbers.map(function(x) {
  return x * x;
});
console.log(squares); // Output: [1, 4, 9]

// Arrow function version (modern):
const squaresArrow = numbers.map(x => x * x);
console.log(squaresArrow); // Output: [1, 4, 9]

// Why use map instead of loops?
// - Cleaner, shorter code.
// - Returns a new array without changing the original.
// - Fits functional programming style.

// -------------------------------------------------------

// 8. Break and Continue with Loops

// break: Exit the loop immediately
console.log("Break in loop:");
for(let i = 0; i < 5; i++) {
  if(i === 3) break;    // stop when i=3
  console.log(i);
}
// Output: 0 1 2

// continue: Skip current iteration and continue with next one
console.log("Continue in loop:");
for(let i = 0; i < 5; i++) {
  if(i === 2) continue; // skip when i=2
  console.log(i);
}
// Output: 0 1 3 4

// -------------------------------------------------------

// 9. Interview Questions & Answers

// Q1: What is the difference between for...in and for...of?
// A: for...in loops over keys (property names), used mainly for objects.
//    for...of loops over values in iterable objects like arrays.

// Q2: When should you use map() vs for loops?
// A: Use map() when you want to transform each element and get a new array.
//    Use for loops for general-purpose iteration or when you need custom control like breaks.

// Q3: What is the difference between while and do-while loops?
// A: while checks condition before running loop body; do-while runs once before condition check.

// Q4: What do break and continue do inside loops?
// A: break exits the loop immediately; continue skips current iteration and continues with next.

// -------------------------------------------------------

// Summary: 
// Loops automate repetitive tasks in JS.
// Use for loops when number of iterations is known.
// Use while when you iterate until a condition changes.
// Use for...in for objects, for...of and map for arrays.
// map method helps make code concise and functional.

// -------------------------------------------------------

console.log("Loop concepts with examples and explanations completed!");
