import React from "react";
const Images = {
  BuenosAires:
    "https://as01.epimg.net/argentina/imagenes/2020/12/30/actualidad/1609337929_894247_1609337986_noticia_normal_recorte1.jpg",
  Sydney:
    "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/sydney-australia/overview/sydney-australia-opera-house.jpg?$750x320$",
  Praga:
    "https://meraviglia.es/wp-content/uploads/2019/02/Cosas-a-tener-en-cuenta-en-Praga.jpg",
  Boston:
    "https://st2.depositphotos.com/2001403/5248/i/600/depositphotos_52487179-stock-photo-boston-harbor-and-financial-district.jpg",

  Tokyo:
    "https://images.photowall.com/products/71333/mt-fuji-and-tokyo-skyline.jpg",
};

function CityImage(props) {
  return (
    <>
      <p>Tu destino es viajar a {props.city}</p>
      <img className="image" src={Images[props.city]} alt={props.city} />
    </>
  );
}
export { CityImage };
