'use strict';


function getEl(a) {
    const result =document.querySelector(a);
    if (result === null) {
     console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
    }
return result;
}
const texto = getEl('.prueba');
texto.innerHTML = parseInt (texto);
console.log(texto);




/*function parOimpar(number) {
const result = number % 2;

  if (result===0) {
    return true;
  }
    return false;
  };

console.log(parOimpar(5));*/