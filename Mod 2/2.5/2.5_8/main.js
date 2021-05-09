'use strict';

const button = document.querySelector(".button")

button.addEventListener ("click", changebackground);

function changebackground() {
    if (button.classList.contains("buttonBG")) {
    button.classList.remove("buttonBG")
}
else {
    button.classList.add("buttonBG");
}
}