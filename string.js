// -----------------------------
// JavaScript String Notes
// -----------------------------
// Made by: [Shivani Bhardwaj]

// 1. STRING
// Definition: A string is a sequence of characters used to represent text.
// Strings in JavaScript can be written in single (' '), double (" "), or backticks (` `).

let firstName = "Shivani";
let lastName = 'Bhardwaj';
let fullIntro = `My name is ${firstName} ${lastName}.`;

console.log(firstName);
console.log(lastName);
console.log(fullIntro);

// -----------------------------

// 2. STRING INTERPOLATION (Template Literals)
// Definition: It allows us to insert variables or expressions inside strings easily using backticks (` `) and ${ } syntax.

let city = "Pune";
let score = 95;

// Old way (without interpolation)
let oldSentence = "I live in " + city + " and my score is " + score;
console.log("Old way:", oldSentence);

// New way (with interpolation)
let newSentence = `I live in ${city} and my score is ${score}`;
console.log("Using Template String:", newSentence);

// We can also perform expressions inside ${ }
let marks = 80;
let result = `My final result is ${marks >= 50 ? "Pass" : "Fail"}!`;
console.log(result);

// -----------------------------

// 3. STRING DECLARATION METHODS
// There are multiple ways to create a string in JavaScript.

// Simple string literal method
let str1 = "Hello World";

// String object method (rarely used)
let str2 = new String("Hello JS World");

console.log("str1:", str1);
console.log("str2:", str2);

// Check types
console.log("Type of str1:", typeof str1); // string
console.log("Type of str2:", typeof str2); // object

// -----------------------------

// 4. COMMON STRING METHODS
// Definition: String methods are built-in functions used to work with string data.

let message = "  JavaScript is awesome!  ";

// length - returns string length
console.log("Length:", message.length);

// toUpperCase() - converts to uppercase
console.log("Uppercase:", message.toUpperCase());

// toLowerCase() - converts to lowercase
console.log("Lowercase:", message.toLowerCase());

// trim() - removes space from both ends
console.log("Trimmed:", message.trim());

// includes() - checks if a string contains a given text
console.log("Includes 'JavaScript':", message.includes("JavaScript"));

// startsWith() and endsWith()
console.log("Starts with 'Java':", message.startsWith("Java"));
console.log("Ends with '!':", message.trim().endsWith("!"));

// slice(start, end)
console.log("Slice(2,10):", message.slice(2, 10));

// replace()
console.log("Replace 'awesome' with 'powerful':", message.replace("awesome", "powerful"));

// split()
let words = message.trim().split(" ");
console.log("Split into words:", words);

// -----------------------------

// 5. __proto__ in Strings
// Definition: Every JavaScript object has a hidden property called __proto__
// which points to another object (its parent prototype).
// For strings, it points to String.prototype which includes all string methods.

let txt = "Hello";

console.log("String value:", txt);
console.log("Accessing prototype:", txt.__proto__);

// You can see the list of methods available for all string objects
// like toUpperCase, slice, substring, includes, etc.

console.log("Does txt have toUpperCase? :", txt.__proto__.hasOwnProperty("toUpperCase"));
console.log("Does txt have split? :", txt.__proto__.hasOwnProperty("split"));

// -----------------------------

// PRACTICE EXAMPLES
let myString = "Learning JavaScript is fun!";

console.log("Original:", myString);
console.log("First 8 letters:", myString.substring(0, 8));
console.log("Replaced:", myString.replace("fun", "amazing"));
console.log("Character at index 2:", myString.charAt(2));
console.log("Index of 'JavaScript':", myString.indexOf("JavaScript"));

// -----------------------------
console.log("All string-related concepts covered successfully!");
