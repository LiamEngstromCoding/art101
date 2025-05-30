// index.js - Lab 6 - Arrays and Objects
//                    (adding information from arrays to a website)
// Author: Liam Engstrom <ceengstr@ucsc.edu>
// Date: April 4th, 2025

//Define Variables
myTransport = [
  "Bus", 
  "Car", 
  "Uber",
  "Airplane",
  "Walking"
]
var index = 0;

//Create an object for myMainRide
myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Grey",
  year: 2024,
  
  //define function for age that uses current year and year of car
  age: function() {
    return 2025 - this.year;
  }
}

//Output
document.writeln("Kinds of Transportation I Use: "); 
while(index < 5) //cycles through the myTransport array and prints out every element
{
  document.writeln(myTransport[index]);
  index++;
  if(index < 5)
    {
      document.writeln(", ");  //check with professor or TA if there is a more optimized way to go about this
    } 
}
document.writeln("</br></br>My Main Ride: </br>", "Make: " + myMainRide.make + "</br>", 
"Model: " + myMainRide.model + "</br>", "Color: " + myMainRide.color + "</br>",
"Year: " + myMainRide.year + "</br>", "Age: " + myMainRide.age() + " years" + "</br></br>");

