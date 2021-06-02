import React from "react";
import "../stylesheet/App.css";
import HalfPage from "./HalfPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HalfPage title="Soy el título de la izquierda">
          <p> Estoy en la izquierda</p>
        </HalfPage>
        <HalfPage title="Soy el título de la derecha">
          <p> Estoy en la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
