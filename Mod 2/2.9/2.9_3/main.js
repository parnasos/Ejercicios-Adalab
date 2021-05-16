"use strict";
//const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
const tripleNumbers = [];

function bestLostNumber() {
  const lostNumbers = [4, 8, 15, 16, 23, 42];
  for (let i = 0; i < 6; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenNumbers.push(lostNumbers[i]);
    } else if (lostNumbers[i] % 3 === 0) {
      tripleNumbers.push(lostNumbers[i]);
    }
  }
  const result = evenNumbers.concat(tripleNumbers);
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  //console.log(evenNumbers);
  //console.log(tripleNumbers);
}

bestLostNumber();
