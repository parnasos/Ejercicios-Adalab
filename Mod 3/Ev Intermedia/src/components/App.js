import React, { useState } from "react";
import data from "../data.json";
import ClubList from "./ClubList";
import "../stylesheets/App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Mis clubes favoritos</h1>
      <ClubList list={data} />
    </div>
  );
};

export default App;
