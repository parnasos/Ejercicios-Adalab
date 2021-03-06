import React from "react";
import "./App.css";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    //LISTADO DE PROMOS SIN FILTRAR
    /*return (
      <div>
        <h1>Pintar listados de nombres y edades:</h1>

        {students.map((student) => {
          return (
            <li>
              <p>Promo: {student.promo}</p>
              <p>Nombre: {student.name}</p>
              <p>Edad: {student.age}</p>
            </li>
          );
        })}
      </div>
    )*/
    // LISTADO FILTRANDO LA PROMO A
    return (
      <div>
        ;<h1>Pintar listados de nombres y edades:</h1>
        {students
          .filter((student) => student.promo === "A")
          .map((student) => {
            return (
              <li>
                <p>Promo: {student.promo}</p>
                <p>Nombre: {student.name}</p>
                <p>Edad: {student.age}</p>
              </li>
            );
          })}
      </div>
    );
  }
}

export default App;
