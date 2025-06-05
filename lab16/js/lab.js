// index.js - In this lab we will be learning how to better use JSON and integrate APIs into our programs
//            using the API for the XKCD comic archive
// Author: Liam Engstrom
// Date: June 4th, 2025

// Functions

//loads current comic
$("#currentComic").click(function(){

  //Current comic
  let currentComObj = {
          url: "https://xkcd.com/info.0.json",
          type: "GET",
          dataType: "json"
  }

  // Using the core $.ajax() method
  $.ajax(currentComObj).done(function(data){
    console.log(data);

    //provides the title for the comic
    let comicTitle = data.title;

    //provides the image
    let comicImg = data.img;

    //provides issue Number
    let issueNum = data.num;

    //provides alt text for an image if the image cannot be loaded    
    let altText = data.alt;

    $("#output").append("<h3>" + comicTitle + "</h3><b>Issue #" + issueNum + "</b></br>" 
                        + "<img src='" + comicImg + "'/></br><h4>'" + altText + "'</h4>");
  });
})

$("#userComic").click(function(){
  //user input for comic number
  let userInput = $("#input").val();

  //comic chosen by user
  let userComObj = {
          url: "https://xkcd.com/" + userInput + "/info.0.json ",
          type: "GET",
          dataType: "json"
  }

  $.ajax(userComObj).done(function(data){
    console.log(data);

    //provides the title for the comic
    let comicTitle = data.title;

    //provides the image
    let comicImg = data.img;

    //provides issue Number
    let issueNum = data.num;

    //provides alt text for an image if the image cannot be loaded    
    let altText = data.alt;

    $("#output").append("<h3>" + comicTitle + "</h3><b>Issue: " + issueNum + "</b></br>" + "<img src='" + comicImg + "'/></br>" + altText);
  });
})


//problem was had when we both couldnt figure out why it wouldnt read the files, turns out it was issue
//with CORS unblocker