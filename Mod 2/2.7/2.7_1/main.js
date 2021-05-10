'use strict';

const pelis =["Pequeña miss Sunshine", "Captain Fantastic", "Primos"]
pelis[3] = "Up";
pelis[2] = "Joker";
console.log(pelis);

function workWithMovies () {
    return `${pelis}`;
}

console.log(workWithMovies());