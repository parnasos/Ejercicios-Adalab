'use strict';

const button = document.querySelector(".button")
const button2= document.querySelector(".button2")

button.addEventListener ("click", changebackground);
button2.addEventListener ("click", changebackground);

function changebackground(event) {
    const selectedbutton = event.currentTarget;
    selectedbutton.classList.toggle("buttonBG")
}
