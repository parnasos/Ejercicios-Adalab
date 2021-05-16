"use strict";

/*fetch("https://api.rand.fun/number/integer")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));

fetch("https://api.rand.fun/text/password?length=30")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));*/

fetch("https://api.rand.fun/text/password?length=50")
  .then((response) => response.html())
  .then((data) => (document.body.innerHTML = data.result))
  .catch((error) => console.log(`Ha sucedido un ${error}`));
//Me advierte la consola de que response.html no es una función.
