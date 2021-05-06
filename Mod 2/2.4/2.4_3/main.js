'use strict';

const result=document.querySelector(".text");

function calculaIVA(price) {
    const IVA = price*0.21;
  const total= price+ IVA;
 
  result.innerHTML += `El precio es: ${price}, IVA: ${IVA} y Total: ${total}`;
}
//const result = `El precio es: ${price}, IVA: ${IVA} y Total: ${total}`;
calculaIVA(100);