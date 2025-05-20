// index.js - This lab will help us learn to take in user input and print out a modified version of said input
// Author: Liam Engstrom
// Date: May 19th, 2025

// Functions

// Sorts characters of a string in alphabetical order
function sortString(inputString) {
  //Have to convert string to and array and back again to sort it
  return inputString.split('').sort().join('');
}

//Event listener for submit button
$("#submit").click(function(){
  //get value of input field
  const userName = $("#user-name").val();
  //calls sort function to sort string 
  userNameSorted = sortString(userName);
  //switches submit button for sorted username after input is received. 
  $("#output").html('<div class = "text"><p> Sorted Username: ' + userNameSorted + '</p></div>');
});

