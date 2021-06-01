import React from "react";
import "./App.js";
import "../stylesheet/HalfPage2.css";

class HalfPage2 extends React.Component {
  render() {
    return (
      <div className="halfPage2">
        <h1>{this.props.title}</h1>
        <div className="halfPage2__text">{this.props.children}</div>
      </div>
    );
  }
}

export default HalfPage2;
