// index.js - Defining and Outputting JS variables
// Author: Liam Engstrom
// Date: April 22nd, 2025

// Define variables
var make = "Honda";
var model = "Civic";
var color = "grey";
var year = 2024;
var ownIt = true;
var age = 2025 - year;

// Output for variables
document.writeln("Make: " + make);
document.writeln("<br>Model: " + model);
document.writeln("<br>Color: " + color);
document.writeln("<br>Year: " + year);
document.writeln("<br>Age: " + age + " year old.");
if(ownIt)
{
  document.writeln("<br>I own this car.");
}