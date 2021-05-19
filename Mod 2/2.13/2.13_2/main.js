"use strict";

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const makeSayHi = (name) => `Bienvenida ${name}`;
const sayHi = names.map(makeSayHi);
console.log(sayHi);
