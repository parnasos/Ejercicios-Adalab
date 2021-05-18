"use strict";

const form = document.querySelector(".js-form");
const pic1 = document.querySelector(".pic1");
const pic2 = document.querySelector(".pic2");
const pic3 = document.querySelector(".pic3");

const picCities = [pic1, pic2, pic3];
function handlerChoose(ev) {
  const cityChosen = ev.target.value;
  console.log(cityChosen);
  for (const picCity of picCities) {
    
    if (cityChosen === "Madrid") {
      pic1.setAttribute(
        "src",
        "https://ep00.epimg.net/elpais/imagenes/2020/03/14/album/1584179918_645596_1584180038_album_normal.jpg"
      );
      pic2.setAttribute(
        "src",
        "https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg"
      );
      pic3.setAttribute(
        "src",
        "https://www.hosteleriamadrid.com/wp-content/uploads/2020/03/cuatrotorres-2.png"
      );
    } else if (cityChosen === "New York") {
      pic1.setAttribute(
        "src",
        "https://viajes.nationalgeographic.com.es/medio/2019/03/20/empire-state-building_9922760a_500x782.jpg"
      );
      pic2.setAttribute(
        "src",
        "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/eeuu_nuevayork-puente_brooklyn_kgettyrf_555749235_tony_shi_photography_getty_images.jpg?itok=HB475K6E"
      );
      pic3.setAttribute(
        "src",
        "https://aws.traveler.es/prod/designs/v1/assets/940x627/150514.jpg"
      );
    } else if (cityChosen === "Paris") {
      pic1.setAttribute(
        "src",
        "https://images.clarin.com/2020/12/15/paris-inicia-el-nuevo-ano___cRkX1LKy2_340x340__1.jpg"
      );
      pic2.setAttribute(
        "src",
        "https://cdn2.civitatis.com/francia/paris/guia/paris-museum-pass.jpg"
      );
      pic3.setAttribute(
        "src",
        "https://aws.traveler.es/prod/designs/v1/assets/940x627/98404.jpg"
      );
    }
  }
}

form.addEventListener("click", handlerChoose);
