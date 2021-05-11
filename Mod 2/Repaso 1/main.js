'use strict';
 const button = document.querySelector(".js-button");
const  faceSelected = document.querySelector(".js-form__options")
const title = document.querySelector(".js-face");
const backgroundBody = document.querySelector(".js-body")


 

 

 function selectMood () {
     const moodSelected = faceSelected.value;
     if (moodSelected === "sad") {
title.innerHTML = ":("
     }
     else {
        title.innerHTML = ":)";
     }     
 }

 function randomNumber () {
     const number = Math.random() * (100 - 0) + 0;
    return number
    
 };
  

function selectNumber () {
    const number = randomNumber();
    if (number %2 === 0) {
backgroundBody.classList.remove("body");
backgroundBody.classList.add("background2");
    }
    else {}
}
function refreshMood (event) {
    event.preventDefault();  
 selectMood ()
 randomNumber ()
 selectNumber ()
 }
button.addEventListener("click", refreshMood);