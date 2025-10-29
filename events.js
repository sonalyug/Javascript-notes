// -----------------------------------------
// JavaScript Events and Event Propagation
// -----------------------------------------
// By: [shivani bhardwaj]

// 1. What is an Event?
// An event is an action or occurrence detected by the browser, often resulting from user interaction or browser activity.
// Examples: click, keypress, mousemove, load, submit, etc.

// 2. Event Listener
// To react to an event, you attach an event listener (callback function) to an element.

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 3. How Events Work: Event Propagation
// When an event happens on an element, it triggers event listeners in a specific order called Event Propagation.
// It has 3 phases:

// a) Capturing Phase (Event moves from window down to target element)
// b) Target Phase (Event reaches the target element)
// c) Bubbling Phase (Event bubbles up from target back to window)

// Event listeners can be registered for capturing or bubbling phase.

// 4. Adding Event Listeners in Capturing or Bubbling Phase
// addEventListener's third parameter:
// true - use capturing phase
// false or omitted - use bubbling phase

button.addEventListener("click", () => {
  console.log("Capturing phase listener");
}, true);  // capturing

button.addEventListener("click", () => {
  console.log("Bubbling phase listener");
});  // bubbling by default

// 5. Stopping Event Propagation

// a) event.stopPropagation()
// Prevents event from bubbling or capturing further.
// It stops the event from reaching other listeners in other elements.

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Propagation stopped here.");
});

// b) event.stopImmediatePropagation()
// Stops event from propagating and also stops other listeners of the same event on the same element from running.

// c) event.preventDefault()
// Prevents the default browser behavior (e.g., form submission, link navigation)

const link = document.getElementById("myLink");
link.addEventListener("click", (event) => {
  event.preventDefault(); // stop navigation
  console.log("Default action prevented.");
});

// 6. Types of Events (commonly used)

// Mouse events: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
// Keyboard events: keydown, keyup, keypress (deprecated)
// Form events: submit, change, input, focus, blur
// Window events: load, resize, scroll, unload

// 7. Event Object
// The event handler function receives an event object containing details like:
// - event.target (element where event originated)
// - event.currentTarget (element whose listener is running)
// - event.type (type of event, e.g. 'click')
// - Other useful properties and methods like preventDefault(), stopPropagation()

// 8. Event Delegation
// Attaching one event listener on a common parent to handle events of all its child elements.
// Saves memory and simplifies dynamic content event handling.

document.getElementById("parentList").addEventListener("click", (event) => {
  if(event.target && event.target.matches("li.item")){
    console.log("Item clicked:", event.target.textContent);
  }
});

// ---------------------------------------------
// Interview Questions & Answers on Events
// ---------------------------------------------

// Q1: What is event propagation and its phases?
// A: Event propagation is the order in which events happen inside the DOM: capturing (down), target, bubbling (up).

// Q2: How can you stop event propagation?
// A: Use event.stopPropagation() to stop bubbling or capturing to other elements.

// Q3: Difference between stopPropagation and stopImmediatePropagation?
// A: stopPropagation prevents event from going further but other listeners on same element still run.
// stopImmediatePropagation also prevents other listeners on same element from running.

// Q4: What is event delegation and why use it?
// A: Event delegation leverages event bubbling to listen to events on a parent element, reducing memory use and handling dynamic elements.

// Q5: How do you prevent default browser actions on an event?
// A: By using event.preventDefault().

// Q6: Default phase for event listeners: capturing or bubbling?
// A: By default, event listeners listen in the bubbling phase.

// ---------------------------------------------

console.log("All details on DOM events and propagation covered.");
