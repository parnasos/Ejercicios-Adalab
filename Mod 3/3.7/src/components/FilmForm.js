import React, { useState } from "react";
import "../stylesheets/App.css";

const FilmForm = () => {
  const [state, setState] = useState({
    firstName: "",
    description: "",
    Lenguage: "",
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
      </form>

      <p>Nombre:{state.firstName}</p>
      <p>Description:{state.description}</p>
      <p>Lenguage:{state.lenguage}</p>
    </>
  );
};

export default FilmForm;
