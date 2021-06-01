import React from "react";
import "./App.js";
import "../stylesheet/HalfPage.css";

class HalfPage extends React.Component {
  render() {
    return (
      <div className="halfPage">
        <h1>{this.props.title}</h1>
        <div className="halfPage__text">{this.props.children}</div>
      </div>
    );
  }
}

export default HalfPage;
