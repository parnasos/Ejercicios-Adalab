'use strict';
 
const adalabers = [
    {
        name: "María",
        age: 29,
        job: "diseñadora",
    },
    {
        name: "Lucía",
        age: 31,
        job: "ingeniera química",
    },
    {
        name: "Susana",
        age: 34,
        job: "periodista",
    },
    {
        name: "Rocío",
        age: 25,
        job: "actriz",
    },
    {
        name: "Inmaculada",
        age: 21,
        job: "diseñadora",
    },
]
function countAdalabers () {
  const result = adalabers.length;
   return result;
}
console.log(countAdalabers ());

 function averageAge () {
     let sumAge=0
     for(const adalaberAge of adalabers) {
    sumAge+=adalaberAge.age;
         }
     const result = sumAge/adalabers.length;
     return result;
 }
console.log(averageAge ());

/*function averageAge () {
    let acc=0;
    for(let age=0; age<adalabers.length; age++) {
   const sumAge+=adalabers.age;
   const result = sumAge/adalabers.length;
    }*/