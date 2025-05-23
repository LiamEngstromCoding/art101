// index.js - purpose and description here
// Author: Liam Engstrom
// Date: May 14th, 2025
//
// Requirements: jQuery must be downloaded for program to work


// variables
let clicked = false;

// Functions

//Generates random text
function generateRandomText(){
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

//Gets user input

function getUserInput(){
  let userinput = $("#userinput").val();
  document.writeln(userinput + "</br>");
  $("#convo").append(userInput + "</br>");
  //return userinput;
}

//NOTE: MAKE IT SO IT MAKES A NEW SECTION EVERY CLICK

//click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue

  //Checks if listener is working by sending msg to console
  //console.log("button is clicked");

  //sets the format of the section after the first msg is clicked
  clicked = true;

  //sends a message to the console with the value the user enters
  console.log($("#userinput").val())
  

  //user sets input
  let userInput = $("#userinput").val()

  //sends the user input to the webpage (user-text is referring to the formatting segment for the user portion)
  $("#user-text").append("</br>" + userInput+ "</br>");
  $("#output").append("</br>" + "User input: " + userInput+ "</br>");

  //random response, sends to webpage after user input is entered and button clicked
  let newText = generateRandomText();
  $("#response-text").append('<div class="text"><p>' + newText + '</p></div>');
  $("#output").append('<div class="text"><p>' + "Response: " + newText + '</p></div>');
  
});

//issue is that it only happens once when you load the page
if(clicked == true){
  $("#response-text").toggleClass("response-text");
  $("#user-text").toggleClass("user-text");
}


//testing text
//$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//click listener for challenge button
/*$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special-text");
});*/

