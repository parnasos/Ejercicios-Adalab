import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import GetApiData from "./services/GetApiData";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetApiData().then((userData) => {
      setUsers(userData);
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="title">Buscando Personas</div>
      </div>
    </>
  );
};

export default App;
