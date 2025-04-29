//create a variable called carName and assign it value of "Taurus
let carName = "Taurus";
console.log("Make: " + carName);

//create variable called carYear with value of 1995 and display it
let carYear = 1995;
console.log("Year: " + carYear);

//create and assign a variable called currentYear
let currentYear = 2025;


//Assign carAge to the currentYear minus carYear and display it
let carAge = currentYear - carYear;
console.log("Car age: " + acarAge);

//4-22-2025

//lab 5
/*let make = "Honda";
let model = "Civic";
let color = "grey";
let year = 2024;
let ownIt = true;
let age = 2025 - year;

console.log("The car is a " + color + " " + make + " " + model + " made in the year " + year);
console.log("The car is " + age + " years old");
if(ownIt)
{
    console.log("I do own this car");
}*/

let myTransport = [
    "Bus", 
    "Car", 
    "Uber",
    "Airplane",
    "Walking"
]

var myMainRide = {
    make: "Honda",
    model: "Civic",
    color: "Grey",
    year: 2024,
    age: function() {return 2025 - this.year;}
}


console.log("My Transportation: " + myTransport);
console.log("My Ride: " + myMainRide.make + myMainRide.model
     + myMainRide.color + myMainRide.year + myMainRide.age);