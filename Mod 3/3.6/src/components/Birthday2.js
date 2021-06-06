import React from "react";

const Birthday2 = (props) => {
  const getOlder = function () {
    props.getOneMore();
  };
  const getMaterialistic = function () {
    props.getOneMoreP();
  };

  return (
    <div className="body">
      <span className="txt">Hoy tengo {props.myAge} años de edad.</span>
      <input
        className="btn"
        type="submit"
        onClick={getOlder}
        value="¡Un año más!"
      />

      <span className="txt">¡Tengo {props.myPresents} regalo(s)!</span>
      <input
        className="btn"
        type="submit"
        onClick={getMaterialistic}
        value="¡Otro regalo!"
      />
    </div>
  );
};

export default Birthday2;
