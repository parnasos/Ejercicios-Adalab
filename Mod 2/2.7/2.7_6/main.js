'use strict';
 const button = document.querySelector(".button");
 const favo1 = document.querySelector(".favo1");
 const favo2 = document.querySelector(".favo2");

 const pelisfavo = (event) => {
     event.preventDefault();
     const pelis = [favo1.value, favo2.value];
     for (const peli of pelis) {
     console.log(`¡A mí también me encantó ${peli}! Tenemos mucho en común, humana.`)
     }
    };
    
    button.addEventListener("click", pelisfavo);
