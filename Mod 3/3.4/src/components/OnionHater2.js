import React from "react";
import "../stylesheets/OnionHater2.css";

class OnionHater2 extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }

  render() {
    const className = this.isHating === true ? "alert" : "textarea";
    return (
      <>
        <label className={className}>
          Ojo a la cebolla
          <input
            id="comida"
            type="textarea"
            placeholder="Cebolla"
            onChange={this.handleChange}
          ></input>
        </label>
      </>
    );
  }
}

export { OnionHater2 };
