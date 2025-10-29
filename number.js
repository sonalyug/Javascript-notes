// -----------------------------
// JavaScript Number Notes
// -----------------------------
// Made by: [shivani Bhardwaj]
// -----------------------------

// 1. NUMBER
// Definition: In JavaScript, numbers are used to represent both integer and decimal values.
// Unlike some languages, JavaScript uses a single type 'number' for all numeric values.

let age = 25;             // Integer
let price = 499.99;       // Decimal
let temperature = -5;     // Negative number

console.log("Age:", age);
console.log("Price:", price);
console.log("Temperature:", temperature);

// Checking data type
console.log("Type of age:", typeof age);

// -----------------------------

// 2. NUMBER OBJECT
// We can also create a number object using the Number constructor (not commonly used).

let num1 = new Number(45);
console.log("Number object:", num1);
console.log("Type of num1:", typeof num1); // object

// Simple number literal (most preferred)
let num2 = 45;
console.log("Number literal:", num2);
console.log("Type of num2:", typeof num2); // number

// -----------------------------

// 3. COMMON NUMBER METHODS

// (a) toString() Method
// Converts a number to a string type.

let x = 123;
let strX = x.toString();
console.log("Original number:", x);
console.log("After toString:", strX);
console.log("Type after toString:", typeof strX);

// (b) toFixed() Method
// It rounds the number to a given number of digits after the decimal point.

let priceValue = 123.456789;
console.log("Original value:", priceValue);
console.log("Rounded to 2 decimals:", priceValue.toFixed(2)); // "123.46"
console.log("Rounded to 4 decimals:", priceValue.toFixed(4)); // "123.4568"

// (c) toPrecision() Method
// It formats a number to a specified length (total digits).

let amount = 123.456;
console.log("Original:", amount);
console.log("toPrecision(4):", amount.toPrecision(4)); // "123.5"
console.log("toPrecision(6):", amount.toPrecision(6)); // "123.456"

// (d) valueOf()
// Returns the primitive value of a Number object.

let numObj = new Number(50);
console.log("Using valueOf():", numObj.valueOf()); // 50

// -----------------------------

// 4. NUMBER CONSTANTS
// JavaScript provides many constants inside the Number object.

// (a) MAX_VALUE
// Represents the largest possible numeric value in JavaScript.

console.log("Maximum value that JS Number can hold:", Number.MAX_VALUE);

// (b) MIN_VALUE
// Represents the smallest possible numeric value greater than zero.

console.log("Minimum positive value in JS:", Number.MIN_VALUE);

// (c) POSITIVE_INFINITY and NEGATIVE_INFINITY
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);

// (d) NaN (Not a Number)
// Used when a mathematical operation doesn’t give a real number result.

let invalid = "abc" / 2;
console.log("Invalid Result:", invalid); // NaN
console.log("Is it NaN?", isNaN(invalid));

// -----------------------------

// 5. NUMBER CONVERSIONS

let numStr = "100";
console.log("String to Number using Number():", Number(numStr));

let floatStr = "123.45";
console.log("String to Float using parseFloat():", parseFloat(floatStr));

let intStr = "123.45";
console.log("String to Integer using parseInt():", parseInt(intStr));

// -----------------------------

// 6. MATH OBJECT SHORT USE (EXTRA)
// Math object provides useful static methods for numbers.

console.log("Math.round(4.6):", Math.round(4.6));  // rounds to nearest integer
console.log("Math.ceil(4.1):", Math.ceil(4.1));    // rounds up
console.log("Math.floor(4.9):", Math.floor(4.9));  // rounds down
console.log("Math.max(3,7,9):", Math.max(3,7,9));  // gives max value
console.log("Math.min(3,7,9):", Math.min(3,7,9));  // gives min value

// -----------------------------
console.log("All important Number concepts learned!");
