import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Pricing">Pricing</Link>
      </li>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Pricing" component={Pricing} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
