import React from "react";

const Birthday = (props) => {
  const getOlder = function () {
    props.getOneMore();
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
    </div>
  );
};

export default Birthday;
