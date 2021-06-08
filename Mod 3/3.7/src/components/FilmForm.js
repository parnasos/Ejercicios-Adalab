import React, { useState } from "react";
import "../stylesheets/App.css";

const FilmForm = () => {
  const [state, setState] = useState({
    firstName: "",
    description: "",
    Lenguage: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.id]: value,
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
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          //name="description"
          value={state.description}
          onChange={handleChange}
        />

        <label htmlFor="lenguage">Lenguage:</label>
        <select id="lenguage" value={state.lenguage} onChange={handleChange}>
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
