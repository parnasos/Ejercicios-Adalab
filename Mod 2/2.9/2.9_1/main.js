"use strict";
const hundred = [];
let number = 0;

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    hundred.push(number + 1);
    console.log(hundred[i]);
    number++;
  }
}
get100Numbers();
