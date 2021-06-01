import React from "react";
import "./App.css";
import MediaCard from "./MediaCard";
import foto from "./Laura.png";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    return (
      <h1>Pintar listados con React:</h1>
       
        {items.map(item => {
          // cada return retorna un li
          return (
            <li>
              <h2>Nombre: {item.name}</h2>
              <p>Descripción: {item.description}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Categoría: {item.category}</p>
              <p>Precio: {item.price}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
