"use strict";
const createPromise = () =>
  fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  );
document.body.innerHTML += `<p>Imágenes aleatorias de perros: </p><ul></ul>`;
function getBreedImages() {
  const promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
  ];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      document.body.innerHTML += `<li><img class="dog${
        i + 1
      }" src="" alt="Dog" /></li>`;
      const img = document.querySelector(".dog" + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedImages);
