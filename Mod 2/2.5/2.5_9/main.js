'use strict';


const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherIsra = document.querySelector(".teacher--isra");
const teacherNasi = document.querySelector(".teacher--nasi");
const favorite = document.querySelector(".favorite");


teacherNasi.addEventListener ("click", addclass);
teacherIsra.addEventListener ("click", addclass);
teacherTuerto.addEventListener ("click", addclass);


function addclass(event) {
    event.currentTarget.classList.toggle("teacher--selected");
    
    if (event.currentTarget.querySelector(".favorite").innerHtml==="Añadir") {
        event.currentTarget.querySelector(".favorite").innerHtml=== "Quitar";
}
else {
    event.currentTarget.querySelector(".favorite").innerHtml= "Añadir";
}
}
