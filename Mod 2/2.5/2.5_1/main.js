'use strict';

//let query = document.querySelector(".query")

function getEl(a) {
    const result =document.querySelector(a);
    if (result === null) {
     console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
    }
return result;

}

const texto = getEl('x');

console.log(texto);