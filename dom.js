// ------------------------------------------
// JavaScript DOM Manipulation Notes
// ------------------------------------------
// By: [shivani bhardwaj]

// The DOM (Document Object Model) is the browser's representation of the HTML document as a tree of objects. 
// JavaScript can interact and change this structure dynamically — this is called DOM Manipulation.

// ------------------------------------------------------------
// 1. Selecting Elements
// To manipulate elements, you first need to get a reference to them.
// Common methods:

// Select element by ID
const header = document.getElementById("header");

// Select first element by CSS selector
const firstLink = document.querySelector("a");

// Select all elements by class name (returns HTMLCollection)
const itemsByClass = document.getElementsByClassName("item");

// Select all elements by tag name (returns HTMLCollection)
const divs = document.getElementsByTagName("div");

// Select all elements by CSS selector (returns NodeList)
const allBtns = document.querySelectorAll("button");

// ------------------------------------------------------------
// 2. Editing Elements

// 2.1 Change Text Content
// textContent changes only the text, ignoring any contained HTML tags
header.textContent = "New Heading Text";

// 2.2 Change HTML content
// innerHTML lets you get/set full HTML inside an element
firstLink.innerHTML = "<strong>Bold Link Text</strong>";

// 2.3 Change attributes
// Example: Change href attribute of a link
firstLink.setAttribute("href", "https://www.mozilla.org");

// 2.4 Change CSS Styles
// Inline styles can be modified
header.style.color = "blue";
header.style.fontSize = "24px";

// ------------------------------------------------------------
// 3. Adding Elements

// 3.1 Create a new element
const newParagraph = document.createElement("p");

// 3.2 Create a text node (optional if you want to add text)
const textNode = document.createTextNode("Hello, this is a new paragraph!");

// 3.3 Append the text to the paragraph
newParagraph.appendChild(textNode);

// 3.4 Append the new paragraph to a parent element (like body)
document.body.appendChild(newParagraph);

// Simplified: newParagraph.textContent = "Hello, this is a new paragraph!";

// ------------------------------------------------------------
// 4. Inserting Elements in Specific Positions

// Get reference to parent and a reference child element
const parent = document.getElementById("container");
const referenceElement = document.getElementById("firstChild");

// Insert newParagraph before referenceElement
parent.insertBefore(newParagraph, referenceElement);

// ------------------------------------------------------------
// 5. Removing Elements

// 5.1 Remove using parentNode and removeChild
const childToRemove = document.getElementById("removeMe");
childToRemove.parentNode.removeChild(childToRemove);

// 5.2 Modern method: remove() on element directly
childToRemove.remove();

// ------------------------------------------------------------
// 6. Replacing Elements

// 6.1 Create a new element to replace old one
const newDiv = document.createElement("div");
newDiv.textContent = "I replaced the old element";

// 6.2 Replace using replaceChild on the parent
const oldElement = document.getElementById("oldDiv");
oldElement.parentNode.replaceChild(newDiv, oldElement);

// ------------------------------------------------------------
// 7. Cloning Elements

// 7.1 Clone node (true means deep clone incl children)
const clone = newDiv.cloneNode(true);

// 7.2 Append clone somewhere
document.body.appendChild(clone);

// ------------------------------------------------------------
// 8. Practical Example: Add, Edit, Remove buttons

/*
Assume HTML structure:
<div id="toDoList">
  <p id="task1">Task 1<button id="removeTask1">Remove</button></p>
</div>
<button id="addTask">Add Task</button>
*/

const toDoList = document.getElementById("toDoList");
const addBtn = document.getElementById("addTask");

addBtn.addEventListener("click", () => {
  const newTask = document.createElement("p");
  newTask.textContent = "New task ";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    newTask.remove();
  });
  newTask.appendChild(removeBtn);
  toDoList.appendChild(newTask);
});

// ------------------------------------------------------------
// 9. Interview Questions & Answers

// Q: How do you select an element by ID?
// A: Use document.getElementById("id")

// Q: How can you change the text inside an element?
// A: Using element.textContent or element.innerHTML (if HTML tags needed)

// Q: How do you add a new element to the DOM?
// A: Create using document.createElement, then append via appendChild or insertBefore

// Q: How do you remove an element?
// A: Use element.remove() or parentNode.removeChild(element)

// Q: What is the difference between textContent and innerHTML?
// A: textContent changes only text and ignores HTML tags, innerHTML parses and interprets HTML tags

// Q: How to attach event listeners when adding elements dynamically?
// A: Use element.addEventListener before appending or use event delegation at a higher parent

// ------------------------------------------------------------
// Summary: 
// DOM manipulation includes selecting elements, changing content, adding or removing elements, and updating attributes or styles.
// These actions enable dynamic and interactive web pages.
// Mastery over these makes you strong in front-end development and helps in interviews.

// ------------------------------------------------------------

console.log("DOM manipulation concepts detailed and executed!");
