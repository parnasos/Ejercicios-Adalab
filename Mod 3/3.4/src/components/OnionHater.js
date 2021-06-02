import React from "react";

const onChangeListener = (ev) => {
  if (ev.target.value.includes("cebolla")) {
    alert("Odio la cebolla");
  }
};

const textarea = (
  <label>
    Ojo a la cebolla
    <input
      id="comida"
      type="textarea"
      placeholder="Cebolla"
      onChange={onChangeListener}
    ></input>
  </label>
);

class OnionHater extends React.Component {
  render() {
    return textarea;
  }
}

export { OnionHater };
