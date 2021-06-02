import React from "react";
import propTypes from "prop-types";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}</p>
      </>
    );
  }
}

Item.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.isRequired,
};
Item.defaultProps = {
  description: "No hay descripción",
};

export default Item;
