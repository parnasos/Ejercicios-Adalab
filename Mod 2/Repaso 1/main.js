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
     const number = Math.round(     Math.random() * 100    );
    return number;
    
 }
  console.log(randomNumber())

 const resetBG = () =>  {
    backgroundBody.classList.remove("body");
    backgroundBody.classList.remove("background2");
    
 } 
const number = randomNumber();
const selectNumber = (number) => {
    if (number %2 === 0) {
backgroundBody.classList.add("body");

    }
    else {
    backgroundBody.classList.add("background2");
    }
}
function refreshMood (event) {
    event.preventDefault();  
 selectMood ()
 randomNumber ()
 resetBG ()
 selectNumber ()
 }
button.addEventListener("click", refreshMood);