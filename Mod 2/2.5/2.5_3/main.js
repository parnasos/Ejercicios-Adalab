'use strict';

const message = document.querySelector(".message");
const extramessage = document.querySelector(".extramessage");


message.addEventListener ("mouseover", addmessage);

function addmessage () {
    extramessage.innerHTML= `Lorem ipsum ${message}`;
}
