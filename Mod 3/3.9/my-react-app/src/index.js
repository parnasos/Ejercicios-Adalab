import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./stylesheets/index.css";
import Applinkedin from "./Applinkedin";

ReactDOM.render(
  <HashRouter>
    <Applinkedin />
  </HashRouter>,
  document.getElementById("root")
);
