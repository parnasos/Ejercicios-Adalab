'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://www.traficantes.net/sites/default/files/federici.web_.gif';
//let userAvatar = '';

const picAvatar= document.querySelector(".user__avatar");
picAvatar.src=`${userAvatar || DEFAULT_AVATAR}`
