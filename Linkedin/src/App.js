import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import GetApiData from "./services/GetApiData";
import ls from "./services/local-storage";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetApiData().then((userData) => {
      setUsers(userData);
    });
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]); //guardo en en el array siempre que cambia users

  return (
    <>
      <div className="App">
        <div className="title">Buscando Personas</div>
        <UserList users={users} />
      </div>
    </>
  );
};

export default App;
