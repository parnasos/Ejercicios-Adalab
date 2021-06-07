import React from "react";
//import "../stylesheets/Square.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    this.updateClock = this.updateClock.bind(this);
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const dateUpdate = new Date();
    this.setState({ date: dateUpdate });
  }
  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}

export default Clock;
