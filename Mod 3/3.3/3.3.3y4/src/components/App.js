import React from "react";
import propTypes from "prop-types";
import Item from "Item";

class App extends React.Component {
  render() {
    const Items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];
    const result = Items.map((item) => {
      return (
        <li>
          <Item
            Nombre={item.name}
            Descripción={item.description}
            Precio={item.price}
            Categoría={item.category}
          />
        </li>
      );
    });
  }
}

export default App;
