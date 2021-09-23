var date = new Date();
//El resultado sigue siendo un objeto del que se puede sacar la fecha.
//El objeto new Date acepta diferentes parámentros.

console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
// El método new Date contabiliza el mes de enero como 0, luego conviene sumar 1.
var day = date.getDate();

console.log(
  "Hola, hoy es día " + day + " del mes " + month + " del año " + year + "."
);
