'use strict';

const paragraph = document.querySelector(".p");

window.addEventListener ("scroll", changebackground);

function changebackground() {
    
    if (window.scrollY>=250){
        paragraph.classList.remove("bg1");
        paragraph.classList.add("bg2");
    }
    else if (window.scrollY<250) {
        paragraph.classList.remove("bg2");
        paragraph.classList.add("bg1");
    }
   
}
