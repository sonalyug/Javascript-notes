// ------------------------------------------
// JavaScript Spread Operator (...)
// ------------------------------------------
// Made by: [shivani bhardwaj]

// 1. What is the Spread Operator?
// ------------------------------
// Definition: The spread operator is written as '...'. It is used to "spread out" elements of an iterable (like an array, string, or object) into a new array, object, or function arguments.
// It makes copying, merging, and passing data easy and clean.

// Example: Spreading an array into another array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Combines both arrays
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Example: Copying an array (shallow copy)
const arrCopy = [...arr1];
console.log("Copy of arr1:", arrCopy); // [1, 2, 3]

// Example: Spreading a string into characters
const word = "Hello";
const letters = [...word];
console.log("Spread string:", letters); // ['H', 'e', 'l', 'l', 'o']

// 2. Using Spread Operator With Objects
// -------------------------------------
// You can copy and merge objects using the spread operator

const car = { brand: "Ford", color: "red" };
const moreCarInfo = { year: 2021, color: "yellow" };

const updatedCar = { ...car, ...moreCarInfo };
console.log("Updated Car:", updatedCar);
// { brand: "Ford", color: "yellow", year: 2021 }
// Note: If keys match, last value overwrites previous

// 3. Spread Operator in Function Arguments
// ----------------------------------------
// It can also be used to pass array elements as individual arguments

function sum(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log("Sum with spread:", sum(...nums)); // 60

// 4. Spread With Array Destructuring
// -----------------------------------
// Extract individual elements and collect the rest

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...restNumbers] = numbers;
console.log("First:", one); // 1
console.log("Second:", two); // 2
console.log("Rest:", restNumbers); // [3, 4, 5, 6]

// 5. Common Mistake: Only Iterables Can Be Spread
// -----------------------------------------------
// The spread operator works with arrays, strings, and objects with own enumerable properties.
// It does NOT work directly with plain objects as arrays in array context.

const wrong = { a: 10, b: 20 };
// const arrFail = [...wrong]; // Error: object is not iterable as array

// 6. Interview Questions and Answers
// -----------------------------------

// Q1: How does the spread operator differ from rest parameters?
// A: The spread operator "spreads" elements out (expands them), usually in array/object creation or function calls.
//    Rest parameters "collect" or "gather" multiple elements into a single array (in function parameter definitions).

// Q2: How do you merge two arrays using spread operator?
const arrA = [10, 20];
const arrB = [30, 40];
const mergedArr = [...arrA, ...arrB];
console.log("Merged:", mergedArr); // [10, 20, 30, 40]

// Q3: What happens if you spread two objects with some same keys?
const o1 = { a: 1, b: 2 };
const o2 = { b: 99, c: 5 };
const mergedObj = { ...o1, ...o2 };
console.log("Merged object:", mergedObj); // { a: 1, b: 99, c: 5 }
// Last object's matching keys overwrite earlier ones

// Q4: How do you copy an array or object using spread operator?
const original = [10, 20];
const clone = [...original];
console.log("Array clone:", clone); // [10, 20]

const objOriginal = { x: 5, y: 6 };
const objClone = { ...objOriginal };
console.log("Object clone:", objClone); // { x: 5, y: 6 }

// Q5: How to add elements to the beginning and end of an array with spread?
const basic = [20, 30];
const expanded = [10, ...basic, 40];
console.log("Expanded:", expanded); // [10, 20, 30, 40]

// Q6: How can you use spread operator to pass array values into Math.max?
const numbersArr = [1, 7, 3, 25];
console.log("Max value:", Math.max(...numbersArr)); // 25

// Q7: Why is spread operator useful in React and Redux?
// A: It helps make shallow copies of arrays/objects (important for updating immutable state), merging props, and ensuring updates don't mutate original data.

// 7. Practice Challenge
// ---------------------
// Q8: Write a function that takes two arrays and returns a new array with both merged and a unique set (no duplicates).

function mergeUnique(a1, a2) {
  return [...new Set([...a1, ...a2])];
}
console.log("Merge Unique:", mergeUnique([1,2,3],[2,3,4,5])); // [1,2,3,4,5]

// ------------------------------------------
console.log("All spread operator topics covered!");
