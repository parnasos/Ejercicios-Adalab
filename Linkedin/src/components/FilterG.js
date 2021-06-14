import React from "react";

const FilterG = (props) => {
  return (
    <>
      <label className="from__label" htmlfor="gender">
        Género
      </label>
      <select className="form__select" name="gender" id="gender">
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="man">Hombre</option>
        <option value="no binary">No binario</option>
      </select>
    </>
  );
};
export default FilterG;
