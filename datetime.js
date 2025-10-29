// --------------------------------------------
// JavaScript Date, Time, and Timestamp Notes
// --------------------------------------------
// Made by: [shivani bhardwaj]

// 1. Date Object Overview
// -----------------------
// The Date object is built into JavaScript and lets us work with dates and times.
// You can create Date objects for the current moment, or for any specific date/time.

let now = new Date(); // Current date and time
console.log("Current date/time:", now);

let d1 = new Date("2025-10-28"); // Date from a string (YYYY-MM-DD)
console.log("Specific date:", d1);

let d2 = new Date(2023, 9, 15, 12, 30, 0); // (year, month, day, hour, min, sec)
// Note: months are 0-indexed (0 = January, 11 = December)
console.log("Custom date/time:", d2);

// 2. Important Date Methods
// --------------------------
// Getting date/time components

let sample = new Date("2025-03-15T14:45:22.123Z");

console.log("Year:", sample.getFullYear());        // e.g., 2025
console.log("Month (0=Jan):", sample.getMonth());  // 2 (March, since counting from 0)
console.log("Day of Month:", sample.getDate());    // 15
console.log("Day of Week (0 = Sun):", sample.getDay()); // 6 (Saturday)
console.log("Hours (0-23):", sample.getHours());   // 20 (converts from UTC to local automatically)
console.log("Minutes:", sample.getMinutes());
console.log("Seconds:", sample.getSeconds());
console.log("Milliseconds:", sample.getMilliseconds());

// Setting date/time components
let change = new Date();
change.setFullYear(2022);
change.setMonth(0); // Jan
change.setDate(25);
console.log("Changed date:", change);

// 3. Time & Timestamps
// ---------------------
// What is a Timestamp?
// In JS, a Unix timestamp = milliseconds since Jan 1, 1970 UTC
let timeNow = Date.now(); // returns timestamp in ms
console.log("Timestamp (ms since 1/1/1970):", timeNow);

let dateFromStamp = new Date(timeNow);
console.log("Date from timestamp:", dateFromStamp);

// Use getTime() to get the timestamp of an existing Date object
let dt = new Date();
console.log("getTime():", dt.getTime());

// 4. Formatting Dates & Times
// ----------------------------
// toDateString, toTimeString, toLocaleDateString, toLocaleTimeString

let today = new Date();

console.log("Date string:", today.toDateString());
console.log("Time string:", today.toTimeString());
console.log("Locale date:", today.toLocaleDateString());
console.log("Locale time:", today.toLocaleTimeString());
console.log("ISO string:", today.toISOString());

// 5. Interview-Focused Examples & Questions
// -----------------------------------------

// Q1: How do you find the difference between two dates (in days)?
let dateA = new Date("2025-10-01");
let dateB = new Date("2025-10-28");
let msPerDay = 24 * 60 * 60 * 1000;
let diffDays = Math.round((dateB - dateA) / msPerDay);
console.log("Difference in days:", diffDays); // 27

// Q2: How do you get the current Unix timestamp (in seconds, not ms)?
console.log("Current Unix timestamp (seconds):", Math.floor(Date.now() / 1000));

// Q3: How do you add 7 days to a date?
let baseDate = new Date();
baseDate.setDate(baseDate.getDate() + 7);
console.log("Date after 7 days:", baseDate);

// Q4: How do you display the day of the week as a string (like 'Monday')?
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDayString = days[today.getDay()];
console.log("Today is:", currentDayString);

// Q5: What is getUTCFullYear()? What is the difference from getFullYear()?
// getUTCFullYear() gives year in UTC timezone, getFullYear() gives year in local timezone

let utcYear = today.getUTCFullYear();
let localYear = today.getFullYear();
console.log("UTC Year:", utcYear);
console.log("Local Year:", localYear);

// Q6: How do you check if a date is valid?
let testDate = new Date("invalid-date");
console.log("Is valid date?", !isNaN(testDate.valueOf()));

// Q7: Best way to format date as 'dd-mm-yyyy' string without libraries?
function formatDDMMYYYY(dateObj) {
  let d = dateObj.getDate().toString().padStart(2, '0');
  let m = (dateObj.getMonth()+1).toString().padStart(2, '0');
  let y = dateObj.getFullYear();
  return `${d}-${m}-${y}`;
}
console.log("Formatted:", formatDDMMYYYY(new Date()));

// 6. Practice Challenge
// ---------------------
// Write a function to return the time left until a specific future date, in days and hours.

function timeLeft(futureDate) {
  let diff = futureDate.getTime() - Date.now();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return { days, hours };
}
console.log("Time left to New Year:",
  timeLeft(new Date("2026-01-01T00:00:00")));

// -----------------------------------------
console.log("All important Date & Time topics covered!");
