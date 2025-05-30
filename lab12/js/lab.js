// index.js - To learn how to use conditionals
// Author: Liam Engstrom
// Date: May 22nd, 2025


// Functions

// Function that takes a name, and returns a starter pokemon. 
function sortingHat(name) {
  //counts length of name
  let nameLength = name.length;
  console.log(nameLength);
  //sets the variable to a number between 0 and 3
  let mod = nameLength % 4;

  //assigns the user a starter pokemon based on the length of their name
  if(mod == 0)
  {
    starter = "Charmander";
    $("#output").html("<img id='charmander' src='img/charmander.png'/>");
  }
  else if(mod == 1)
  {
    starter = "Squirtle";
  }
  else if(mod == 2)
  {
    starter = "Bulbasaur";
  }
  else if(mod == 3)
  {
    starter = "Pikachu";
  }
  else
  {
    //let's me know there's an error with the conditional
    starter = "error";
  }

  return starter;
}

$("#button").click(function(){
  let name = $("#input").val();
  let starter = sortingHat(name);
  $("#output").html("</div>Your starter is... </div>" + "<div id='" + starter
    + "' type = text>" + starter + "</div>" + "<img id='" + starter + "' src='img/" + starter + ".png'/>"); // starter is a function call, there's no return
  //trying to print out the image of the pokemon

})