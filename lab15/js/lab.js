// index.js - To learn how to better understand and utilize APIs and how to properly use AJAX
// Author: Liam Engstrom
// Date: June 2nd 2025

// Constants
//let

// Functions

//The button that should call the API event
$("#activate").click(function(){
  //define API endpoint for fortune cookie
  //let endpoint = "http://www.yerkee.com/api/fortune";
  
  //configure endpoint
  //let ajaxConfig = {
  //url: endpoint, // API URL
  //method: "GET", // HTTP method
  //dataType : "json", // Payload type
  $("#output").append("Testing button</br>");
  let yesnoObj = {
         url: "https://yesno.wtf/api",
         type: "GET",
        dataType: "json"
    }

    $.ajax(yesnoObj)
    .done(function(data){
        console.log(data);

    let word = data.answer;

    $("#output").append("Yes or No API - " + word + "</br>");

    //$("#output").append("Testing button");
  let fortuneObj = {
         url: "http://www.yerkee.com/api/fortune",
         type: "GET",
        dataType: "json"
    }


    $.ajax(fortuneObj)
    .done(function(data){
        console.log(data.fortune);
        console.log("done");

    let phrase = data.fortune;

    $("#output").append("Your fortune: " + phrase  + "</br>");

  });
});
});

//Pokemon weakness test
//shows sprite of pokemon and name
//shows weaknesses and strengths and its own types

//let's the user choose if they want to do a random pokemon or their own

//math random assign to variable and then add 1 to variable.

/*let pokeObj = {
         url: "http://www.yerkee.com/api/fortune",
         type: "GET",
        dataType: "json"
    }


    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);

    let pokemon = data.name;

    $("#output").append(pokemon);


  $("#output").click(function(){
    let 
  });
});*/
