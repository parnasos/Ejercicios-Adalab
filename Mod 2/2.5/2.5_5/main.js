'use strict';

const doc = document.querySelector("html")

doc.addEventListener ("keydown", changebackground);

function changebackground(event) {
    
    if (event.key==="r"){
        doc.classList.remove("bg1");
        doc.classList.add("bg1");
    }
    else if (event.key==="p") {
        doc.classList.remove("bg1");
        doc.classList.add("bg2");
    }
   
}
