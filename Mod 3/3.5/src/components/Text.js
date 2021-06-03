import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    return (
      <>
        <form>
          <input type="text" onChange={this.handleChange}></input>
        </form>
        <p>{this.state.text}</p>
      </>
    );
  }
}

export default Text;
