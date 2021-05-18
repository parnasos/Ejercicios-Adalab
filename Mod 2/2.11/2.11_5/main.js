"use strict";

const form = document.querySelector(".js-form");
//let themeSelect = "";
const body = document.querySelector(".body");

function choose(ev) {
  const themeSelect = ev.target.value;
  if (themeSelect === "light") {
    body.classList.remove("bg2");
    body.classList.add("bg1");
  } else if (themeSelect === "dark") {
    body.classList.remove("bg1");
    body.classList.add("bg2");
  }
}

function handlerTheme() {
  //console.log(themeSelect);
  choose();
}

form.addEventListener("click", handlerTheme);
