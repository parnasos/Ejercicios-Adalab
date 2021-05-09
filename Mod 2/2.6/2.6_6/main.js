'use strict';

const pearsBasket = { }
 pearsBasket.max = 10;
 pearsBasket.min = 2;
 pearsBasket.current = 9;
 pearsBasket.initial =5;
 pearsBasket.add = function (n) {
    pearsBasket.current+=n;
    return `Tienes ${pearsBasket.current} peras.`
     };

 pearsBasket.remove = function (n) {
    pearsBasket.current-=n;
    return `Tienes ${pearsBasket.current} peras.`
         };

 pearsBasket.reset = function (n) {
    pearsBasket.current=pearsBasket.initial;
    return `Tienes ${pearsBasket.current} peras.`
         };

 console.log(pearsBasket.add(5));
 console.log(pearsBasket.remove(3));
 console.log(pearsBasket.reset());