import React, { useState, useEffect } from "react";
import "../stylesheets/counter.css";

const CounterF = () => {
  //console.log("Me estoy renderizando");
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    //console.log("Me estoy montando");
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    return () => {
      //console.log("Me estoy desmontando");
      clearInterval(intervalId);
    };
  });
  return (
    <div className="counter">
      <h3>Contador</h3>
      <p>Contador: {counter}</p>
    </div>
  );
};

export default CounterF;
