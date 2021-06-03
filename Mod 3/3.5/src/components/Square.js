import React from "react";
import "../stylesheets/Square.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { styling: "blue" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((prevState, props) => ({
      styling: prevState.styling === "blue" ? "red" : "blue",
    }));
  }
  render() {
    return (
      <div className="body">
        <div className={this.state.styling} onClick={this.handleClick}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Square;
