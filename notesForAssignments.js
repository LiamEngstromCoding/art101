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


//in-class work 4/28/2025
function reverseString(text)
{
  
  return text.split('').reverse().join('');
}

let phrase = "Crazy Eights";

let reversedPhrase = reverseString(phrase);

console.log(reversedPhrase);


//lab 10??

//html
//<div id = "convo">our convo</div>

//<input id="userinput" type = text></input>

//<button id = "action"> say something </button>

//javascript

$("#action").click(
    function(){
        //what will happen when the button is clicked
        console.log("button is clicked");
        //find the box

        //usertext = $("userinput").val("asdf");

        console.log($("#userinput").val())
        //and its contents
        

        //copy the content
        let usertext = $("#userinput").val()

        //copy where? div convo
        $("#convo").append(usertext+ "</br>");
    }
)

//In class

//html
//<input id="inputField" type = "text" placeholder ="Your name">
//button id ="inputButton">Submit</button>
//<div id = "output"></div>

$("#inputButton").click(function(){

    //get user input from form field with .val();
    let name = $("#inputField").val();

    //now select your output div and replace the html() with name
    $("#output").html(name);

});

//lab 12?

//missing html
//<jquery link>
//<h1>Password: elseif</h1>
//<p><input type=text id=factor1>
//
//<p><button id=button>me button</button>


//<div id=output style=

$("#button").click(function{
    
    let score = 0;

    let factor1=$("#factor1").val();
    let factor2=$("#factor2").val();
    let factor3=$("#factor3").val();
    
    if(factor1=="yes"){
        score=score+1;
    }
    else if(factor1=="elephant"){
        score=score+3;
    }
    
    if(factor2=="yes"){
        score=score+1;
    }
    
    if(factor3=="yes"){
        score=score+1;
    }
    
    if(score<3){
        $("#output").append("you are fired!");
    }
    else {
        $("#output").append("you are good for now!");
    }
    
    $("#output").append(score);
});

//more after section

function sortNameInto(num){
    let remainder=num%4;
    if (remainder==0){
        "You are a squirrel!"};
    if (remainder ==1){
        answer= your are an earth squirrel"}};
    if(remainder==2){
        answer = "your are a mole"
    };
    if(remainder ==3){

    return remainder;}
};

$("#button").click(function(){
    let name=$("#factor1").val();
    console.log(name);
    let nnum=name.length;
    console.log(num);

    if(num>0){
        ($"output").html("too much");
        
    }
    else if(num>0){
        let result -sortNameInto(num);
        $("#output").html(result);
    }
    else{
        $("output").html("#please say something")
    }
    }

    let result=sortNameInto(num);
    console.log(answer);
})


//lab 12 or 13?
console.log("print all numbers: ");
for(i = 0; i <= 100; i++)
  {
    if(i % 3 == 0 && i % 5 == 0)
      {
        console.log("FizzBuzz!");
      }
    else if(i % 3 == 0)
      {
        console .log("Fizz!");
      }
    else if(i % 5 == 0)
      {
        console.log("Buzz!");
      }
    else{
      console.log(i);
    }
    
  }