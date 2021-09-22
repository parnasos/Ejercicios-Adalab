//const TOTAL = 102;
//const PEOPLE = 6;
//const TOTAL_BY_PERSON = TOTAL / PEOPLE;
//console.log(TOTAL_BY_PERSON);

/*const PRICE_MOBILE = 300;
const PRICE_HEADPHONES = 30;
const PRICE_CASE = 10;
const DISCOUNT = 10;
const TOTAL = PRICE_MOBILE + PRICE_HEADPHONES + PRICE_CASE;
const SUBTOTAL = (TOTAL * 10) / 100;
console.log(SUBTOTAL);

console.log(3 + "1");*/

/*
 * OPERADOR TERNARIO
 * Quiero irme de viaje, ¿tengo suficiente dinero?
 * Sí, me voy de viaje.
 * No, tengo que seguir ahorrando.
 */
const flight = 100;
const hotel = 50;
const tour = 30;
const total = flight + hotel + tour;
const budget = 100;

const result =
  budget > total
    ? console.log("Sí, me voy de viaje")
    : console.log("No, no me voy de viaje");
