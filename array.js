// -----------------------------
// JavaScript Arrays & Methods
// -----------------------------
// Made by: [shivani baardwaj]

// 1. What is an Array?
// ----------------------
// Definition: An array is a special variable that can hold multiple values in a single variable.
// It is an ordered collection where values have an index (starting from 0).

let fruits = ["Apple", "Banana", "Orange"];
console.log("Array:", fruits);
console.log("Type:", typeof fruits); // object

// Arrays can store any data type (numbers, strings, objects, other arrays)
let mixed = [1, "hello", true, [2,3]];
console.log(mixed);

// Creating Arrays:
let arr1 = [10, 20, 30];                // Literal way (most common)
let arr2 = new Array(5, 6, 7);          // Using new Array() constructor (rarely used)
let arr3 = "red,green,blue".split(","); // Using split() from a string

console.log(arr1, arr2, arr3);

// 2. Basic Array Properties
// -------------------------

// .length: Returns the number of elements in the array
console.log("Length:", fruits.length); // 3

// 3. Accessing & Modifying Array Items
// ------------------------------------
console.log("First fruit:", fruits[0]);   // "Apple"
fruits[1] = "Mango";                     // Change value
console.log("Modified array:", fruits);

// 4. Array Methods with Examples
// ------------------------------

// (A) Adding/Removing Elements

let colors = ["red", "green", "blue"];

// push() - Add to end
colors.push("yellow");
console.log("push:", colors); // ["red", "green", "blue", "yellow"]

// pop() - Remove last
colors.pop();
console.log("pop:", colors); // ["red", "green", "blue"]

// unshift() - Add to start
colors.unshift("purple");
console.log("unshift:", colors); // ["purple", "red", "green", "blue"]

// shift() - Remove first
colors.shift();
console.log("shift:", colors); // ["red", "green", "blue"]

// splice() - Add/remove at an index: splice(start, deleteCount, item1,...)
colors.splice(1, 0, "cyan"); // Add "cyan" at index 1
console.log("After splice (insert):", colors); // ["red","cyan","green","blue"]

colors.splice(2, 1); // Remove at index 2
console.log("After splice (remove):", colors); // ["red","cyan","blue"]

// slice() - Copy a portion (doesn't modify original)
let selected = colors.slice(1, 3);
console.log("slice:", selected); // ["cyan", "blue"]

// (B) Searching in Arrays

let animals = ["dog", "cat", "dog", "horse"];

// indexOf() - First occurrence
console.log("indexOf 'dog':", animals.indexOf("dog")); // 0

// lastIndexOf() - Last occurrence
console.log("lastIndexOf 'dog':", animals.lastIndexOf("dog")); // 2

// includes() - Returns true if value found
console.log("includes 'cat':", animals.includes("cat")); // true

// (C) Joining Arrays / Strings

let words = ["Hello", "World"];
console.log("join:", words.join(" ")); // "Hello World"

// (D) Iteration

// forEach() - Run a function on every item
let nums = [1, 2, 3];
nums.forEach(function(n, idx) {
  console.log(`Index ${idx} has value ${n}`);
});

// map() - Create new array by applying a function
let squared = nums.map(x => x * x);
console.log("map (squared):", squared); // [1, 4, 9]

// filter() - Only elements that pass the condition
let evenNums = nums.filter(x => x % 2 === 0);
console.log("filter (even):", evenNums); // [2]

// reduce() - Combine array into single value
let sum = nums.reduce((total, current) => total + current, 0);
console.log("reduce (sum):", sum); // 6

// find() - returns first item to pass the test
let firstEven = nums.find(x => x % 2 === 0);
console.log("find (first even):", firstEven); // 2

// (E) Other Useful Methods

// concat() - Merge arrays
let arrA = [10, 20];
let arrB = [30, 40];
let merged = arrA.concat(arrB);
console.log("concat:", merged); // [10, 20, 30, 40]

// reverse() - Reverse the array in place
let numbers = [1,2,3];
numbers.reverse();
console.log("reverse:", numbers); // [3,2,1]

// sort() - Sort elements (default is by string Unicode code)
let unsorted = [40, 10, 100, 1];
unsorted.sort((a,b)=>a-b); // Give custom compare to sort numerically
console.log("sort:", unsorted); // [1,10,40,100]

// flat() - Flattens nested arrays
let nested = [1, [2, 3], [4, 5]];
console.log("flat:", nested.flat()); // [1, 2, 3, 4, 5]

// 5. Interview Questions and Answers
// ----------------------------------

// Q1: How to find if a value exists in an array?
let arr = ["js", "python"];
console.log(arr.includes("python")); // true

// Q2: How to remove a particular value from an array?
let removeMe = ["apple","banana","mango"];
removeMe.splice(removeMe.indexOf("banana"), 1); // Removes "banana"
console.log(removeMe); // ["apple", "mango"]

// Q3: Difference between slice and splice?
// slice() creates a copy, doesn't change original. splice() modifies array.
// Example:
let arrX = [1,2,3,4];
let sliced = arrX.slice(1,3); // [2,3]
let spliced = arrX.splice(1,2); // arrX now [1,4], returns [2,3]

// Q4: How do you loop over an array?
// Method 1:
for(let i=0; i < arrX.length; i++) {
  console.log(arrX[i]);
}
// Method 2:
arrX.forEach(item => console.log(item));

// Q5: How to convert array to a string?
let food = ["rice","dal","roti"];
console.log(food.join(", ")); // "rice, dal, roti"

// Q6: How to check if all/any element matches a condition?
let vals = [2, 4, 6];
console.log(vals.every(x => x % 2 === 0)); // true (all even)
console.log(vals.some(x => x === 4)); // true (at least one is 4)

// 6. Practice Challenge
// ---------------------
// Write a function to filter out all odd numbers from an array

function filterOdds(arr) {
  return arr.filter(x => x % 2 === 0);
}
console.log("Only even numbers:", filterOdds([1,2,3,4,5,6]));

// ---------------------------------
console.log("All important Array methods & interview tricks covered!");
