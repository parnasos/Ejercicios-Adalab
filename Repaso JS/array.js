var colores = ["verde", "azul", "rojo"];
console.log(colores);
console.log(colores[0]);

//incrementar valores del array

colores.push("negro");
console.log(colores);

//BUCLES

for (var i = 0; i < colores.length; i++) {
  console.log(colores[i]); // asi no me aparece el número del indice si no su valor.
}
