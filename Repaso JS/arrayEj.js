// bucle para mostrar sólo los números pares del array

var odds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var i = 0; i < odds.length; i = i + 2) {
  console.log(odds[i]);
}
//otra posibilidad: for (var i=0; i<odds.length;1++) { if (i%2==0){console.log(i)}}

//como sumar los numeros del array

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;
for (var i = 0; i < odds.length; i++) {
  total += numeros[i];
}

console.log("El total es: " + total);
