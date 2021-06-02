import React from "react";
import "../stylesheets/OnionHater2.css";

class OnionHater2 extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    const label = document.querySelector(".textarea");
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      label.classList.add("alert");
    } else {
      this.isHating = false;
      label.classList.remove("alert");
    }
  }

  render() {
    const textarea = (
      <label className="textarea">
        Ojo a la cebolla
        <input
          id="comida"
          type="textarea"
          placeholder="Cebolla"
          onChange={this.handleChange}
        ></input>
      </label>
    );
    return textarea;
  }
}

export { OnionHater2 };
