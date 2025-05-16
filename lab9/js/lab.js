// index.js - Learn how to use jQuery to interact and manipulate our webpage. (how to use buttons)
// Author: Liam Engstrom
// Date: May 12th, 2025


//Button implementation for challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//click listener for challenge button
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

//Button implementation for Problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

//click listener for Problems section
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
   
});

//Button implementation for Results section
$("#results").append("<button id='button-results'>Make Special</button>");

//click listener for results section
$("#button-results").click(function(){
  $("#results").toggleClass("special");
});

