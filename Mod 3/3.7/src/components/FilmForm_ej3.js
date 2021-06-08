import React, { useState } from "react";
import "../stylesheets/App.css";

const FilmForm_ej3 = () => {
  const [state, setState] = useState({
    firstName: "",
    description: "",
    Lenguage: "",
    aundiance: "",
  });
  //   const handleChange = (event) => {
  //     const value = event.target.value;
  //     setState({
  //       ...state,
  //       [event.target.id]: value,
  //     });
  //   };
  const handleName = (ev) => {
    setState({
      // ...state,
      firstName: ev.target.value,
    });
  };
  const handleDescrip = (ev) => {
    setState({
      //...state,
      description: ev.target.value,
    });
  };
  const handleLenguage = (ev) => {
    setState({
      //...state,
      Lenguage: ev.target.value,
    });
  };
  const handleAudiance = (ev) => {
    setState({
      //...state,
      audiance: ev.target.value,
    });
  };
  return (
    <>
      <form>
        <label htmlFor="FirstName">Name:</label>
        <input
          id="FirstName"
          type="text"
          value={state.firstName}
          onChange={handleName}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={state.description}
          onChange={handleDescrip}
        />

        <label htmlFor="lenguage">Lenguage:</label>
        <select id="lenguage" value={state.lenguage} onChange={handleLenguage}>
          <option value="0" disabled>
            Select:
          </option>
          <option value="spanish">Spanish</option>
          <option value="portuguese">Portuguese</option>
          <option value="english">English</option>
        </select>
        <input type="submit" value="Enviar" />
        <label>
          A
          <input
            type="radio"
            name="audiance"
            value="A"
            checked={state.audiance === "A"}
            onChange={handleChange}
            checked
          />
        </label>
        <label>
          7
          <input
            type="radio"
            name="audiance"
            value="7"
            checked={state.level === "7"}
            onChange={handleChange}
          />
        </label>
        <label>
          12
          <input
            type="radio"
            name="audiance"
            value="12"
            checked={state.level === "12"}
            onChange={handleChange}
          />
        </label>
        <label>
          16
          <input
            type="radio"
            name="audiance"
            value="16"
            checked={state.level === "16"}
            onChange={handleChange}
          />
        </label>
        <label>
          18
          <input
            type="radio"
            name="audiance"
            value="18"
            checked={state.level === "18"}
            onChange={handleChange}
          />
        </label>
      </form>

      <p>Nombre:{state.firstName}</p>
      <p>Description:{state.description}</p>
      <p>Lenguage:{state.lenguage}</p>
      <p>Audiance:{state.audiance}</p>
    </>
  );
};

export default FilmForm_ej3;
