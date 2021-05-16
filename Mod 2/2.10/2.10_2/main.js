"use strict";
const btn = document.querySelector(".js-dog");

function getDogImage() {
  fetch("https://dog.ceo/api/breed/african/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Otro perrillo";
    });
}

btn.addEventListener("click", getDogImage);
