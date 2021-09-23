var pi = Math.PI;
//Dentro de la librería disponemos de constantes como Pi y de métodos.

console.log(Math.min(1, 2, 3, 4, 5, -10));
console.log(Math.max(1, 2, 3, 4, 5, -10));
console.log(Math.round(4.45)); // para redondear
console.log(Math.floor(4.8)); // para redondera a la baja
console.log(Math.ceil(4.2)); // para redondear hacia arriba.

//Generar números aleatorios.

var aleatorio = Math.random(); // Genera númer entre 0 y 1.

/*Para poder gestionar los límites de los números random, aprovechamos el método .random y lo multiplicamos por el númper max que establezacmos, pasándolo por parámetro y redondeando para que no haya decimales.*/

function generarNumero(numeroMax) {
  return Math.round(Math.random() * numeroMax);
}
console.log(generarNumero(100));
