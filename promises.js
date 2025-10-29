// --------------------------------------------
// JavaScript API Calls, Promises, Async/Await, and Fetch API
// --------------------------------------------
// By: [shivani bhardwaj]

// 1. What is an API call?
// API (Application Programming Interface) calls are requests sent from your frontend code to a server to get or send data.

// Example use case: Fetching user data from a server.

// 2. What are Promises?
// Promises represent a value that may be available now, later, or never. They help handle asynchronous operations in JS.

// Promise states:
// - Pending: Initial state, operation not completed yet
// - Fulfilled: Operation completed successfully
// - Rejected: Operation failed

// 3. Creating and Using a Promise Example

const myPromise = new Promise((resolve, reject) => {
  // Simulate an async task with timeout
  setTimeout(() => {
    const success = true; // toggle this to false to test rejection
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

// Using then() and catch() to handle promise outcomes:
myPromise
  .then(result => {
    console.log("Then:", result);  // Runs on resolve
  })
  .catch(error => {
    console.error("Catch:", error); // Runs on reject
  });

// 4. Fetch API: Native Browser API for making HTTP requests

// Simple GET request example:
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    // response.ok checks HTTP status 200-299
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse JSON body of response
  })
  .then(data => {
    console.log("Fetched Data:", data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

// 5. Async/Await: Clean way to write async code

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("Async/Await Data:", data);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

fetchData();

// 6. Handling POST requests with Fetch
async function postData() {
  const post = {
    title: "foo",
    body: "bar",
    userId: 1
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",             // HTTP POST method
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)  // Send data as JSON string
    });

    if (!response.ok) {
      throw new Error("Failed to post: " + response.statusText);
    }

    const result = await response.json();
    console.log("Post Response:", result);
  } catch (error) {
    console.error("Post Error:", error);
  }
}

postData();

// 7. Promise chaining example for multiple async operations
myPromise
  .then(result => {
    console.log("First then:", result);
    return "Passing data to next then";
  })
  .then(msg => {
    console.log("Second then:", msg);
  })
  .catch(error => {
    console.error("Error in chain:", error);
  });

// 8. Interview Questions and Answers

// Q1: What is a Promise and why is it useful?
// A: A Promise represents an asynchronous operation’s eventual result, helping avoid "callback hell" and making async code readable.

// Q2: How does fetch() differ from XMLHttpRequest?
// A: fetch() returns a Promise and has a more modern, cleaner API for making HTTP requests.

// Q3: Explain how async/await improves promise handling.
// A: async/await lets you write asynchronous code in a synchronous style, simplifying chaining and error handling.

// Q4: How do you handle HTTP errors with fetch?
// A: Check response.ok; if false, throw an error to be caught in catch().

// Q5: Can you POST data using fetch? Give an example.
// A: Yes, use fetch with method POST, set appropriate headers, and stringify the JSON body.

// Q6: What states can a Promise be in?
// A: Pending, Fulfilled, Rejected.

// Q7: How do you catch errors in Promise chains?
// A: Using .catch() method at the end of the chain.

// --------------------------------------------

// Summary:
// - Promises represent async results and have three states.
// - fetch() provides an easy native API for HTTP requests returning promises.
// - async/await syntax improves readability and error handling.
// - Proper error checks are vital for reliable API calls.
// - Promise chaining and catch handle multiple async operations and errors.

// --------------------------------------------
// Final
console.log("API calls, Promises, Async/Await, and Fetch API concepts covered!");
