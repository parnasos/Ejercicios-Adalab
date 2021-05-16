"use strict";

/*fetch("https://api.rand.fun/number/integer")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));

fetch("https://api.rand.fun/text/password?length=30")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));*/

fetch("https://api.rand.fun/text/password?length=50")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));
