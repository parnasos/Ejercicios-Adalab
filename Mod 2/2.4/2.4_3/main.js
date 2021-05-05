'use strict';

const sinIVA = 10;
const IVA = sinIVA*0.21;
const total= sinIVA+IVA;

function calculaIVA() {
  return `Precio sin IVA: ${sinIVA}, IVA: ${IVA} y Total: ${total}`;
  
}
console.log(calculaIVA());