import React from "react";
import "./App.css";
import MediaCard from "./MediaCard";
import foto from "./Laura.png";

class App extends React.Component {
  render() {
    return (
      <MediaCard
        name="Laura Graizer"
        date="Lunes 31 de mayo de 2021"
        photo={foto}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum."
        likes="103"
        heart="fas fa-heartbeat"
      />
    );
  }
}

export default App;
