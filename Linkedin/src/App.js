import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import GetApiData from "./services/GetApiData";
import ls from "./services/local-storage";

const App = () => {
  const usersLocalStorage = ls.get("users", []); //el segundo parámetro corresponde a defaultData
  const [users, setUsers] = useState(usersLocalStorage);
  const [filterText, setFilterText] = useState(ls.get("filterText", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterCity, setFilterCity] = useState(ls.get("filterCity", ""));

  useEffect(() => {
    if (users.length === 0) {
      GetApiData().then((userData) => {
        setUsers(userData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]); //guardo en en el array siempre que cambia users

  return (
    <>
      <div className="App">
        <h1 className="title">Buscando Personas</h1>
        <Filters />
        <UserList users={users} />
      </div>
    </>
  );
};

export default App;
