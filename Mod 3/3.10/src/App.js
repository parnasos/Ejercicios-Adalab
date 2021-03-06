import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CounterF from "./components/CounterF";
import Menu from "./components/Menu";
import Relax from "./components/Relax";
import "./stylesheets/App.css";
//import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <li>
        <Link to="/menu">Menú</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/relax">Relax</Link>
      </li>
      <main>
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/counter" component={CounterF} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
