// index.js - Work with functions that accept user input and manipulate strings
// Author: Liam Engstrom
// Date: April 28, 2025

// Functions

// Prompts the user for a user name and then sorts it
function sortUser() 
{
  //prompts and store's user input for a username
  let username = window.prompt("Please Enter a Username: ");

  //maybe remove <h4>?? Causing too much white space, looks weird
  document.writeln("<h4>Username: " + username + "</h4>");

  //Makes first letter of name capital
  //doing this for fun, it's not part of the lab
  
  //username = username.split('');
  //username[0].toUpperCase();
  //username = username.join('');

  //converts the user input into an array, sorts the letters, and then returns the result 
  // .split('') splits it by characters, .sort() sorts the characters, and .join('') to join them back 
  // into a string
  return username.split('').sort().join('');
}

document.writeln("</br>Username sorted by its letters: ", sortUser());


