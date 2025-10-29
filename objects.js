// ----------------------------------------
// JavaScript Object Notes
// ----------------------------------------
// Made by: [shivani bhardwaj]

// 1. What is an Object?
// ----------------------
// Definition: In JavaScript, an object is a collection of key-value pairs (properties).
// Each property is defined as key: value.
// Objects can store strings, numbers, booleans, arrays, functions, or even other objects.

const person = {
  name: "shivani",
  age: 30,
  skills: ["JS", "React"],
  isActive: true
};
console.log(person);

// 2. How to Access Properties
// ---------------------------
// Dot notation:
console.log("Name:", person.name);

// Bracket notation:
console.log("Skills:", person["skills"]);// the is written in "" formation when used bracket notation

// 3. How to Change/Add Properties
// -------------------------------
person.age = 26;                         // Update value
person.country = "India";                // Add new property
console.log(person);

// 4. How to Create an Object
// --------------------------
// i) Object Literal (most common, as above)
// ii) Using Object.create()
const animal = Object.create({});
animal.type = "Dog";
console.log(animal);

// iii) Using Constructor Function
function Bike(model, speed) {
  this.model = model;
  this.speed = speed;
}
const bike1 = new Bike("Honda", 100);
console.log(bike1);

// iv) ES6 Class (modern way)
class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
}
const car1 = new Car("Maruti", 2022);
console.log(car1);

// 5. Singleton Pattern
// ---------------------
// Singleton restricts object creation to only one instance.

const Singleton = (function () {
  let instance;
  function createInstance() {
    return { message: "I am the only instance!" };
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("Are both singletons same?", s1 === s2); // true

// 6. Combining/Merging Objects
// ----------------------------
const objA = { x: 1, y: 2 };
const objB = { y: 20, z: 30 };
const merged = { ...objA, ...objB };  // Spread operator (last keys overwrite)
console.log(merged);

// 7. Object Destructuring
// --------------------------
// Unpack specific properties into variables

const student = { name: "Amit", roll: 7, marks: 88 };
// Simple destructuring
const { name, marks } = student;
console.log("Name:", name, "Marks:", marks);

// Default value and rename variable
const { roll, city = "Pune" } = student;
console.log("Roll:", roll, "City:", city);

// Nested object destructuring
const data = { point: { x: 5, y: 10 }, label: "Dot" };
const { point: { x, y }, label } = data;
console.log(x, y, label);

// 8. Useful Object Methods
// -----------------------
// Object.keys() - Array of property names
console.log("Keys:", Object.keys(person)); // ["name", "age", "skills", "isActive", "country"]

// Object.values() - Array of property values
console.log("Values:", Object.values(person));

// Object.entries() - Array of [key, value] pairs
console.log("Entries:", Object.entries(person));

// Object.assign() - Merge objects (alternative to spread)
let newObj = Object.assign({}, objA, objB);
console.log("assign merged:", newObj);

// 9. Interview Questions and Answers
// ----------------------------------
// Q1: How do you access a property with a variable key?
const key = "name";
console.log(person[key]); // "Rahul"

// Q2: How do you check if a property exists in an object?
console.log("country" in person); // true

// Q3: How do you clone (shallow copy) an object?
const copy = { ...person }; // or Object.assign({}, person)
console.log(copy);

// Q4: What is prototype inheritance in JavaScript?
// All JS objects inherit properties/methods from their prototype. For example:
console.log(person.__proto__ === Object.prototype); // true

// Q5: How do you freeze an object so it cannot change?
const frozen = Object.freeze({ a: 1, b: 2 });
frozen.a = 99; // No effect
console.log(frozen.a); // 1

// Q6: How do you loop through all properties of an object?
for (let prop in person) {
  if (person.hasOwnProperty(prop)) {
    console.log(`${prop}: ${person[prop]}`);
  }
}
// Or using Object.keys():
Object.keys(person).forEach(prop => {
  console.log(`${prop}: ${person[prop]}`);
});

// Q7: How can you destructure and get the rest of properties?
const { name: studentName, ...others } = student;
console.log(studentName, others); // "Amit" {roll: 7, marks: 88}

// Q8: Explain making a constructor and how it helps:
function User(username) {
  this.username = username;
  this.isAdmin = false;
}
const user1 = new User("john123");
const user2 = new User("jane456");
console.log(user1, user2);

// 10. Practice Challenge
// ----------------------
// Write a function to merge two objects and show only unique (non-overlapping) keys from both

function mergeUniqueKeys(o1, o2) {
  let both = { ...o1, ...o2 };
  return Object.fromEntries(
    Object.entries(both).filter(
      ([key]) => !(key in o1 && key in o2)
    )
  );
}
console.log("Unique keys:", mergeUniqueKeys({ a: 1, b: 2 }, { b: 99, c: 22 })); // {a:1, c:22}

// ---------------------------------------
console.log("All Object topics and tricks covered!");
