// index.js - Learn how to use anon functions and callbacks, 
//            and how to edit parts of the program with said functions
// Author: Liam Engstrom
// Date: May 8th, 2025


//Variables/Constants
const numArray = [
  1, 2, 3, 4, 5
];

// Functions
// this function takes a number, squares it, then returns the results.
function numSquared(num) {
  //multiplies the given number (num) by itself
  var results = num * num;
  
  //returns the results
  return results;
}

//applies the function squaredNum to the elements of numArray and then prints the results
let squaredArray = numArray.map(numSquared).join(", ");
console.log("Squared Array: " + squaredArray);

//applies the anon function to the elements of numArray and then prints the results
let subtractArray = numArray.map(function(x){
  //subtracts the given number by 1
  var results = x - 1;

  //returns the results
  return results;
}).join(", ");
console.log("Subtracted array: " + subtractArray);

$("#output").html("Squared Array: " + squaredArray + "</br>Subtracted Array: " + subtractArray);


