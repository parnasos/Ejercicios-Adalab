'use strict';


function getEl(a) {
    const result =document.querySelector(a);
    if (result === null) {
     console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
    } else {
return result;
}
}
const pElement = getEl('.prueba');
const numberInstring = pElement.innerHTML;
const number = parseInt(numberInstring);

const result = number % 2;
if (result===0) {
  return true;
}
  return false;
};



/*function parOimpar(number) {
const result = number % 2;

  if (result===0) {
    return true;
  }
    return false;
  };

console.log(parOimpar(5));*/