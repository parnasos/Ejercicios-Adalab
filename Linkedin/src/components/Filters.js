import React from "react";
import FilterN from "./FilterN";
import FilterG from "./FilterG";
//import FilterC from "./FilterC";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterN />
        <FilterG />
        {/* <FilterC /> */}
      </form>
    </section>
  );
};

export default Filters;
