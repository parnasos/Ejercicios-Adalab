import React from "react";

const SelectCity = (ev) => {
  if (ev.target.value !== null) {
    alert(
      `Tu destino es viajar a ${ev.target.value}, siendo ${ev.target.value} la ciudad seleccionada`
    );
  }
};

const cities = (
  <form>
    <label for="cities">
      Qué destino eliges?
      <select ide="cities" name="cities" onChange={SelectCity}>
        <option value="#" disabled>
          Elige un destino
        </option>
        <option value="Buenos Aires">BBAA</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </label>
  </form>
);

class Destiny extends React.Component {
  render() {
    return cities;
  }
}
export { Destiny };
