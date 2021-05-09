'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'peridiosta',

};
 const adalaber2 = {
     name: 'Rocío',
     age: 25,
     job: 'actriz',
 };

 const p = document.querySelector(".p");
 p.innerHTML= `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;