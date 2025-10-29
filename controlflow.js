// --------------------------------
// JavaScript Control Flow Notes
// --------------------------------
// Made by: [shivani bhardwaj]

// 1. Control Flow in JavaScript
// JavaScript code executes line by line but control flow statements let us change this order.

// ----------------------------------------------

// 2. If-Else Statement (review)
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ----------------------------------------------

// 3. Switch Statement - Detailed Explanation
// Used for checking a value (expression) against multiple possible cases.
// Code executes the matching case and continues until 'break' is found or block ends.

let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;         // stops further cases from executing
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    // no break here means code "falls through" to next case as well
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}

// Explanation of switch:
// - The switch compares 'day' to each case in order.
// - When it matches '3', it prints "Wednesday".
// - Because no break after case 3, it also prints "Thursday" (fall-through).
// - break keyword is used to stop executing further cases after a match.

// ----------------------------------------------

// 4. The 'break' Keyword
// Used mainly to:
// - Exit a switch case after running matching code.
// - Exit loops early when a condition is met.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;         // stops the loop completely at i=3
  }
  console.log(i);
}
// Output: 1 2

// ----------------------------------------------

// 5. The 'continue' Keyword
// Used in loops to skip the current iteration and continue with the next one.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;      // skips console.log for i=3, continues loop with i=4
  }
  console.log(i);
}
// Output: 1 2 4 5

// ----------------------------------------------

// 6. Logical Operators (review)
let a = true, b = false;
console.log("a && b:", a && b); // false
console.log("a || b:", a || b); // true
console.log("!a:", !a);          // false

// ----------------------------------------------

// 7. Nullish Coalescing (??) Operator (review)
let userScore = 0;
console.log(userScore || 10);  // 10 (0 is falsy)
console.log(userScore ?? 10);  // 0  (0 is not null or undefined, so left side)

// ----------------------------------------------

// 8. Ternary Operator (review)
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Status:", status);

// ----------------------------------------------

// 9. Interview Q&A on break and continue, and switch

// Q1: What does the break statement do inside a switch or loop?
// A: It immediately stops the current switch case or loop, preventing further code execution in that block.

// Q2: What is the continue statement used for?
// A: It skips the current loop iteration and moves to the next iteration.

// Q3: Explain 'fall-through' behavior in switch statements.
// A: If a case does not have a break, execution continues into the next case(s) until break or end is encountered.

// Q4: Why use switch instead of multiple if-else blocks?
// A: Switch improves readability when checking one variable against many values.

// ----------------------------------------------

// Final confirmation
console.log("Control flow concepts with break, continue, and switch explained!");
