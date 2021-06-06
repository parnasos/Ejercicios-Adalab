import React from "react";

const Birthday = (props) => {
  const getOlder = function () {
    props.getOneMore();
  };

  return (
    <div>
      <span>Hoy tengo {props.myAge} años de edad.</span>
      <button type="button" onClick={getOlder}>
        ¡Un año más!
      </button>
    </div>
  );
};

export default Birthday;
